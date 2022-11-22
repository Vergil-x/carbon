<template>
   <n-button color="#43B443" @click="handleClick">
      {{ buttonName }}
   </n-button>
</template>

<script lang="ts" setup>
import router from '@/router';
import type { RouteLocationPathRaw} from 'vue-router';

defineOptions({
    name: 'HeadButton',
  });
const props =defineProps<{
   buttonName?: string
   to: RouteLocationPathRaw
}>()

const handleClick = ()=>{
   router.push(props.to)
}

</script>

<style lang="scss">

</style>