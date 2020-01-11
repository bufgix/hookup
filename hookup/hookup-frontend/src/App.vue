<template>
  <div id="app">
    <MainScreen />
  </div>
</template>

<script>
import Vue from "vue";
import Vuematerial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default-dark.css"; // This line here
import MainScreen from "./components/Mainscreen";
import VueClipboard from 'vue-clipboard2'

Vue.use(Vuematerial);
Vue.use(VueClipboard);

export default {
  name: "app",
  components: { MainScreen }
};
</script>

<style lang="scss">
#app {
  font-family: "Asap", sans-serif;
  letter-spacing: 0.5px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}
.md-app {
  max-height: 100%;
  border: 1px solid rgba(#000, 0.12);
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.active {
  color: var(--md-theme-default-primary-on-background, #f8f4f4) !important;
  background-color: #212121;
  &:hover {
    text-decoration: none;
  }
}
</style>
