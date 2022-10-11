<template>
  <div class="button-view-wrapper">
    <div>AudioPlayer</div>
    <div>音频播放器</div>
    
    <div class="btn-list">
      <AudioPlayer>
        <span>《托妻献子》郭德纲、于谦</span>
      </AudioPlayer>  
      <button @click="play">play</button>
    </div>
  </div>

</template>

<script setup>
  import Button from '../components/Button.vue';
  import AudioPlayer from '../components/AudioPlayer.vue';
  import {inject} from 'vue';
  const audio = inject('audio');

  audio.src='http://127.0.0.1:8080/buru.mp3';
  console.log(audio);
 const play=()=>{
   audio.play();
 }
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