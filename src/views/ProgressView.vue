<template>
  <div class="button-view-wrapper">
    <div>Progress</div>
    <div>进度条组件</div>
    <div class="btn-list">
      {{progress}}
        <Button @click="add1">
          进度条+1
        </Button>
        <Button @click="minus1">
          进度条-1
        </Button>
      <Progress :progress="progress" />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
import Button from '../components/Button.vue';
import Progress from '../components/Progress.vue';
const progress = ref(0);
const add1 =()=>{
  progress.value++;
}
const minus1=()=>{
  progress.value--;
}
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