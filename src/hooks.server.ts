import { SvelteKitAuth } from '@auth/sveltekit';
import {
  SIGNALWIRE_CLIENT_ID,
  SIGNALWIRE_CLIENT_SECRET,
  SIGNALWIRE_AUTH_URL,
  SIGNALWIRE_ACCESS_TOKEN_URL,
  SIGNALWIRE_USERINFO_URL
} from '$env/static/private';

export const handle = SvelteKitAuth({
  providers: [
    {
      id: 'signalwire',
      name: 'SignalWire',
      type: 'oauth',
      authorization: {
        url: SIGNALWIRE_AUTH_URL,
        params: { scope: 'email' }
      },
      clientId: SIGNALWIRE_CLIENT_ID,
      clientSecret: SIGNALWIRE_CLIENT_SECRET,
      token: SIGNALWIRE_ACCESS_TOKEN_URL,
      userinfo: SIGNALWIRE_USERINFO_URL,
      profile(profile) {
        return {
          id: profile.id,
          email: profile.email,
          firstName: profile.first_name,
          lastName: profile.last_name,
          displayName: profile.display_name,
          jobTitle: profile.job_title,
          timeZone: profile.time_zone,
          counry: profile.country,
          region: profile.region,
          // companyName: profile.company_name,
        };
      }
    }
  ],
  callbacks: {
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      // console.log('hooks.server.ts session = ', session, token);
      session.accessToken = token.accessToken;
      session.user.id = token.id;
      session.user.email = token.email;

      return session;
    },
    async jwt({ token, account, user }) {
      if (account && user) {
        // Persist the OAuth access_token and or the user id to the token right after signin
        return {
          id: user.id,
          email: user.email,
          accessToken: account.access_token,
          expiresAt: Math.floor(Date.now() / 1000 + account.expires_in),
          refreshToken: account.refresh_token,
        }
      } else if (Date.now() < token.expiresAt * 1000) {
        // If the access token has not expired yet, return it
        return token;        
      } else {
        // If the access token has expired, try to refresh it
        try {
          const response = await fetch(SIGNALWIRE_ACCESS_TOKEN_URL, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
              client_id: SIGNALWIRE_CLIENT_ID,
              client_secret: SIGNALWIRE_CLIENT_SECRET,
              grant_type: "refresh_token",
              refresh_token: token.refreshToken,
            }),
            method: "POST",
          })

          const tokens: TokenSet = await response.json()

          if (!response.ok) throw tokens

          return {
            ...token, // Keep the previous token properties
            accessToken: tokens.access_token,
            expiresAt: Math.floor(Date.now() / 1000 + tokens.expires_in),
            // Fall back to old refresh token, but note that
            // many providers may only allow using a refresh token once.
            refreshToken: tokens.refresh_token ?? token.refreshToken,
          }
        } catch (error) {
          console.error("Error refreshing access token", error)
          // The error property will be used client-side to handle the refresh token error
          return { ...token, error: "RefreshAccessTokenError" as const }
        }        
      }
    }
  }
});
