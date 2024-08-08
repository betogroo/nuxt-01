<script setup lang="ts">
const route = useRoute()
definePageMeta({
  layout: 'default',
})

const enableCustomLayout = () => {
  setPageLayout(route.meta.layout === 'default' ? 'invert' : 'default')
}
</script>

<template>
  <div>About</div>
  <button @click="enableCustomLayout">Layout</button>
</template>
