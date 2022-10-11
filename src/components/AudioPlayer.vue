<template>
    <div class="container">
      <div class="title-wrapper">
      <slot></slot>
      </div>
      <div class="player-bar">
        <div class="progressBar">
        </div>
        <div class="ball">
        </div>
      </div>
      <div ></div>
    </div>
</template>

<script>

export default {
    props: {
        url: {
            type: String,
        }
    },
};
</script>

<style scoped>
.container{
  border-radius: 8px;
  min-width: 80%;
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
}

.progressBar{
  height: 1px;
  width: calc(100% - 40px);
  border: 1px solid grey;
}

.ball{
  background-color: white;
  height: 36px;
  width: 36px;
  border-radius: 50%;
}
</style>
