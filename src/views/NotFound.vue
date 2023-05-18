<template>
  <div class="error__page mt-5">
    <h1 class="blue--text">404</h1>
    <h2>Oops... Page Not Found</h2>
    <router-link class="go-back" to="/">Go to the homepage </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style>
.error__page {
  margin: 0 auto;
  text-align: center;
}
.error__page h1 {
  font-size: 50px;
}
.error__page h2 {
  font-size: 30px;
  color: rgb(90, 90, 90);
  margin-bottom: 30px;
}
</style>
