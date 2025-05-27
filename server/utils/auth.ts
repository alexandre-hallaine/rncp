import { betterAuth } from "better-auth";
import { genericOAuth } from "better-auth/plugins";

export const auth = betterAuth({
  plugins: [
    genericOAuth({
      config: [
        {
          providerId: "fortytwo",
          clientId: process.env.FORTYTWO_CLIENT_ID as string,
          clientSecret: process.env.FORTYTWO_CLIENT_SECRET as string,
          authorizationUrl: "https://api.intra.42.fr/oauth/authorize",
          tokenUrl: "https://api.intra.42.fr/oauth/token",
          userInfoUrl: "https://api.intra.42.fr/v2/me",
          scopes: ["public"],
        },
      ],
    }),
  ],
});
