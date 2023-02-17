<template>
  <div class="checkbox-view-wrapper">
    <h2>复选框样式展示</h2>
    <CheckBox v-model:checked="checked"> 你好 </CheckBox>
    <Button :prime="true" class="attachBottom"> 下一步 </Button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Button from "../components/Button.vue";
import CheckBox from "../components/CheckBox.vue";
const checked = ref(false);
</script>

<style scoped>
.checkbox-view-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 32px;
  position: relative;
}

.attachBottom {
  position: absolute;
  top: calc(100vh - 160px);
}
</style>
