<template>
  <UPageSection>
    <UPageCTA
        description="Track your RNCP progress easily and clearly."
        title="Path42">
      <template #links>
        <UButton
            icon="i-lucide-graduation-cap" label="Open" @click="() => authClient.signIn.oauth2({
          providerId: 'fortytwo',
        })"/>
      </template>
    </UPageCTA>
  </UPageSection>
</template>
