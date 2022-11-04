<template>
  <h1>Popular Movie list</h1>
  <div class="container">
    <div class="popular-item">
      <div
        v-for="item in popularList"
        :key="item.id"
        :style="{ margin: '30px' }"
      >
        <div>{{ item.title }}</div>
        <img :src="item.medium_cover_image" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'

export default {
  name: 'PopularList',
  setup() {
    const popularList = ref([])

    const getPopularList = async () => {
      try {
        const response = await axios.get(
          'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
        )
        popularList.value = response.data.data.movies
        console.log(popularList.value)
        console.log(popularList)
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
.popular-item {
  display: flex;
  flex-flow: row wrap;
  margin: 100px;
  padding: 0;
}
</style>
