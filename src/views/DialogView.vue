<template>
  <div class="view-wrapper">
    <div>Dialog</div>
    <div>对话框</div>
    <div class="btn-list">
      
      <Button @click="toggle">ios Dialog样式一</Button>  
      <Dialog :visible="y" title="弹窗标题">
         <template #default>
            <div>
              弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内
            </div>
          </template>
        <template #leftbutton>
          辅助操作  
        </template>
        <template #rightbutton >
          主操作
        </template>
      </Dialog>  
      <Button>
        底部悬浮型
      </Button>
    </div>
  </div>
  <h1>Dialog示例</h1>
  <div>
     
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

<style scoped>
  .view-wrapper{
    padding: 36px;
  min-height: 100vh;
  background-color: #fff;
  }


  .btn-list{
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>