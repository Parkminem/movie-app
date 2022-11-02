<template>
  <h1>Popular Movie list</h1>
  <div class="popular">
    <div v-for="item in popularList" v-bind:key="item.id">
        <div>{{ item.title }}</div>
        <img :src="item.medium_cover_image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopularList',
  data () {
    return {
      popularList: []
    }
  },
  methods: {
    getPopularList () {
      this.axios.get('https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year').then((res) => {
        console.log(res)
        this.popularList = res.data.data.movies
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.getPopularList()
  }
}
</script>

<style>
    .popular {
        display: flex;
        flex-flow: row wrap;
        margin: 100px;
    }
</style>
