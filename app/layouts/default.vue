<script setup lang="ts"></script>

<template>
  <div class="container mx-auto bg-gray-100  max-w-2xl">
    <header class="flex justify-between items-center bg-blue-200 px-2">
      <div>
        <NuxtLink to="/" class="text-xl font-semibold hover:bg-gray-200 p-2" >betogroo</NuxtLink>
      </div>
      <nav class="font-mono">
        <ul class="flex space-x-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <main class="p-2">
      <slot />
    </main>
  </div>
</template>
