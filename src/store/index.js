import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notes: [
      {
        id: 1,
        title: "First note",
        description: "Description for first note",
        priority: "first",
        date: new Date(Date.now()).toLocaleString(),
      },
      {
        id: 2,
        title: "Second note",
        description: "Description for second note",
        priority: "second",
        date: new Date(Date.now()).toLocaleString(),
      },
      {
        id: 3,
        title: "Third note",
        description: "Description for third note",
        priority: "",
        date: new Date(Date.now()).toLocaleString(),
      },
      {
        id: 4,
        title: "Fourth note",
        description: "Description for fourth note",
        priority: "",
        date: new Date(Date.now()).toLocaleString(),
      },
    ],
  },
  mutations: {
    removeNote(state, id) {
      state.notes = state.notes.filter((note) => note.id !== id);
    },
    addNote(state, note) {
      state.notes.push(note);
    },
  },
  actions: {
    removeNote({ commit }, id) {
      commit("removeNote", id);
    },
    addNote({ commit }, payload) {
      const { title, description, priority } = payload;

      const note = {
        id: Date.now(),
        title,
        description,
        priority,
        date: new Date(Date.now()).toLocaleString(),
      };

      commit("addNote", note);
    },
  },
  getters: {
    getAllNotes(state) {
      return state.notes;
    },
  },
});
