<template>
  <TestPage :posts="posts" />
</template>

<script setup>
import { ref } from '@vue/reactivity'
import TestPage from '@/components/TestPage.vue'

const posts = ref([
  { title: '1번 타이틀', body: '1번 제목', id: 1 },
  { title: '2번 타이틀', body: '2번 제목', id: 2 }
])
</script>

<style></style>
