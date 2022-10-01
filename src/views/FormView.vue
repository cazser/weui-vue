<template>
  <div class="button-view-wrapper">
    <div>Form</div>
    <div>表单页</div>
    <div class="btn-list">
      <RouterLink to="/checkbox">
        <Button>
          复选框
        </Button>
      </RouterLink>
      <Button>
        单选框
      </Button>
      <Button>
        开关
      </Button>
      <Button>
        选择框
      </Button>
      <Button>
        弹出选择框
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