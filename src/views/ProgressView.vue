<template>
  <div class="button-view-wrapper">
    <div>Progress</div>
    <div>进度条组件</div>
    <div class="btn-list">
        <Button>
          进度条
        </Button>
      <Progress />
    </div>
  </div>
</template>

<script setup>
  import Button from '../components/Button.vue';
import Progress from '../components/Progress.vue';
</script>

<style  scoped>
.button-view-wrapper{
  padding: 36px;
  min-height: 100vh;
  background-color: #fff;
}

.btn-item{
  margin: 10px;
}

.btn-list{
  width:100%;
  display: flex;
  padding-top: 36px;
  flex-direction: column;
  align-items: center;
}

</style>