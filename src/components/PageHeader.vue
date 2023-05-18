<template>
  <v-toolbar class="page__header">
    <router-link to="/">
      <v-btn class="header__button" text>Data Visualization App</v-btn>
    </router-link>
    <router-link to="/favorites">
      <v-btn class="header__button" text> Favorites </v-btn>
    </router-link>
  </v-toolbar>
</template>
<script>
export default {};
</script>
<style>
.page__header {
  flex: 0;
}
.router-link-exact-active button {
  color: var(--primaryColor) !important;
}
@media (max-width: 400px) {
  .header__button {
    font-size: 0.675rem !important;
  }
}
</style>
