<template>
    <div class="px-[33px] text-2xl mb-[30px] font-medium md:text-[38px] md:px-[117px] md:mb-[55px]">
        <p class="mb-2">{{ title1 }}</p>
        <p class="text-[#8BAC3E]">{{ title2 }}</p>
    </div>
  </template>
  
  <script>
      export default {
        name: 'TitlePerCategory',
        props: {
            title1: String,
            title2: String
        }
      }
  </script>