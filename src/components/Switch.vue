<template>
  <div>
    <button @click="onclick" :class="{open: state}"><span :class="{open1: state}"></span></button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({on: Boolean});
const emits = defineEmits(
    ['update:on']
  );
  
  
const state =  ref(props.on);  
const onclick=()=>{
  state.value=!state.value;
  emits("update:on", state.value);
}
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
.open{
  background-color: rgba(0,0,0,0.1);
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
  transition: right 250ms;
}

.open1{
  right: 18px;
}
</style>