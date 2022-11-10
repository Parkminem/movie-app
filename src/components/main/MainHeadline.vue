<template>
  <div class="container">
    <h1>
      <span>Search Movie</span><br />
      THE OPEN<br />
      MOVIE DATABASE
    </h1>
    <p>
      Search Movie The Open Movie Database The OMDb API is a RESTful web service
      to obtain movie information, all content and images on the site are
      contributed and maintained by our users. If you find this service useful,
      please consider making a one-time donation or become a patron.
    </p>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '../../scss/main';

.container {
  margin-left: 40px;
  padding-top: 40px;
}
h1 {
  line-height: 1;
  font-family: 'Oswald', sans-serif;
  font-size: 80px;
  span {
    color: $primary;
  }
}
p {
  margin: 30px 0;
  color: $gray-600;
}
</style>
