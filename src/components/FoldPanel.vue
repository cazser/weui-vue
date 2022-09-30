<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const contentVisible = ref(false);
const onclick= ()=>{
  contentVisible.value = !contentVisible.value;
}
</script>

<template>
    <header @click="onclick">
    <slot name="header"></slot>
  </header>
  <main v-if="contentVisible">
    <slot></slot>
  </main>
</template>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>