<script setup lang="ts">
interface Props {
  item: any
}
const props = defineProps<Props>()
</script>

<template>
  <section>
    <ul class="grid grid-cols-1 gap-4 items-center">
      <li
        class="border border-gray-200 rounded-xl p-4 mt-1 hover:bg-gray-200 font-mono"
      >
        <a :href="item.html_url" target="_blank">
          <div class="flex items-center justify-between text-sm">
            <div class="font-semibold">{{ item.name }}</div>
            <div>{{ item.stargazers_count }}★</div>
          </div>
          <p class="text-sm">
            {{ item.description }}
          </p>
        </a>
      </li>
    </ul>
  </section>
</template>
