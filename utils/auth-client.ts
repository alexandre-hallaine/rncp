import {createAuthClient} from "better-auth/vue"
import {genericOAuthClient} from "better-auth/client/plugins"

export const {signIn, signUp, useSession} = createAuthClient({
    plugins: [genericOAuthClient()]
})
