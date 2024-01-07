import { SvelteKitAuth } from "@auth/sveltekit"
import type { OAuth2Config } from "@auth/core/providers";
import { SIGNALWIRE_CLIENT_ID, SIGNALWIRE_CLIENT_SECRET, SIGNALWIRE_AUTH_URL, SIGNALWIRE_ACCESS_TOKEN_URL, SIGNALWIRE_USERINFO_URL } from "$env/static/private"

export const handle = SvelteKitAuth({
	providers: [
    {
      id: "signalwire",
      name: "SignalWire",
      type: "oauth",
      authorization: {
        url: SIGNALWIRE_AUTH_URL,
        params: { scope: "email" }
      },
      clientId: SIGNALWIRE_CLIENT_ID,
      clientSecret: SIGNALWIRE_CLIENT_SECRET,
      token: SIGNALWIRE_ACCESS_TOKEN_URL,
      userinfo: SIGNALWIRE_USERINFO_URL,
      profile(profile) {
        // console.log(profile);
        return {
          id: profile.id,
          email: profile.email,
          first_name: profile.first_name,
          last_name: profile.last_name,
          display_name: profile.display_name,
          job_title: profile.job_title,
          push_notification_key: profile.push_notification_key,
        }
      }
    } 
	],
  callbacks: {
    async session({ session, token }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token.accessToken
      session.user.id = token.id

      return session
    },    
    async jwt({ token, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (account) {
        token.accessToken = account.access_token
      }
      if (profile) {
        token.id = profile.id
      }
      return token
    },
  }
});
