<template>
  <div class="button-view-wrapper">
    <div>Button</div>
    <div>按钮</div>
    <div class="btn-list">
      <Button>
        主要操作
      </Button>
      <Button :prime="true">
        主要操作
      </Button>
       <Button :warning="true">
        主要操作
      </Button>
      <Button>
        主要操作
      </Button>
    </div>
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

.btn-list{
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>