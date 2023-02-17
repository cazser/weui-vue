<template>
  <div class="wrapper" :class="{active: props.content}">
    <i>
    {{ props.content ? "✓" :" " }}
    </i>
  </div>
</template>

<script setup>
const props = defineProps({content:Boolean}) 
  
</script>

<style scoped>
    .wrapper{
      border: 1px solid black;
      height: 15px;
      width: 15px;
    }

    .active >i{
       position: relative;
       bottom: 7px;
       font-size: 21px;
    } 
    
    
</style>