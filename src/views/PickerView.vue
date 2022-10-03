<template>
  <div class="button-view-wrapper">
    <div>Picker</div>
    <div>多列选择器，需要配合js实现</div>
    <div class="btn-list">
    
        <Button @click="toggle">
          单列选择器
        </Button>
      
      <Button>
        日期选择器
      </Button>
    </div>
    
    <SingleLevelPicker v-model:visible="y"
                       title="单列选择器" 
                       :options="options" />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import Button from '../components/Button.vue';
  import SingleLevelPicker from '../components/SingleLevelPicker.vue';

  const y = ref(false);
  const options = ["飞机票", "火车票", "出租车", "公交票", "其他", "飞机票",
  "火车票", "出租车", "公交票", "其他", "飞机票", "火车票", "出租车", "公交票", 
  "其他", "飞机票", "火车票", "出租车", "公交票","其他"]
  const toggle = ()=> y.value = !y.value;
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
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
}

</style>