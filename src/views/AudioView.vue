<template>
  <div class="button-view-wrapper">
    <div>AudioPlayer</div>
    <div>音频播放器</div>
    <div class="btn-list">
      <AudioPlayer />
    </div>
  </div>
</template>

<script setup>
  import Button from '../components/Button.vue';
  import AudioPlayer from '../components/AudioPlayer.vue'
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