<script setup lang="ts">
const session = authClient.useSession()
</script>

<template>
  <UPageSection>
    <UCard>
      <pre>{{ session }}</pre>
    </UCard>
  </UPageSection>
</template>
