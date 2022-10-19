<template>
  <div class="button-view-wrapper">
    <div>Calendar</div>
    <div>日历</div>
    <div class="btn-list">
      <Calendar />
    </div>
  </div>
</template>

<script setup>
  import Button from '../components/Button.vue';
import Calendar from '../components/Calendar.vue';
</script>

<style  scoped>
.button-view-wrapper{
  padding: 36px;
  min-height: 100vh;
  background-color: white;
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