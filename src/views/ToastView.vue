<template>
  <div class="button-view-wrapper">
    <div>Toast</div>
    <div></div>
    <div class="btn-list">
        <Button>
          普通型
        </Button>
      <Button>
        底部悬浮型
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