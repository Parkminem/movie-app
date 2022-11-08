import { fetchMovieList } from '@/api/movieList'
import { createStore } from 'vuex'

export default createStore({
  state: {
    movieList: []
  },
  getters: {},
  mutations: {
    SET_MOVIE_LIST(state, moiveList) {
      state.movieList = moiveList
    }
  },
  actions: {
    FETCH_MOVIE_LIST({ commit }) {
      fetchMovieList()
        .then((result) => {
          commit('SET_MOVIE_LIST', result.data.movies)
          console.log(result.data.movies)
        })
        .catch((error) => console.log(error))
    }
  },
  modules: {}
})
