<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="container">
      <div class="counter">{{ store1.state.counter }}</div>
      <div>
        {{ store1.state.counter }}<sup>2</sup> =
        {{ store1.getters.counterSquared() }}
      </div>
      <button @click="store1.methods.decremente">-</button>
      <button @click="store1.methods.increment">+</button>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "Home",
  components: {},
  setup() {
    const store1 = inject("store1");

    return {
      store1
    };
  }
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
