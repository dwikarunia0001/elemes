<template>
    <section>
        <div class="content px-[33px] flex justify-between md:px-[117px]">
            <div class="flex flex-col gap-y-[32px]">
                <p class="text-[50px] text-[#8BAC3E] md:font-medium md:text-[64px] md:w-[480px]">Good Food Us Good Mood</p>
                <div class="md:hidden justify-center">
                    <img class="w-[200px] h-[200px] text-center mb-6" src="../assets/Hero/food.png" alt="food">
                    <img class="absolute top-[250px] left-[10px]  w-[250px] h-[250px]" src="../assets/Hero/food-background.png" alt="bg-food">
                    <div class="absolute top-[400px] left-[100px]"><CardHero /></div>
                </div>
                <p class="w-full md:w-[480px]">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
                <span class="flex gap-[16px]">
                    <ButtonAction />
                    <ButtonAction :title=propGroupsButton.title :color=propGroupsButton.grey class="text-dark"/>
                </span>
            </div>
            <div class="hidden md:flex">
                <img class="absolute top-[140px] left-[720px] w-[412px] h-[414px]" src="../assets/Hero/food.png" alt="food">
                <img class="absolute top-[90px] left-[670px] w-[518px] h-[518px]" src="../assets/Hero/food-background.png" alt="bg-food">
                <div class="absolute top-[500px] left-[620px]"><CardHero /></div>
            </div>
        </div>
        <!--<img class="top-0 " src="../assets/Hero/background-clear.png" alt="bg-hero">-->
    </section>
  </template>
  
<script>
    import ButtonAction from './assets/ButtonAction.vue';
    import CardHero from './assets/CardHero.vue';

    export default {
        name: 'Hero',
        components: {
            ButtonAction,
            CardHero
        },
        data() {
            return {
                propGroupsButton: {
                    title: 'About Us',
                    grey: '#F2F2F2'
                }
            }
        }
      }
</script>