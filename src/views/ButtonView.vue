<template>
  <div class="button-view-wrapper">
    <div>Button</div>
    <div>按钮</div>
    <router-link to="/button_default" class="btn-item">
      <Button>
        普通型
      </Button>
    </router-link>
    <Button>
      底部悬浮型
    </Button>
  </div>
</template>

<script setup>
  import Button from '../components/Button.vue';
</script>

<style  scoped>
.button-view-wrapper{
  padding: 36px;
  min-height: 100vh;
  background-color: #ededed;
}

.btn-item{
  margin: 10px;
}
</style>