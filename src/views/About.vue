<template>
  <div class="about">
    <h1>Le nombre de counter est :</h1>
    <h3>Counter:: {{ store.state.counter }}</h3>
    <h3>Counter Square{{ store.getters.counterSquared() }}</h3>
  </div>
</template>
<script>
import { inject } from "vue";

export default {
  setup() {
    const store = inject("store");
    return {
      store
    };
  }
};
</script>
