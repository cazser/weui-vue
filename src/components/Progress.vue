<template>
  <div class="progress">
    <div class="progress-inner" 
    :style="{  width: (progress>100? 100 : progress)*3 + 'px' }">
    </div>
  </div>
</template>

<script>
  export default {
    
  props: {
    progress: {
      type: Number,
      default: false
    },
    
  },
 
  }
</script>

<style  scoped>
 .progress{
  min-width: 300px;
  height: 3px;
  border-radius: 1px;
  background: #ededed;
}

.progress-inner{

  height: 3px;
  border-radius: 3px;
  width:100px;
  background: #07c160;
  display: block;
}
</style>