<template>
    <section class="flex px-[33px] md:px-[190px] justify-between text-sm">
        <div class="py-[19px]">
            <img class="w-[150px] h-[36px] md:w-[207px] md:h-[50px]" src="../assets/logo-elemes.png" alt="logo">
        </div>
        <div class="hidden md:flex md:py-[38px]">
            <span class="md:mr-[32px] text-[#757575]" v-for="(item, index) in nav" :key="index">{{ item }}</span>
        </div>
        <div class="flex py-[30px] md:py-[38px] justify-between align">
            <span class="hidden md:flex text-[#333333] md:mr-[24px] font-medium">Masuk</span>
            <ButtonAction class="-mt-3 md:-mt-2"/>
        </div>
    </section>
</template>

<script>
    import ButtonAction from './assets/ButtonAction.vue';
    export default {
        name: 'Navbar',
        components: {
            ButtonAction
        },
        data() {
            return {
                nav: ['Home', 'About', 'Promotions', 'Blogs', 'Contact Us']
            }
        },
    }
</script>