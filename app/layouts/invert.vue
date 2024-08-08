<script setup lang="ts"></script>

<template>
  <div>
    <slot />
    <nav>
      <ul>
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        <ul>
          <li v-for="id in 10">
            <NuxtLink :to="`/blog/${id}`">Blog página {{ id }}</NuxtLink>
          </li>
        </ul>
      </ul>
    </nav>
  </div>
</template>
