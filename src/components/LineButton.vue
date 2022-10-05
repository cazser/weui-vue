<template>
  <button class="line-button" :class="{warning: warning, }">
 <slot></slot>
  </button>
</template>



<script>
  export default {
    props:{
      warning:{
        type:Boolean,
        default: false
      }
    }
  }
</script>



<style  scoped>
.line-button{
  margin: 2px;
  background-color: white;
  min-width:100vw;
  border: none;
  padding: 12px;
  text-align: center;
  position: relative;
}

.warning{
  color: red;
}
</style>