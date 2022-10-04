<template>
  <template v-if="visible">
  <div>
   toast
  </div>
  </template>
</template>

<script>
  export default {
   props: {
    visible: {
      type: Boolean,
      default: false
    },
  }    
  }
</script>

<style  scoped>

</style>