<script setup lang="ts">
definePageMeta({
  name: 'Projects',
  navBar: true,
})

const { error, data, status } = await useFetch(
  'https://api.github.com/users/piotr-jura-udemy/repos',
)
</script>

<template>
  <div class="text-2xl font-semibold mb-10">Projects</div>
  <section v-if="status === 'pending'">Loading</section>
  <section v-if="error">Alguma coisa errada nao está certa</section>
  <section v-else>
    <ProjectList v-for="item in data" :item="item" :key="item.id" />
  </section>
</template>
