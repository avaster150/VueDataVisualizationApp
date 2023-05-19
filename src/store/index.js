import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    peopleList: [],
    favoritesList: [],
    sortActive: false,
  },
  mutations: {
    set_people_list: (state, people) => {
      state.peopleList = people;
      if (state.sortActive) {
        state.peopleList.results.sort((a, b) => a.dob.age - b.dob.age);
      }
    },
    add_to_favorites: (state, payload) => {
      state.favoritesList.push(payload);
    },
    delete_from_favorites: (state, payload) => {
      const findPersonToDelete = state.favoritesList
        .map((item) => item.id)
        .indexOf(payload.id);
      state.favoritesList.splice(findPersonToDelete, 1);
    },
    sort_by_age: (state, people) => {
      state.peopleList.results.sort((a, b) => a.dob.age - b.dob.age);
      state.sortActive = !state.sortActive;
      if (state.sortActive == false) {
        state.peopleList = people;
      }
    },
  },
  actions: {
    getPeopleList: ({ commit }) => {
      axios
        .get(`https://randomuser.me/api/?results=50&seed=test`)
        .then((response) => {
          commit("set_people_list", response.data);
        });
    },
    addToFavorites: ({ commit }, payload) => {
      commit("add_to_favorites", payload);
    },
    deleteFromFavorites: ({ commit }, payload) => {
      commit("delete_from_favorites", payload);
    },
    sortByAge: ({ commit }) => {
      axios
        .get(`https://randomuser.me/api/?results=50&seed=test`)
        .then((response) => {
          commit("sort_by_age", response.data);
        });
    },
  },
  modules: {},
});
