<template>
  <!--Navbar-->
  <Navbar />
  <main>

  </main>
  <!--Footer-->
  <!--
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <ButtonAction :title=propGroups.title :color=propGroups.green />
  -->
  <router-view/>
</template>

<script>
  import ButtonAction from './components/assets/ButtonAction.vue';
  import Navbar from './components/Navbar.vue';

  export default {
    components: {
      ButtonAction,
      Navbar
    },
    data() {
      return {
        propGroups: {
          green: '#8BAC3E',
          title: 'Daftar Sekarang'
        }
      }
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  min-height: 100vh;
}
</style>
