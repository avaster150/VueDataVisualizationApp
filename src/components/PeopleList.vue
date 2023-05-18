<template>
  <div>
    <v-card
      class="person__container"
      v-for="person in peopleList"
      :key="person.id.value"
    >
      <v-layout class="pa-3 flex-wrap">
        <v-flex d-flex justify-center xs12 md2>
          <v-avatar size="80">
            <v-img
              :alt="person.name.first"
              :src="person.picture.medium"
            ></v-img>
          </v-avatar>
        </v-flex>
        <v-flex
          class="d-flex text-center flex-column justify-center"
          xs4
          sm4
          md4
        >
          <div class="caption grey--text">Name</div>
          <div>{{ person.name.first }} {{ person.name.last }}</div>
        </v-flex>
        <v-flex
          class="d-flex text-center flex-column justify-center"
          xs4
          sm4
          md2
        >
          <div class="caption grey--text">Age</div>
          <div>{{ person.dob.age }}</div>
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
              v-if="favoritesList.indexOf(person.id.value) !== -1"
              @click="deleteFromFavorites(person)"
              small
              :class="`favorites__button red white--text my-2 caption`"
              >Delete</v-btn
            >
            <v-btn
              v-else
              @click="addToFavorites(person)"
              small
              :class="`favorites__button blue white--text my-2 caption`"
              >Add to favorite</v-btn
            >
          </div>
        </v-flex>
      </v-layout>
    </v-card>
    <v-pagination class="mt-3" v-model="page" :length="perPage"></v-pagination>

  </div>
</template>
<script>
export default {
  data: () => ({
    page: 1,
  }),
  computed: {
    perPage() {
      if (this.$store.state.peopleList.results) {
        return Math.ceil(this.$store.state.peopleList.results.length / 20);
      }
      return 0;
    },
    peopleList() {
      const from = (this.page - 1) * 20;
      const to = this.page * 20;
      if (this.$store.state.peopleList.results) {
        return this.$store.state.peopleList.results.slice(from, to);
      }
      return [];
    },
    favoritesList() {
      return this.$store.state.favoritesList.map((item) => item.id);
    },
  },
  mounted() {
    this.$store.dispatch("getPeopleList");
  },
  methods: {
    addToFavorites(person) {
      this.$store.dispatch("addToFavorites", {
        id: person.id.value,
        name: person.name.first,
        lastName: person.name.last,
        age: person.dob.age,
        gender: person.gender,
        image: person.picture.medium,
        phone: person.phone,
        city: person.city,
      });
    },
    deleteFromFavorites(person) {
      this.$store.dispatch("deleteFromFavorites", {
        id: person.id.value,
      });
    },
  },
};
</script>
<style>
.favorites__button {
  cursor: pointer;
}
</style>
