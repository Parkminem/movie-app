import axios from 'axios'

function fetchMovieList() {
  return axios.get('https://yts.mx/api/v2/list_movies.json')
}

export { fetchMovieList }
