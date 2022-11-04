<template>
  <h1>Test Page</h1>
</template>

<script>
export default {
  name: 'TestPage',
  props: ['posts'],

  setup(props) {
    console.log(props.posts)
  }
}
</script>

<style></style>
