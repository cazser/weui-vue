<template>
  
  <template v-if="visible">
    
  <overlay>
    <div class="content">
      <header class="weui-dialog-title">{{title}}</header>
       <slot></slot>
    </div>
  </overlay>    
    
  </template>
  
</template>
<script>
import Button from './Button.vue';
import { Teleport } from 'vue';
import Overlay from './Overlay.vue';
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title:{
      type: String,
      default:""
    }
  },
  components: { Button, Overlay }
}
</script>

<style scoped>
  .content{
  width: 100px;
  height: 100px;
  background:  #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: start;
  transform: translate(-50%, -50%);
  min-width: 270px;
  min-height: 150px;
  border-radius: 16px;
  padding: 24px 24px;
}

.weui-dialog-title{
  padding: 12px;
  text-align: center;
}
</style>