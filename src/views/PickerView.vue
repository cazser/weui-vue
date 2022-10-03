<template>
  <div class="button-view-wrapper">
    <div>Picker</div>
    <div>多列选择器，需要配合js实现</div>
    <div class="btn-list">
    
        <Button>
          单列选择器
        </Button>
      
      <Button>
        日期选择器
      </Button>
    </div>
    {{y}}
    <Button @click="toggle">
      toggle
    </Button>
    <SingleLevelPicker :visible=  "y"></SingleLevelPicker>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
import Button from '../components/Button.vue';
import SingleLevelPicker from '../components/SingleLevelPicker.vue';

  const y = ref(true);

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