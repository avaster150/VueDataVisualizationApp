<template>
  <v-app>
    <PageHeader />
    <router-view></router-view>
  </v-app>
</template>

<script>
import PageHeader from "./components/PageHeader.vue";
export default {
  name: "App",
  data: () => ({}),
  components: {
    PageHeader,
  },
  methods: {},
};
</script>
<style>
.person-container-element {
  border-radius: 0;
}
.person-container-element:hover {
  background: #eaeaea;
}
</style>
