<script >
import { ref } from 'vue'

export default{
  props:{
    'visible':{type: Boolean}
  },
  setup(props, context){
    const visible = "yes";
    return{
      visible
    }
  }
}
</script>

<template>
  <div class="dialog-wrapper" v-if="visible">
    <div>我是dialog</div>  
    <div>inner {{visible}}</div>
  </div>
</template>

<style scoped>
.dialog-wrapper{
  border: 1px solid red;
}
</style>