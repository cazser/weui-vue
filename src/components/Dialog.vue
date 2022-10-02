<template>
  
  <template v-if="visible">
    
  <overlay>
    <div class="weui-dialog">
      <header class="weui-dialog-title">{{title}}</header>
      <div class="weui-dialog-content">
      <slot></slot>
      </div>
       <div class="button-wrapper">
        <div class="leftbutton">
          <slot name="leftbutton"></slot>
        </div>
        <div class="rightbutton">
          <slot name="rightbutton"></slot>
        </div>
       </div>
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
.weui-dialog{
  background:  #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: start;
  transform: translate(-50%, -50%);
  min-width: 270px;
  border-radius: 16px;
  
}

.weui-dialog-content{
  border-bottom: 1px solid rgba(90,90,90, 0.2);  
  padding: 16px 18px;
  margin-bottom: 28px;
}

.weui-dialog-title{
  padding: 12px;
  text-align: center;
  font-weight: bold;
}

.button-wrapper{

  min-height: 10px;
  margin: 4px;
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: space-around;
}

.leftbutton{
  border-right: 1px solid rgba(90,90,90, 0.2);
  width:50%;
  flex-grow: 1;
  text-align: center;
}

.rightbutton{
  border-left: 1px solid rgba(90, 90, 90, 0.2);
  width: 50%;
  flex-grow: 1;
  text-align: center;
}
</style>