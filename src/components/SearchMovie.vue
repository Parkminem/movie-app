<template>
  <div class="container">
    <input
      v-model="searchFilters.title"
      class="form-control"
      type="text"
      placeholder="Search..."
      @keyup="apply"
    />
    <div class="selects">
      <select
        v-for="filter in searchFilters.filters"
        v-model="searchFilters[filter.name]"
        :key="filter.name"
        class="form-select"
      >
        <option v-if="filter.name === 'year'" value="">All Years</option>
        <option v-for="item in filter.items" :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button class="btn btn-primary" @click="apply">Apply</button>
  </div>
</template>

<script setup>
import { useSearch } from '@/store/movie'
import { ref } from 'vue'

const searchFilters = ref({
  title: '',
  type: 'movie',
  number: 10,
  year: '',
  filters: [
    {
      name: 'type',
      items: ['movie', 'series', 'episode']
    },
    {
      name: 'number',
      items: [10, 20, 30]
    },
    {
      name: 'year',
      items: () => {
        const years = []
        const thisYear = new Date().getFullYear()
        for (let i = thisYear; i >= 1985; i--) {
          years.push(i)
        }
        return years
      }
    }
  ]
})

const apply = () => {
  useSearch().searchMovies({
    title: searchFilters.value.title,
    type: searchFilters.value.type,
    number: searchFilters.value.number,
    year: searchFilters.value.year
  })
  console.log(useSearch().movies)
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  > * {
    margin-right: 10px;
    font-size: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
  .selects {
    display: flex;
    select {
      width: 120px;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .btn {
    width: 120px;
    height: 50px;
    font-weight: 700;
    flex-shrink: 0;
  }
}
</style>
