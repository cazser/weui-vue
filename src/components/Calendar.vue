<template>
  <date-picker  />
  <div class="calenderWrapper">
    <table class="table">
      <thead>
        <tr>
          <td>一</td>
          <td>二</td>
          <td>三</td>
          <td>四</td>
          <td>五</td>
          <td>六</td>
          <td>日</td>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
    <ul class="daycontainer">
      <li v-for="(day,index) in days" :key="index"
       :class="{anotherMonth: isAnotherMonth(day), 
                  today:isToady(day), selected: isSelected(day)}"
       @click="onClick(day)">
        {{day.getDate()}}
        <div>
          {{renderInCell(day)}}
        </div>
      </li>
    </ul>
  </div>
  
  
  
</template>

<script setup>
    import { provide, reactive, ref, watch } from 'vue';
    import DatePicker from './DatePicker.vue';
    const props = defineProps({
      handleCellClick:{
        type: Function,
        default:()=>{}
      },
      renderInCell:{
        type:Function,
        default(){return 
          ()=>''
        }
      }
    });
    const renderInCell = props.renderInCell;
    const year = ref(new Date().getFullYear());
    const month = ref(new Date().getMonth()+1);
    let selectedDate = reactive(new Set());
    const onClick = (date)=>{
      while(selectedDate.size>0){
        selectedDate.clear();
      }
      selectedDate.add( date);
      //console.log(selectedDate)
      props.handleCellClick(date);
    }
    const isSelected = (date)=>{
      return selectedDate.has(date); 
      
    }    
    provide("year",year);
    provide( "month" ,month);
    
    const days = reactive([]);

    const computeDays=()=>{
      while(days.length>0){days.pop()}
      const date = new Date(year.value, month.value-1,1);
      let day=1;
      let date1 = new Date(year.value, month.value-1, day);
      let date2 = new Date(year.value, month.value-1, 1);
      day=1;
      while(date2.getDay()!==1){
        date2 = new Date(year.value,month.value-1, day-1);
        day--;
        days.unshift(date2);
      }
      day=1;
      while(days.length<42){
        days.push(date1);
        day++;
        date1 = new Date(year.value, month.value-1, day);
      };
      
    }

    computeDays();
    watch(year, ()=>{
     computeDays(); 

    });
    watch(month, ()=>{
      computeDays();
    })

    const isAnotherMonth=(date)=>{
      if(date.getMonth()!== month.value-1){
        return true;
      }else{
        return false;
      }
    }

    const isToady=(date)=>{
      const today = new Date();
      if(today.getFullYear() === date.getFullYear() && today.getMonth()===date.getMonth() && today.getDate()===date.getDate()){
        return true;
      }else{
        return false;
      }
    }
</script>

<style scoped>
.table{
  border-collapse: collapse;      
  margin-bottom: 12px;
  border-spacing: 0;      
  
}

.selected{
  color:aqua;
}
.calenderWrapper{
  padding:16px;
  width: 100%;
  text-align: center;
}

.calenderWrapper>table{
  width: 100%;
}

.daycontainer{
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
}
.daycontainer>li{
  width: 14%;
  border: 1px solid;
  min-height: 40px;
}

.anotherMonth{
  background: #ededed;
}

.today{
 background: #91d300;  
}
</style>