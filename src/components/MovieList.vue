<template>
  <div class="container">
    <div class="movie-item">
      <div v-for="movie in movieList.movies" :key="movie.id">
        <router-link :to="`${movie.id}`">
          <div>{{ movie.title }}</div>
          <img :src="movie.medium_cover_image" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { movieListStore } from '@/store/movieList'

const movieList = movieListStore()
const getMovieList = () => {
  movieList.fetchApi()
}

onMounted(getMovieList)
</script>

<style>
.movie-item {
  display: flex;
  flex-flow: row wrap;
  margin: 100px;
  padding: 0;
}
</style>
