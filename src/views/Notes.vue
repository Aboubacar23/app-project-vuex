<template>
  <div class="container">
    <h1>LES NOTES</h1>
    <ol>
      <li v-for="(note, index) in notes" :key="index">{{ note }}</li>
    </ol>
    <input type="text" v-model="title" @keypress.enter="save" />
    <h4>Total notes: {{ totalNotes }}</h4>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const notes = computed(() => store.state.notes);
    const totalNotes = computed(() => store.getters.totalNotes);
    const title = ref("");

    function save() {
      store.dispatch("saveNote", title.value);
      title.value = "";
    }

    return {
      notes,
      title,
      totalNotes,
      save
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
