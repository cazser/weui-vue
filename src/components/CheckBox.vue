<template>
  <div>
   <span @click="click">checkbox</span>
   <span> <slot></slot></span>
</div>
</template>

<script setup>
const click=()=>{
  console.log("click");
}
</script>

<style scoped>

</style>