<template>

<button class="btn" :class="{prime:prime, warning: warning, invalid: invalid, small: small}">
    <div v-if="loading" class="weui-primary-loading">
      <div class="weui-primary-loading-inner"></div>
    </div>
    <span><slot></slot></span>
  </button>

</template>

<script setup>
const props = defineProps({
warning: {type: Boolean},
prime: {type: Boolean},
loading: {type: Boolean},
invalid: {type: Boolean},
small: {type: Boolean}
})


const warning = props.warning;
const prime = props.prime;
const loading = props.loading;
const invalid = props.invalid;
</script>

<style  scoped>
.btn{
  border: 1px solid transparent;
      position: relative;
    display: inline-block;
    width: 184px;
    margin-left: auto;
    margin-right: auto;
    padding: 8px 24px;
    box-sizing: border-box;
    font-weight: 700;
    font-size: 17px;
    text-align: center;
    text-decoration: none;
    line-height: 1.88235294;
    border-radius: 8px;
    border: none;
    color: #07c160;
    user-select: none;
    background: #f9f9f9;
    margin: 8px;
}
.prime{
background: #07c160;
color: white;
}
.warning{
  color: red;
}
.loading-dot{
    
    top: 0;
    left: 50%;
    margin-left: -0.0625em;
    width: 0.125em;
    height: 0.125em;
    border-top-right-radius: 0.125em;
    border-bottom-right-radius: 0.125em;
    background: currentColor;
}

.weui-primary-loading{
  width: 1em;
  height: 1em;
  border-top: 2px dotted;
  display: inline-block;
  border-radius: 50%;
 animation:mymove 1s linear infinite;
}


  @keyframes mymove
{
 0% {
     transform:  rotate(-540deg); 
    }

  100% {
      transform: rotate(0deg);
      }


}

.btn:active{
  background-color: rgba(0, 0, 0, 0.1);
}
.invalid{
  background-color: #f2f2f2;
  color: rgba(0,0,0,0.2);

}


.invalid{
  border: none;
}

.small{
  display: inline-block;
  width: 64px;
  height: 24px;
  font-size: 2px; 
  padding: 4px; 
}
</style>