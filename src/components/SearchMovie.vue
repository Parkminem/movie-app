<template>
  <div class="container">
    <input
      class="form-control"
      type="text"
      placeholder="Search..."
      v-model="title"
    />
    <div class="selects">
      <select
        v-for="filter in searchItem.filters"
        :key="filter.name"
        class="form-select"
      >
        <option v-if="filter.name === 'year'" value="">All Years</option>
        <option v-for="item in filter.items" :key="item" value="">
          {{ item }}
        </option>
      </select>
    </div>
    <button class="btn btn-primary" @click="apply">Apply</button>
  </div>
</template>

<script setup>
import { searchStore } from '../store/search'

const searchItem = searchStore().searchItem
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
