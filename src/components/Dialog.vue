<script setup>
import { ref } from 'vue'

const props = defineProps({
  visible:{type: Boolean, default: false}
})

const visible = props.visible;
</script>

<template>
  <div class="dialog-wrapper" v-if="visible">
    <div>我是dialog</div>  
    <div>inner {{visible}}</div>
  </div>
</template>

<style scoped>
.dialog-wrapper{
  border: 1px solid red;
}
</style>