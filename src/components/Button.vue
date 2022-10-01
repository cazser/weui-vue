<template>
  <button class="btn">
  
    <slot></slot>
  </button>
</template>

<script setup>

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
}
</style>