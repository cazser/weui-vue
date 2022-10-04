<template>
  <div class="button-view-wrapper">
    <div>Toast</div>
    <div>弹出式提示</div>
    <div class="btn-list">
        <Button @click="toggle">
          成功提示
        </Button>
       {{y}} 
       <Toast :visible="y"/>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import Button from '../components/Button.vue';
  import Toast from '../components/Toast.vue'

  const y = ref(false);
  const toggle = ()=>{y.value = !y.value;}
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