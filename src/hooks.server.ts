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
        return {
          id: profile.id,
          email: profile.email,
          first_name: profile.first_name,
          last_name: profile.last_name,
          display_name: profile.display_name,
        }
      }
    } 
	],
});
