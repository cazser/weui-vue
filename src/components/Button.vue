<template>
  <button class="btn" :class="{prime:prime, warning: warning}">
    <span></span>
    <span><slot></slot></span>
  </button>
</template>

<script setup>
const props = defineProps({
warning: {type: Boolean},
prime: {type: Boolean}
})


const warning = props.warning;
const prime = props.prime;
</script>

<style  scoped>
.btn{
      position: relative;
    display: block;
    width: 184px;
    margin-left: auto;
    margin-right: auto;
    padding: 8px 24px;
    box-sizing: border-box;
    font-weight: 700;
    font-size: 17px;
    text-align: center;
    text-decoration: none;
    color: #fff;
    line-height: 1.88235294;
    border-radius: 8px;
    border: none;
    color: #07c160;
    user-select: none;
    background: #fff;
    margin: 8px;
}
.prime{
background: #07c160;
color: white;
}
.warning{
  color: red;
}
</style>