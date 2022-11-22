<script setup lang="ts">
import { h, ref } from 'vue';
import type{ MenuOption } from 'naive-ui';
import { RouterLink } from 'vue-router';

    const title = ref("CARBON CALCULATE");
    let activeKey = ref<string | null>(null);
    const HeadButton =() => import("../components/HeadButton.vue")
    const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home'
          }
        },
        { default: () => 'CALCULATE' }
      ),
    key: 'CALCULATE',
  },
  {
    label: () =>
    h(
        RouterLink,
        {
          to: {
            name: 'home'
          }
        },
        { default: () => 'CONTACT' }
      ),
    key: 'CONTACT',
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'about'
          }
        },
        { default: () => 'ABOUT US' }
      ),
    key: 'ABOUT US',
  },]
</script>

<template>
    <div class="text-2xl mx-2 mt-3 mb-5 font-bold">
        {{title}}
    </div>
    <div class="bg-black max-w-6xl m-0">
      <n-menu  v-model:value="activeKey" mode="horizontal" :options="menuOptions"/>
    </div>
   
</template>