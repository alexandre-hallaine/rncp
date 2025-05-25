<template>
  <UPageSection>
    <UPageCTA title="42 RNCP">
      <template #links>
        <UButton icon="i-simple-icons-42" to="/api/auth/fortytwo" external />
      </template>
    </UPageCTA>
    <AuthState v-slot="{ user }">
      {{user}}
    </AuthState>
  </UPageSection>
</template>
