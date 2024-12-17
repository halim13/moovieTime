<template>
  <swiper :slides-per-view="3" :space-between="24" @swiper="onSwiper" @slideChange="onSlideChange" :autoplay="{
    delay: 2500,
    disableOnInteraction: false,
  }" :effect="'coverflow'" :grabCursor="true" :coverflowEffect="{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }" class="my-16 mySwiper">
    <swiper-slide v-for="disc in discovers">
      <CarouselItem :image=disc.backdrop_path :title=disc.original_title :score=disc.vote_average
        :year=disc.release_date :description=disc.overview :genre=disc.genre_ids[0] />
    </swiper-slide>
  </swiper>
</template>

<script>
import {Swiper, SwiperSlide, useSwiper} from 'swiper/vue';

import 'swiper/css';
import jsonData from '@/assets/data/discover.json';

export default {
  data() {
    return {
      discovers: jsonData,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log('slide change');
    };
    return {
      onSwiper,
      onSlideChange,
      useSwiper,
    };
  },
};
</script>