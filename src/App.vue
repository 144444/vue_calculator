// eslint-disable-next-line vue/valid-template-root, vue/valid-template-root
<template>
  <div id="app">
    <h1>Калькулятор сайтов</h1>
    <router-view></router-view>
  </div>
</template>

<script>
// import OptionsComponent from "./views/OptionsComponent.vue";

export default {
  // eslint-disable-next-line vue/no-unused-components
  // components: { OptionsComponent },
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
</style>
