<template>
  <h1>Dialog示例</h1>
  <div>
    <h2>示例一</h2>
    <Button @click="toggle">toggle</Button>  
    <Dialog :visible="y"></Dialog>  
  </div>
</template>
<script lang="ts">
import Dialog from '../components/Dialog.vue'
import Button from '../components/Button.vue';
import {ref} from 'vue';

export default {
  components: {Button, Dialog},
  setup() {
    const y = ref(false);
    const toggle = () => {
      y.value = !y.value;
    };
    return {y, toggle};
  }
};
</script>