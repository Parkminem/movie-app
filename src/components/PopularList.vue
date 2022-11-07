<template>
  <h1>Popular Movie list</h1>
  <div class="container">
    <div class="popular-item">
      <div v-for="item in popularList" :key="item.id">
        <div>{{ item.title }}</div>
        <img :src="item.medium_cover_image" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const popularList = ref([])

const getPopularList = () => {
  popularList.value = store.dispatch('FETCH_MOVIE_LIST')
}

onMounted(getPopularList)
</script>

<style>
.popular-item {
  display: flex;
  flex-flow: row wrap;
  margin: 100px;
  padding: 0;
}
</style>
