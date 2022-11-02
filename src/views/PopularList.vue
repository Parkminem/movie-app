<template>
  <div class="popular">
    <h1>This is Popular Movie list</h1>
  </div>
</template>

<script>

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
}

fetch('https://api.themoviedb.org/3/movie/popular?api_key=df3503e42a05975820add8b54b573099&language=en-US&page=1', requestOptions)
  .then(response => response.json())
  .then(data => console.log(data.results))
  .catch(error => console.log('error', error))
export default {
  name: 'PopularList',
  data () {
    return {
      popularList: []
    }
  }
}
</script>

<style>
    .popular {
        width: 800px; margin: 20px auto;
    }
</style>
