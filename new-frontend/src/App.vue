<template>
  <div id="app">
    <!-- <Navbar /> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
// import Navbar from "@/components/Navbar.vue";

export default {
  name: "App",
};
</script>

<style>
html {
    height: 100%;
    background-color: #ffdca2;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ffdca2;
}

.text-left {
  text-align: left !important;
}

.text-center {
  text-align: center !important;
}

.text-right {
  text-align: right !important;
}

.bg-lightorange {
  background-color: #ffbd71 !important;
}

.bg-primary{background-color:#0d6efd!important}
</style>
