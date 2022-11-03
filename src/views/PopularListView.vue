<template>
  <h1>Popular Movie list</h1>
  <div class="popular">
    <div v-for="item in popularList" v-bind:key="item.id" style="margin: 30px">
      <div>{{ item.title }}</div>
      <img :src="item.medium_cover_image" />
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
import axios from 'axios'

export default {
  name: 'PopularList',
  setup() {
    const popularList = ref([])

    const getPopularList = async () => {
      try {
        popularList.value = await axios.get(
          'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
        )
        popularList.value = popularList.value.data.data.movies
        console.log(popularList.value)
      } catch (error) {
        console.log(error)
      }
    }

    onMounted(getPopularList)

    return {
      popularList
    }
  }
}
</script>

<style>
.popular {
  display: flex;
  flex-flow: row wrap;
  margin: 100px;
  padding: 0;
}
</style>
