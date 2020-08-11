<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view id="page-content"></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  components: {NavBar},
  data() {
    return {
      
    }
  },
  created() {},
  methods: {
    
  }
}
</script>

<style lang="scss">
#app {
  position: relative;
  width: 100%;
  min-width: 1360px;
  min-height: 100%;
  overflow-x: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  #page-content {
    margin-top: 60px;
    position: relative;
  }
}
</style>
