<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
