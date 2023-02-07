<template>
    <section class="flex px-[33px] gap-[11px] md:px-[117px] overflow-x-auto scrollbar-hide">
        <div v-for="(item, index) in category" :key="index" class="mb-[11px] text-center items-center px-[81px] py-[30px] rounded-[8px] w-[230px]" :style="{'background-color': item.color }">
            <img class="w-[47px] h-[52px] mb-[20px]" :src="item.img" :alt="item.name">
            <p class="font-medium text-base">{{ item.name }}</p>
            <p class="font-normal text-sm">{{ item.total }}</p>
        </div>
    </section>
</template>
  
  <script>
      export default {
          name: 'CardCategory',
          props: {
          },
          data() {
            return {
                category: [
                    {name: 'Cupcake', img: require('../../assets/Category/cupcake.png'), total: 22, color: '#F0FEEB'},
                    {name: 'Pizza', img: require('../../assets/Category/pizza.png'), total: 25, color: '#E6F3F5'},
                    {name: 'Kebab', img: require('../../assets/Category/kebab.png'), total: 12, color: '#EAEEFA'},
                    {name: 'Salmon', img: require('../../assets/Category/salmon.png'), total: 22, color: '#F9EEF3'},
                    {name: 'Doughnut', img: require('../../assets/Category/doughnut.png'), total: 11, color: '#F3F7D9'}, 
                ]
            }
          }
      }
  </script>