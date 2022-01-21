import { createStore } from "vuex";


const store = createStore({
    state: {
        title: "Vuex store",
        notes: [],
    },
    getters: {
        totalNotes(state) {
            return state.notes.length;
        }
    },
    mutations: {
        SAVE_NOTE(state, title) {
            state.notes.push(state.title);
        }
    },
    actions: {
        saveNote({ commit }, title) {
            commit('SAVE_NOTE');
        }
    },
})


export default {
    store,
}