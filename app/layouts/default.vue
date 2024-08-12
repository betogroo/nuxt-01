<script setup lang="ts">
useHead({
  titleTemplate: `Beto's App %s`,
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
      crossorigin: '',
    },
  ],
})
</script>

<template>
  <div class="container mx-auto max-w-2xl">
    <NavBar />
    <main class="p-2">
      <slot />
    </main>
  </div>
</template>

<style>
body {
  font-family: 'Roboto';
}
body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>
