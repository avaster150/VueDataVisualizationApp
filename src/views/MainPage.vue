<template>
  <div>
    <v-container class="my-5 col-lg-8">
      <SortOptions />
      <PeopleList />
    </v-container>
  </div>
</template>
<script>
import PeopleList from "../components/PeopleList.vue";
import SortOptions from "../components/SortOptions.vue";
export default {
  components: {
    PeopleList,
    SortOptions,
  },
};
</script>
<style></style>
