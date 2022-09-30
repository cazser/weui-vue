<script setup>
import { ref } from 'vue'


</script>

<template>
 <div class="line-wrapper">
   <slot name="header"></slot>
   <slot></slot>
 </div> 
</template>

<style scoped>
.line-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: white;
  padding: 12px;
}


</style>

