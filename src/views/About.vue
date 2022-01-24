<template>
  <div class="about">
    <h1>Le nombre de counter est :</h1>
    <h3>Counter:: {{ store1.state.counter }}</h3>
    <h3>Counter Square : {{ store1.getters.counterSquared() }}</h3>
  </div>
</template>
<script>
import { inject } from "vue";

export default {
  setup() {
    const store1 = inject("store1");
    return {
      store1
    };
  }
};
</script>
