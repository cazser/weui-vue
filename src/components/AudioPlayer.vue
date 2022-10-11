<template>
    <div class="container">
      <div class="title-wrapper">
      <slot></slot>
      </div>
      <div class="left-right">
      <div class="player-bar">
        <div class="progressBar">
        </div>
        <div class="time-wrapper">
        <span>00:00</span> <span>26:01</span>
        </div>
        
      </div>
        <div class="ball">
           <img src="../images/audio.svg"/>
        </div>
      </div>
    </div>
</template>

<script>

export default {
    props: {
        url: {
            type: String,
        }
    },
    setup(props, context){

    }
};
</script>

<style scoped>
.container{
  border-radius: 8px;
  min-width: 300px;
  max-width: 800px;
  min-height: 100px;
  background-color: #f7f7f7;
  padding: 20px;
}

.title-wrapper{
  font-weight: bold;
}

.player-bar{
  display: flex;
  justify-content: space-between;
  align-items: center;  
  margin-top: 8px;
  flex-direction: column;
 min-width: calc(100% - 40px);  
}

.progressBar{
  height: 1px;
  min-width: calc(100% - 20px);
  background-color:  grey;
}

.ball{
  background-color: white;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ball>img{
  max-height: 21px;
}

.time-wrapper{
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 4px;
  color: #acacac;
 margin-top: 8px;
}



.left-right{
  display: flex;
  flex-direction: row;
}
</style>
