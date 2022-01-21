<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="container">
      <div class="counter">{{ store.state.counter }}</div>
      <div>
        {{ store.state.counter }}<sup>2</sup> =
        {{ store.getters.counterSquared() }}
      </div>
      <button @click="store.methods.decremente">-</button>
      <button @click="store.methods.increment">+</button>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "Home",
  components: {},
  setup() {
    const store = inject("store");

    return {
      store
    };
  }
  // data() {
  //   return {
  //     counter: 1
  //   };
  // }
};
</script>

<style scoped>
.container {
}

button {
  margin: 5px;
  font-weight: 300;
  font-size: 30px;
}

.counter {
  font-size: 50px;
}
</style>
