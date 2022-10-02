<script setup>
import { ref } from 'vue'

const props = defineProps({
  visible: Boolean
})

const visible = props.visible;
</script>

<template>
  <div class="dialog-wrapper">
    <div>我是dialog</div>  
    <div>inner {{visible}}</div>
  </div>
</template>

<style scoped>
.dialog-wrapper{
  border: 1px solid red;
}
</style>