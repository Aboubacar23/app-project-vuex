<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/movies">Movies</router-link> |
    <router-link to="/notes">Notes</router-link>
  </div>
  <router-view />
</template>
<script>
import { provide } from "@vue/runtime-core";
import store1 from "./store/incremente";
import store from "./store/index.js";
export default {
  setup() {
    provide("store", store);
    provide("store1", store1);
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
