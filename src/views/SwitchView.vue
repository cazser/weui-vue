<template>
  <div>
    <header class="switch-header">
    <h2>开关样式展示</h2>
    </header>

    <LineItem >
      <template #header>
        标题文字{{on}}
      </template>
      <template #default  >
        <Switch v-model:on =on />
      </template>
    </LineItem>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import LineItem from '../components/LineItem.vue';
import Switch from '../components/Switch.vue';  
const on = ref(false);
</script>

<style scoped>
 
 .switch-header{
  display: flex;
  justify-content: center;
  margin: 72px 0;
  width: 100%;
 }
</style>