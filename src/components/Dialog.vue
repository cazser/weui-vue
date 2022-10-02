<template>
  
  <template v-if="visible">
    
  <overlay>
    <div class="content">
       content
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
  background:  red;
  position: absolute;
  top:100px;
  left: 100px;
}
</style>