<template>
  <h1>test script setup</h1>
  {{ props.posts[0] }}
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  posts: {
    type: Object
  }
})
</script>

<style></style>
