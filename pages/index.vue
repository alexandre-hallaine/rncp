<script setup lang="ts">
import { createAuthClient } from "better-auth/vue"

const authClient = createAuthClient()
const session = authClient.useSession()
</script>

<template>
  <UPageSection>
    <UPageCTA title="42 RNCP">
      <template #links>
        <UButton icon="i-simple-icons-42" @click="() => authClient.signIn.oauth2({
          providerId: 'fortytwo',
        })" />
      </template>
    </UPageCTA>
    <pre>{{ session.data }}</pre>
  </UPageSection>
</template>
