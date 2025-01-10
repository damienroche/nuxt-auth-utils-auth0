import { navigateTo, defineNuxtRouteMiddleware, useUserSession } from '#imports'

export default defineNuxtRouteMiddleware(async () => {
  const { loggedIn } = useUserSession()
  if (!loggedIn.value) {
    return navigateTo('/api/auth/auth0', { external: true })
  }
})
