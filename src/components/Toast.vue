<template>
  <template v-if="visible">
  <div class="toast-wrapper">
    <slot></slot>
  </div>
  </template>
</template>

<script>
import { onActivated, onMounted, onUpdated } from 'vue';

  export default {
   props: {
    visible: {
      type: Boolean,
      default: false
    },
  },

  setup(props, context){
  
     onUpdated(()=>{
       setTimeout(()=> {
        if(props.visible===true){
          context.emit("update:visible", false)
        }
    }, 3000);
     });

    onMounted(()=>{console.log("Mounted")})
    onUpdated(()=>{console.log("updated")})
  }    
  }
</script>

<style  scoped>
 .toast-wrapper{
  border-radius: 16px;
  width: 160px;
  height: 160px;
  background: rgba( 76, 76, 76, 0.9);
  position: fixed;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
 }
</style>