<script setup lang="ts">
import router from '@/router';
import { ref } from 'vue';
const title = ref("CARBON CALCULATOR");

const isSelect = ref(0);
const buttons = [
  {
    routerPath: '/',
    buttonName: 'CALCULATE'
  },
  {
    routerPath: 'contact',
    buttonName: 'CONTACT'
  },
  {
    routerPath: 'about',
    buttonName: 'ABOUT US'
  },
];
const handleClick=(routerPath:string,index:number)=>{
  isSelect.value = index;
 router.push(routerPath);
}
</script>

<template>
  <div class="text-2xl mx-2 mt-3 mb-5 font-bold">
    {{ title }}
  </div>
  <div class="bg-black max-w-6xl m-0 flex">
    <div :class="{'bg-bing':index===isSelect}" v-for="item,index in buttons" @click="handleClick(item.routerPath,index)">
      <div class="text-base text-white my-2 mx-4">
        {{ item.buttonName }}
      </div>
    </div>
  </div>
</template>