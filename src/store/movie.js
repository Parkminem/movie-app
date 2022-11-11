import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSearch = defineStore('search', () => {
  const OMDB_API_KEY = '366ae844'
  const movies = ref([])

  async function searchMovies(payload) {
    const { title, type, number, year } = payload
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`
    )
    console.log(res)
    return res
  }
  return {
    movies,
    searchMovies
  }
})
