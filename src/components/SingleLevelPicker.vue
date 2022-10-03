<template>
  <template v-if="visible">
  <div>
    <div @click="onclose">close</div>
    Single Picker
    {{visible}}
  </div>
  </template>
</template>

<script>
  export default {
   props:{
    visible: {type: Boolean, default: false}
   },
   setup(props, context){
    const onclose=()=>{
      context.emit("update:visible", false);
    }
    return {onclose}
  } 
  }
</script>

<style lang="scss" scoped>

</style>