async function fetchMovieList() {
  try {
    const response = await fetch('https://yts.mx/api/v2/list_movies.json')

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`)
    }

    const result = await response.json()
    return result
  } catch (error) {
    console.log(error)
  }
}

export { fetchMovieList }
