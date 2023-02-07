<template>
    <section class="flex flex-wrap px-[33px] gap-x-[20px] gap-y-[30px] md:px-[117px]">
        <div v-for="(item, index) in trending" :key="index" class="pl-5 py-[26px] rounded-[17px] w-full md:w-[240px]" :style="{'background-color': item.color }">
            <img class="w-[118px] h-[120px]" :src="item.img" :alt="item.name">
            <p class="font-medium text-[26px]">{{ item.name }}</p>
            <p class="text-[#8BAC3E] font-medium text-lg">{{ item.category }}</p>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="fill-[#FF8412] w-2.5 h-2.5">
                <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
            </svg>
        </div>
    </section>
</template>
  
  <script>
      export default {
          name: 'CardTrending',
          props: {
              
          },
          data() {
            return {
                trending: [
                    {name: 'Pizza Paperoni', img: require('../../assets/Trending/pizza-paperoni.png'), category: 'Pizza', color: '#E6F3F5'},
                    {name: 'Pizza Meat', img: require('../../assets/Trending/pizza-meat.png'), category: 'Pizza', color: '#E6F3F5'},
                    {name: 'Doner Kebab', img: require('../../assets/Trending/doner-kebab.png'), category: 'Kebab', color: '#EAEEFA'},
                    {name: 'Salmon Roll', img: require('../../assets/Trending/salmon-roll.png'), category: 'Salmon', color: '#F9EEF3'},
                    {name: 'Cupcake Choco', img: require('../../assets/Trending/cupcake-choco.png'), category: 'Cupcake', color: '#F0FEEB'},
                    {name: 'Doughnut Milk', img: require('../../assets/Trending/doughnut-milk.png'), category: 'Doughnut', color: '#F3F7D9'},
                    {name: 'Doughnut Unicorn', img: require('../../assets/Trending/doughnut-unicorn.png'), category: 'Doughnut', color: '#F3F7D9'},
                    {name: 'Kathi Kebab', img: require('../../assets/Trending/kathi-kebab.png'), category: 'Kebab', color: '#EAEEFA'},
                ]
            }
          }
      }
  </script>