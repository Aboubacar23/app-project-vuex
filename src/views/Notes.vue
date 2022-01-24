<template>
  <div class="container">
    <h1>{{ $store.state.titleHeaders }}</h1>
    <p v-for="(note, index) in notes" :key="index">{{ note }}</p>
    <input type="text" v-model="title" @keypress.enter="save" />
    <h4>Total notes: {{ totalNotes }}</h4>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const title = ref("");
    const notes = computed(() => store.state.notes);
    const totalNotes = computed(() => store.getters.totalNotes);

    function save() {
      store.dispatch("saveNote", title.value);
      console.log("le titre est: " + title.value);
      title.value = "";
    }

    return {
      save,
      notes,
      title,
      totalNotes
    };
  }
};
</script>
<style scoped>
ol,
li {
  text-decoration: none;
}
</style>
