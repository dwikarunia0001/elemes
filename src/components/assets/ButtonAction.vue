<template>
  <span class="button rounded-[100px] text-[#FFFFFF] py-2.5 px-[18px] w-fit" :style="{'background-color': color }">
    {{ title }}
  </span>
</template>

<script>
    export default {
        name: 'ButtonAction',
        props: {
            title: {
                type: String,
                default: 'Daftar Sekarang'
            },
            color: {
                type: String,
                default: '#8BAC3E'
            }
        }
    }
</script>