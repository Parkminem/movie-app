import { fetchMovieList } from '@/api/movieList'
import { createStore } from 'vuex'

export default createStore({
  state: {
    movieList: []
  },
  getters: {
    fetchedAsk(state) {
      return state.ask
    }
  },
  mutations: {
    SET_MOVIE_LIST(state, moiveList) {
      state.movieList = moiveList
    }
  },
  actions: {
    FETCH_MOVIE_LIST(context) {
      fetchMovieList()
        .then((response) => {
          console.log(response.data.data.movies)
          context.commit('SET_MOVIE_LIST', response.data.data.movies)
        })
        .catch((error) => console.log(error))
    }
  },
  modules: {}
})
