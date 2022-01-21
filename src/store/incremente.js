import { reactive } from "vue"

const state = reactive({
    counter: 0
});

const methods = {
    decremente() {
        state.counter--
    },

    increment() {
        state.counter++
    },
}

const getters = {
    counterSquared() {
        return state.counter * state.counter
    }
}
export default {
    state,
    methods,
    getters,
}