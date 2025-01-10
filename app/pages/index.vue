<script lang="ts" setup>
const { loggedIn } = useUserSession()
</script>

<template>
  <div>
    <template v-if="!loggedIn">
      <p>Please, login</p>
      <NuxtLink
        to="/api/auth/auth0"
        external
      >
        Login
      </NuxtLink>
    </template>
    <template v-else>
      Hello
    </template>
  </div>
</template>
