<template>
  
  <template v-if="visible">
    
    <div class="weui-dialog-overlay"></div>
    <div class="weui-dialog-wrapper">
      <div class="weui-dialog">
        <header class="weui-dialog-title">{{title}}</header>
        <main>
          <slot></slot>
        </main>
        <footer>
          <button>ok</button>
          <button>cancel</button>
        </footer>
      </div>
    </div>
    
  </template>
  
</template>
<script>
import Button from './Button.vue';
import { Teleport } from 'vue';
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
  components: {Button}
}
</script>

<style scoped>
  .weui-dialog{
    border: none;
    border-radius: 16px;
     padding: 24px;
     width: 270px;
     z-index: 15;
  }

  .weui-dialog-wrapper{
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 12;
  }
  .weui-dialog-title{
    display: flex;
    padding-bottom: 24px;
    justify-content:  center;
    font-weight: bolder;

  }

  .weui-dialog-overlay{
    border: 1px solid red;
    background: rgba(102, 102, 102, 0.5);
     position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
</style>