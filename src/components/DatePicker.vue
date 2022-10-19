<script setup>
import { reactive, ref, watch } from "vue";

import Overlay from "./Overlay.vue";
import Button from "./Button.vue";


const year = ref(new Date().getFullYear());
const month = ref(new Date().getMonth()+1);
const onClick = ()=>{
  
  visible.value = !visible.value;
}
const visible = ref(false);
const onClose=()=>{
  visible.value = false;
}
const months = reactive([1,2,3,4,5,6,7,8,9,10,11,12]);
const years = reactive([year.value]);
for(let i=0;i<10; i++){
  years.unshift(year.value - i -1);
  years.push(year.value+i+1);
}
const selectedMonth = ref(0);
const onSubmit = ()=>{
  year.value = selectedYear.value;
  month.value = selectedMonth.value;
   onClose();
}
const onSelectMonth = (month_)=>{
   selectedMonth.value = Number.parseInt( month_ );
}
watch(year, ()=>{
  while(years.length>0){
    years.pop();
  }
  years.push(year.value);
  for(let i=0;i<10; i++){
  years.unshift(year.value - i -1);
  years.push(year.value+i+1);
}
})
const selectedYear = ref(0);
const onSelectYear = (year_)=>{
  selectedYear.value = Number.parseInt(year_);
}
</script>


<template>
  <div @click="onClick">
    {{year}}年{{month}}月
  </div>
  <Overlay v-if="visible">
  <div  class="pickDate">
   <div class="title">
     <span  @click="onClose">
      <svg t="1664759746363" class="close-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2556" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><path d="M544.448 499.2l284.576-284.576a32 32 0 0 0-45.248-45.248L499.2 453.952 214.624 169.376a32 32 0 0 0-45.248 45.248l284.576 284.576-284.576 284.576a32 32 0 0 0 45.248 45.248l284.576-284.576 284.576 284.576a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0-45.248L544.448 499.2z" p-id="2557"></path></svg>
     </span>
    选择年和月
   </div>
   <div class="date-container">
    <ul class="year-list">
      <li v-for="year_ in years" :key="year_"
      :class="{selected: year_===selectedYear}"
      @click="onSelectYear(year_)">
        {{year_}}
      </li>
    </ul>
    <ul>
      <li @click="onSelectMonth(month_)" 
      :class="{selected: month_===selectedMonth}" 
      v-for="month_ in months"
      :key="month_">
        {{month_}}
      </li>

    </ul>
   </div>
   <Button :prime="true" @click="onSubmit">
    确定
   </Button>
  </div>
  </Overlay>
</template>




<style  scoped>
.year-list{
  height: 300px;
  overflow: auto;
}

.year-list>li{
  width: 120px;
}
.pickDate{
position: absolute;
  top: 50%;
  left: 50%;
  text-align: start;
  transform: translateX(-50%);
  background: #fff;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  min-width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.date-container{
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width:100%;
  padding: 10px;
}
ul>li{
  width: 50px;
  text-align: center;
}
.selected{
  background: #ededed;
}
 .close-icon{
  
  max-height: 18px;
  position: absolute;
  left:-80px;
  padding: 0;
 }

 .title{
  margin-top: 12px;
 }


</style>