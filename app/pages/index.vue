<script setup lang="ts">
useSeoMeta({
  title: 'Home Page',
  description: 'This is the main page',
  ogTitle: 'Main Page',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: 'Main Page',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary',
})

useHead({
  htmlAttrs: {
    lang: 'pt-br',
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
})

definePageMeta({
  name: 'Home',
  navBar: true,
})
</script>

<template>
  <div>Home</div>
</template>
