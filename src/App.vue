<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

</script>

<template>
  
  <router-view v-slot="{ Component }">
  <transition name="slide-fade">
    <component :is="Component" />
  </transition>
</router-view>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.wrapper{
  background: #ededed;
  min-height: 100vh;
  padding: 20px;
}

.list>li{
  border-bottom: 1px solid gray;

}

.list:last-child{
  border-bottom: none;
}

.titleWrapper{
  margin: 24px;
}

.fold-list>li{
  margin: 8px;
}
</style>
