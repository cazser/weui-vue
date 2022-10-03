<template>
  <template v-if="visible">
  <Overlay>
  <div class="singlePickerWrapper">
    <div  class="title">
      <img  @click="onclose" class="close-icon" src="../images/close.svg"/>
      <span>{{title}}</span>
    </div>
    {{selectIndex}}
    <ol class="singlePicker-content">
      <li v-for="option in innerOptions" 
      key="option.id" @click="onSelect(option)"
      :class="{selected: option.selected}">
        {{option.text}}
      </li>
    </ol>
    
    <div class="button-wrapper">
      <Button @click="onclick" :prime="true">
        确定
      </Button>
    </div>
  </div>
  </Overlay>
  </template>
</template>

<script>
import Overlay from './Overlay.vue';
import Button from './Button.vue';
import { reactive, ref } from 'vue';
  export default {
    props: {
        visible: { type: Boolean, default: false },
        title:{tyep:String, default:""},
        options:{type: Array, default:[]}
    },
    setup(props, context) {
        const onclose = () => {
            context.emit("update:visible", false);
        };
        const onclick=()=>{
          onclose();
        };
        const innerOptions=reactive( [] );
        for(let i=0; i<props.options.length; i++){
          innerOptions.push({id:i, text: props.options[i]});
        };
      
        const selectIndex = ref(0);
        const onSelect=(option)=>{
          selectIndex.value = option.id;
        }
        return { onclose , onclick, innerOptions, selectIndex, onSelect};
    },
    components: { Overlay, Button }
}
</script>

<style scoped>
 .close-icon{
  float: left;
  max-height: 18px;

 }
 .title{
   padding: 18px;
   text-align: center;
   font-weight: bolder;
   width: 100%;
 }
 .singlePickerWrapper{
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: start;
  transform: translateX(-50%);
  background: #fff;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
 }

 .button-wrapper{
   position: absolute;
   bottom: 20px;
 }

 .singlePicker-content{
  max-height: calc(60%);
  overflow-y: scroll;
  padding: 18px;
 }
</style>