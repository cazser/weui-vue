<template>
  <div>
    <header class="switch-header">
    <h2>开关样式展示</h2>
    </header>

    <LineItem >
      <template #header>
        标题文字
      </template>
      <template #default  >
        <Switch />
      </template>
    </LineItem>
  </div>
</template>

<script setup>
import LineItem from '../components/LineItem.vue';
import Switch from '../components/Switch.vue';  
</script>

<style scoped>
 
 .switch-header{
  display: flex;
  justify-content: center;
  margin: 72px 0;
  width: 100%;
 }
</style>