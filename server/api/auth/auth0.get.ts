export default defineOAuthAuth0EventHandler({
  config: {
    emailRequired: true,
    redirectURL: 'http://localhost:3000'
  },
  onError(event, error) {
    console.log('error', error, event)
  },
  async onSuccess(event, { user }) {
    console.log('success')
    await setUserSession(event, {
      user,
      loggedInAt: Date.now(),
    })

    return sendRedirect(event, '/dashboard')
  },
})
