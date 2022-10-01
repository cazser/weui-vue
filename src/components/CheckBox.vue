<template>
  <div>
   
    <span @click="click" class="uncheck" :class="{checked: checked}" >
      
    <img class="icon" v-if="checked" src="../images/yes.svg"/>
    
    </span>
  
   <slot></slot>
  </div> 

</template>

<script setup>
import { onMounted, ref, watch } from 'vue';

  const props = defineProps({
    checked: Boolean
  });
  const emits = defineEmits(
    ['update:checked']
  )
  
  let checked =ref( props.checked);
 
const click=()=>{
  checked.value = !checked.value;
  
  emits("update:checked", checked.value);
  
}
</script>

<style scoped>
.uncheck{
  display: inline;
  width:1em;
  border-radius: 50%;
  height: 1em;
  border: 1px solid;
  display: inline-flex;
  align-items: center;
}

.icon{
  transform: translateX(-1px);
  max-width: 1em;
}


</style>