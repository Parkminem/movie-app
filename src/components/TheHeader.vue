<template>
  <header>
    <MainLogo />
    <div class="nav nav-pills">
      <div class="nav">
        <div v-for="nav in navigators" :key="nav.name" class="nav-item">
          <RouterLink :to="nav.href" active-class="active" class="nav-link">{{
            nav.name
          }}</RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import MainLogo from './main/MainLogo.vue'

const navigators = [
  {
    name: 'Search',
    href: '/'
  },
  {
    name: 'Movie',
    href: '/movie'
  }
]
</script>

<style lang="scss" scoped>
header {
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  .logo {
    margin-right: 40px;
  }
}
</style>
