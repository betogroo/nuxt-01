<script setup lang="ts">
const route = useRoute()
console.log(route)
const id = route.params.id
</script>

<template>
  <div>We are on Blog - {{ id }}</div>
</template>
