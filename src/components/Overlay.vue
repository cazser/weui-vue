<template>
  <div class="weui-overlay"> 
    <slot></slot>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.weui-overlay{
  position:  fixed;
  height: 100%;
  width: 100%;
  top:0;
  left:0;
  background-color: rgba(100, 100, 100, 0.5);
  z-index: 10;
}

</style>