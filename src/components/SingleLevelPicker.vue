<template>
  <template v-if="visible">
  <Overlay>
  <div class="singlePickerWrapper">
    <div @click="onclose" class="title">
      <img class="close-icon" src="../images/close.svg"/>
      <span>{{title}}</span>
    </div>
    <div>
      <ol>
        <li v-for="option in options">
          {{option}}
        </li>
      </ol>
    </div>
    <Button :prime="true">
      确定
    </Button>
  </div>
  </Overlay>
  </template>
</template>

<script>
import Overlay from './Overlay.vue';
import Button from './Button.vue';
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
        return { onclose };
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
</style>