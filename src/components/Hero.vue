<template>
    <section>
        <div class="content px-[33px] flex justify-between md:px-[117px]">
            <div class="flex flex-col gap-y-[32px]">
                <p class="text-[#8BAC3E] font-medium text-[64px] w-[480px]">Good Food Us Good Mood</p>
                <div class="md:hidden justify-center">
                    <img class="w-[300px] h-[300px] text-center mb-6" src="../assets/Hero/food.png" alt="food">
                    <img class="absolute top-[290px] left-[10px]  w-[350px] h-[350px]" src="../assets/Hero/food-background.png" alt="bg-food">
                    <div class="absolute top-[570px] left-[180px]"><CardHero /></div>
                </div>
                <p class="w-[400px] md:w-[480px]">I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.</p>
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