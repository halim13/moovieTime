<script setup>
const props = defineProps({
  image: {
    type: String,
  },
  score: {
    type: [Number, String],
  },
  title: {
    type: String,
  },
  year: {
    type: [Number, String],
  },
  genre: {
    type: String,
  },
  description: {
    type: String,
  },
});
const {description, genre, image, score, title, year} = props;
import jsonData from '@/assets/data/genre.json';

function getImageSrc(img) {
  return new URL('https://image.tmdb.org/t/p/w440_and_h660_face' + img, import.meta.url).href
}

</script>

<template>
  <div class="flex flex-row">
    <img :src=getImageSrc(image) alt="" loading="lazy" class="w-[244px] min-h-[465px] max-h-[465px] object-cover">
    <div class="bg-black my-8 p-4 rounded-tr-lg rounded-br-lg">
      <div class="flex flex-row gap-2 font-bold items-center mb-1">
        <img src="@/assets/icon/star.png" class="h-4 w-4" alt="">
        <h1 class="text-white">{{ score }}</h1>
      </div>
      <p class="text-white mb-2 text-lg font-bold line-clamp-2">{{ title }}</p>
      <div class="flex flex-row gap-2 mb-2 items-center">
        <p class="text-white">{{ year?.split('-')?.[0] }}</p>
        <div class="w-2 h-2 bg-[#ffffff80] rounded-full" />
        <p class="text-white">{{ genre && jsonData?.filter(filter => genre === filter.id)?.[0]?.name }}</p>
      </div>
      <p class="text-white line-clamp-[9]">
        {{ description }}
      </p>
    </div>
  </div>
</template>