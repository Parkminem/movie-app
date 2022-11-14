<template>
  <div class="container">
    <div class="inner">
      <MovieItem v-for="movie in movies" :key="movie.imbId" :movie="movie" />
    </div>
  </div>
</template>

<script setup>
import MovieItem from '@/components/MovieItem.vue'
</script>

<style></style>
