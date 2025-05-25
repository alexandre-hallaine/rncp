import {sendRedirect} from "h3";

export default defineOAuthFortyTwoEventHandler({
  async onSuccess(event, { user }) {
    await setUserSession(event, { user: {
        id: user.id,
        login: user.login,
        name: user.usual_full_name
      }})
    return sendRedirect(event, '/')
  },
})
