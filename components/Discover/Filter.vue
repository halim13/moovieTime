<template>
  <div class="bg-[#0E1723] rounded-lg py-4">
    <h1 class="text-[#e5e5e5] font-semibold px-4">Sort Result By</h1>
    <hr class="border-[#ffffff12] my-4" />
    <h1 class="text-[#e5e5e5] font-semibold px-4">Genres</h1>
    <hr class="border-[#ffffff12] my-4" />
    <div class="px-4">
      <div class="mb-4" v-for="genre in jsonData">
        <div class="flex flex-row justify-between">
          <p class="text-[#e5e5e5]">{{ genre.name }}</p>
          <input id="checkbox" type="checkbox" value=""
            class="w-4 h-4 text-white bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import jsonData from '@/assets/data/genre.json'
</script>