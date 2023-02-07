<template>
  <!--Navbar-->
  <Navbar />
  <main>
    <CardHero />
    <TitlePerCategory :title1="propGroups.titleGroup.title1" :title2="propGroups.titleGroup.title2"/>
    <CardCategory />
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
  import CardHero from './components/assets/CardHero.vue';
  import CardCategory from './components/assets/CardCategory.vue';
  import TitlePerCategory from './components/assets/TitlePerCategory.vue';

  export default {
    components: {
      ButtonAction,
      Navbar,
      CardHero,
      CardCategory,
      TitlePerCategory
    },
    data() {
      return {
        propGroups: {
          green: '#8BAC3E',
          title: 'Daftar Sekarang',
          titleGroup: {
            title1: 'Browser Our Category',
            title2: 'Receipt'
          }
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
