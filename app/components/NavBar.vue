<script setup lang="ts">
const router = useRouter()
const routes = router
  .getRoutes()
  .filter((item) => item.meta && item.meta.navBar)
</script>
<template>
  <header class="flex justify-between items-center bg-blue-200 px-2">
    <div>
      <NuxtLink to="/" class="text-xl font-semibold hover:bg-gray-200 p-2"
        >betogroo</NuxtLink
      >
    </div>
    <nav class="font-mono">
      <ul class="flex space-x-4">
        <li v-for="route in routes">
          <NuxtLink :to="route.path" class="nav-bar-menu">{{
            route.meta.name
          }}</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
.nav-bar-menu {
  @apply p-1 hover:bg-slate-500;
}
</style>
