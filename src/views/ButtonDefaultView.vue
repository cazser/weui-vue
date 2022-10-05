<template>
  <div class="button-view-wrapper">
    <div>Button</div>
    <div>按钮</div>
    <div class="btn-list">
      <Button :loading="true">
        主要操作
      </Button>
      <Button :prime="true">
        主要操作
      </Button>
       <Button :warning="true">
        主要操作
      </Button>
      <Button :invalid="true">
        主要操作
      </Button>
      <LineButton >
        普通行按钮
      </LineButton>
      <LineButton :warning="true">
        警告行按钮
      </LineButton>
    </div>
  </div>
</template>

<script setup>
  import Button from '../components/Button.vue';
import LineButton from '../components/LineButton.vue';
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