<template>
  <div class="button-view-wrapper">
    <ol>
       <li v-for="(list, index) in listGroup"
          :key="index"> 
          <div>
            <test  :content="list.reduce((a,b)=>a&&b, true)"/>
          </div>
          <ol>
            <li v-for="(item, index1) in list"
            :key="index1">
            <test :content="item"  @click="click1(index, index1)"></test>
            
            </li>
          </ol>
          </li>
      
    </ol>
    <div>Button</div>
    <div>按钮</div>
    <Button @click="onClick">
          普通型
        </Button>
    <div class="btn-list">
      <router-link to="/button_default" class="btn-item">
        <Button @click="onClick">
          普通型
        </Button>
      </router-link>
      <Button>
        底部悬浮型
      </Button>
    </div>
  </div>
</template>

<script setup>
  import { reactive, ref } from 'vue';
import Button from '../components/Button.vue';
  import Test from '../components/Test.vue'
   const listGroup = 
   reactive([[true, true, true], [true, true, true], [true, true, true]]);
   const onClick = ()=>{
    listGroup[0][1]= ! listGroup[0][1];
   }

   const click1 = (a, b)=>{
    listGroup[a][b] = !listGroup[a][b];
   }
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