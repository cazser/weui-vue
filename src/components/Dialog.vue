<template>
  <template v-if="visible">
    <div class="gulu-dialog-overlay"></div>
    <div class="gulu-dialog-wrapper">
      <div class="gulu-dialog">
        <header>标题 <span class="gulu-dialog-close"></span></header>
        <main>
          <p>第一行字</p>
          <p>第二行字</p>
        </main>
        <footer>
          <Button level="main">OK</Button>
          <Button>Cancel</Button>
        </footer>
      </div>
    </div>
  </template>
</template>
<script>
import Button from './Button.vue';

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  components: {Button}
}
</script>