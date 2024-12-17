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
  alt: {
    type: String,
  },
});
const {image, score, title, year} = props;

function getImageSrc(img) {
  return new URL('https://image.tmdb.org/t/p/w440_and_h660_face' + img, import.meta.url).href
}
</script>

<template>
  <img :src=getImageSrc(image) :alt=alt class="h-[330px] mb-2">
  <p class="absolute top-0 right-0 text-white font-bold py-1 px-3 bg-[#1E232Bcc]">{{ score }}</p>
  <p class="text-[#e5e5e5] font-bold mb-1">{{ title }}</p>
  <p class="text-[#929292]">{{ year?.split('-')[0] }}</p>
</template>