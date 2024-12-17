<script setup lang="ts">
import {useHead} from 'nuxt/app'
useHead({
  title: 'MoovieTime',
  meta: [
    {
      name: 'description',
      content: 'movie database',
    },
    {
      name: 'keywords',
      content: 'moovie, list movie, download movie',
    },
  ]
})
</script>

<template>
  <Carousel />
  <Discover />
</template>