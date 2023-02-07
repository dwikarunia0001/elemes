<template>
  <Navbar />
  <main>
    <CardHero />
    <div>
      <TitlePerCategory :title1="propGroups.titleGroup.title1" :title2="propGroups.titleGroup.title2"/>
      <CardCategory />
    </div>
    <div class="mt-[80px]">
      <TitlePerCategory :title1="propGroups.titleGroup.title3" :title2="propGroups.titleGroup.title4"/>
      <CardTrending />
      <div class="text-center mt-[68px] mb-[250px]">
        <ButtonAction :title=propGroups.titleGroup.title5 :color=propGroups.green />
      </div>
    </div>
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
  import CardTrending from './components/assets/CardTrending.vue';

  export default {
    components: {
      ButtonAction,
      Navbar,
      CardHero,
      CardCategory,
      TitlePerCategory,
      CardTrending
    },
    data() {
      return {
        propGroups: {
          green: '#8BAC3E',
          titleGroup: {
            title1: 'Browser Our Category',
            title2: 'Receipt',
            title3: 'Browser Our Trending',
            title4: 'Receipt',
            title5: 'All Receipt',
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
