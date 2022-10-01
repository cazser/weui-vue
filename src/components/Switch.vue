<template>
  <div>
    <button><span></span></button>
  </div>
</template>

<script setup>
  
</script>

<style scoped>
 button{
    width: 52px;
    height: 32px;
    background-color: #07c160;
    border: 0;
    padding: 2px;
    outline: 0;
    border-radius: 16px;
    text-align: center;
    position: relative;
  }

 span{
  border: none;
  width: 30px;
  height: 30px;
  display: inline-block;
  border-radius: 50%;
  position: absolute;
  bottom: 1px;
  background: white;
  right: 2px;
}
</style>