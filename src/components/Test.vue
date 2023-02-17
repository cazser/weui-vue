<template>
  <div class="wrapper">
    {{ props.content }}
  </div>
</template>

<script setup>
const props = defineProps({content:Boolean}) 
  
</script>

<style scoped>
    .wrapper{
      border: 1px solid black;
      max-height: 100px;
    }
</style>