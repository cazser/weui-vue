<template>
  <div class="view-wrapper">
    <div>Dialog</div>
    <div>对话框</div>
    <div class="btn-list">
        <Button @click="onclick1">
          iOS Dialog 样式一
        </Button>
        <Dialog v-if="x" />
        {{x}}
      <Button>
        iOS Dialog 样式二
      </Button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import Button from '../components/Button.vue';
  import Dialog from '../components/Dialog.vue';
  const x= ref(true);
  const onclick1 = ()=>{
    x.value = !x.value;
  }
</script>

<style  scoped>
.view-wrapper{
  padding: 36px;
  min-height: 100vh;
  background-color: #f2f2f2;
}

.btn-item{
  margin: 10px;
}

.btn-list{
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>