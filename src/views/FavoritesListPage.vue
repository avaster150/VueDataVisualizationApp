<template>
  <div class="container my-5 col-lg-8">
    <v-card v-if="favoritesList.length === 0" class="pa-3 text-center">
      <span>Add the person to your favourites list to be displayed here</span>
    </v-card>
    <v-card
      v-else
      class="person-container-element"
      v-for="person in favoritesList"
      :key="person.id"
    >
      <v-layout class="pa-3 flex-wrap">
        <v-flex d-flex justify-center xs12 md2>
          <v-avatar size="80">
            <v-img :alt="person.name" :src="person.image"></v-img>
          </v-avatar>
        </v-flex>
        <v-flex
          class="d-flex text-center flex-column justify-center"
          xs4
          sm4
          md4
        >
          <div class="caption grey--text">Name</div>
          <div>{{ person.name }} {{ person.lastName }}</div>
        </v-flex>
        <v-flex
          class="d-flex text-center flex-column justify-center"
          xs4
          sm4
          md2
        >
          <div class="caption grey--text">Age</div>
          <div>{{ person.age }}</div>
        </v-flex>
        <v-flex
          class="d-flex text-center flex-column justify-center"
          xs4
          sm4
          md2
        >
          <div class="caption grey--text">Gender</div>
          <div class="text-capitalize">{{ person.gender }}</div>
        </v-flex>
        <v-flex xs12 sm12 md2 class="d-flex justify-center align-center">
          <div>
            <v-btn
              @click="deleteFromFavorites(person)"
              small
              :class="`favorites__button red white--text my-2 caption`"
              >Delete</v-btn
            >
          </div>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>
<script>
export default {
  computed: {
    favoritesList() {
      return this.$store.state.favoritesList;
    },
  },
  methods: {
    deleteFromFavorites(person) {
      this.$store.dispatch("deleteFromFavorites", {
        id: person.id,
      });
    },
  },
};
</script>
<style></style>
