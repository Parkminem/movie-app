<template>
  <h1>Movie list</h1>
  <div class="container">
    <div class="movie-item">
      <div v-for="movie in store.state.movieList" :key="movie.id">
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
import { useStore } from 'vuex'

const store = useStore()

const getMovieList = () => {
  store.dispatch('FETCH_MOVIE_LIST')
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
