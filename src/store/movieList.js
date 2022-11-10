import { defineStore } from 'pinia'
import { fetchMovieList } from '@/api/movieList'
import { ref } from 'vue'

export const movieListStore = defineStore('movieList', () => {
  const movies = ref([])

  function fetchApi() {
    fetchMovieList().then((result) => {
      movies.value = result.data.movies
    })
  }

  return { movies, fetchApi }
})
