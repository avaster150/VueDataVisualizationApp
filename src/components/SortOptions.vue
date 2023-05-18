<template>
  <div>
    <v-layout row justify-start class="mb-3 ml-1">
      <v-btn
        @click="sortByAge"
        class="white--text"
        :class="sortActive ? 'green' : 'blue'"
        small
      >
        <span class="caption text-lowercase">Sort by age</span>
      </v-btn>
    </v-layout>
  </div>
</template>
<script>
export default {
  methods: {
    sortByAge() {
      this.$store.dispatch("sortByAge");
    },
  },
  computed: {
    sortActive() {
      return this.$store.state.sortActive;
    },
  },
};
</script>
<style></style>
