<script setup lang="ts">
const colorMode = useColorMode()
const modes = ['system', 'light', 'dark']
const toggleColorMode = () => (colorMode.preference = nextMode.value!)

const nextModeIcons = {
  system: '🌓',
  light: '🌕',
  dark: '🌑',
}

const showNextModelLabel = ref(false)

const nextMode = computed(() => {
  const currentModeIndex = modes.indexOf(colorMode.preference)
  let nextModelIndex = 0
  if (currentModeIndex + 1 === modes.length) {
    nextModelIndex = 0
  } else {
    nextModelIndex = currentModeIndex + 1
  }
  return modes[nextModelIndex]
})

const nextModeIcon = computed(() => nextModeIcons[nextMode.value])
</script>

<template>
  <div class="flex space-x-2 items-center">
    <div v-if="showNextModelLabel">Changes to {{ nextMode }}</div>
    <button
      class="hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 text-gray-500"
      @click="toggleColorMode"
      @mouseenter="showNextModelLabel = true"
      @mouseleave="showNextModelLabel = false"
    >
      {{ nextModeIcon }}
    </button>
  </div>
</template>
