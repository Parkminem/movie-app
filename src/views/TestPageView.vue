<template>
  <TestPage :posts="posts" />
</template>

<script>
import TestPage from '@/components/TestPage.vue'
import { ref } from '@vue/reactivity'

export default {
  name: 'TestPageView',
  components: {
    TestPage
  },
  setup() {
    const posts = ref([
      { title: '1번 타이틀', body: '1번 제목', id: 1 },
      { title: '2번 타이틀', body: '2번 제목', id: 2 }
    ])

    return {
      posts
    }
  }
}
</script>

<style></style>
