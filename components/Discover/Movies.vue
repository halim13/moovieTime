<script>
import jsonData from '@/assets/data/movies.json';

export default {
  data() {
    return {
      movies: jsonData,
    };
  },
}
</script>

<template>
  <div class="lg:col-span-3">
    <div class=" flex flex-wrap gap-2">
      <div class="relative w-[220px] mb-1" v-for="movie in movies">
        <DiscoverMovieItem :title=movie.title :year=movie.release_date :score=movie.vote_average
          :alt=movie.original_title :image=movie.backdrop_path />
      </div>
    </div>
    <div class="flex justify-center">
      <button class="bg-[#FF0000] text-[#e5e5e5] py-1 px-4 rounded-full mt-8">Load More</button>
    </div>
  </div>
</template>