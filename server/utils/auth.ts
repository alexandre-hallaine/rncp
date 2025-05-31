import {betterAuth} from "better-auth";
import {genericOAuth} from "better-auth/plugins";
import {drizzleAdapter} from "better-auth/adapters/drizzle";

interface Profile {
  id: string
  displayname: string
  image: { link: string }
  email: string
  emailVerified: boolean
  createdAt: Date
  updatedAt: Date
}

let _auth: ReturnType<typeof betterAuth>
export function auth() {
  if (_auth) return _auth
  return _auth = betterAuth({
    database: drizzleAdapter(useDrizzle(), {
      provider: "sqlite",
    }),
    plugins: [
      genericOAuth({
        config: [
          {
            providerId: "fortytwo",
            clientId: process.env.FORTYTWO_CLIENT_ID as string,
            clientSecret: process.env.FORTYTWO_CLIENT_SECRET as string,
            authorizationUrl: "https://api.intra.42.fr/oauth/authorize",
            tokenUrl: "https://api.intra.42.fr/oauth/token",
            scopes: ["public"],
            getUserInfo: async (tokens) => {
              const me: Profile = await $fetch('https://api.intra.42.fr/v2/me', {
                headers: {Authorization: `Bearer ${tokens.accessToken}`,},
              });
              return {
                ...me,
                name: me.displayname,
                image: me.image.link
              }
            }
          },
        ],
      }),
    ],
  })
}
