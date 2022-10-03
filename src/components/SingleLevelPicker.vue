<template>
  <template v-if="visible">
  <Overlay>
  <div class="singlePickerWrapper">
    <div @click="onclose" class="title">
      <img class="close-icon" src="../images/close.svg"/>
    </div>
    Single Picker
    {{visible}}
  </div>
  </Overlay>
  </template>
</template>

<script>
import Overlay from './Overlay.vue';
  export default {
    props: {
        visible: { type: Boolean, default: false }
    },
    setup(props, context) {
        const onclose = () => {
            context.emit("update:visible", false);
        };
        return { onclose };
    },
    components: { Overlay }
}
</script>

<style scoped>
 .close-icon{
  max-height: 18px;
 }
 .title{
   padding: 18px;
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
 }
</style>