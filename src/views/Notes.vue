<template>
  <div class="container">
    <h1>{{ $store.state.titleHeaders }}</h1>
    <ol>
      <li v-for="(note, index) in notes" :key="index">{{ note }}</li>
    </ol>
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
      console.log("titre de la note : " + title.value);
      store.dispatch("saveNote", title.value);
      console.log(notes.value);
      title.value = "";
    }

    return {
      save,
      notes,
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
