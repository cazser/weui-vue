<template>
  <div class="button-view-wrapper">
    <div>Toast</div>
    <div>弹出式提示</div>
    <div class="btn-list">
        <Button>
          成功提示
        </Button>
      <Button>
        失败提示
      </Button>
      <Button>
          加载中提示
      </Button>
      <Button>
        文字提示
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