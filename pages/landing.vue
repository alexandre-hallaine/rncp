<script setup lang="ts">
function login() {
  signIn.oauth2({
    providerId: 'fortytwo',
  })
}
</script>

<template>
  <UPageSection>
    <UPageCTA
        description="Track your RNCP progress easily and clearly."
        title="Path42">
      <template #links>
        <UButton
            icon="i-lucide-graduation-cap" label="Open" @click="login"/>
      </template>
    </UPageCTA>
  </UPageSection>
</template>
