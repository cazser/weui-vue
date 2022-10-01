<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import FoldPanel from '../components/FoldPanel.vue';
import LineItem from '../components/LineItem.vue';

</script>

<template>
  
  <div class="wrapper">
    <div class="titleWrapper">
      <h1>WeUI</h1>
      <p>WeUI 是一套同微信原生视觉体验一致的基础样式库，由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。</p>
    </div>
    <ul class="fold-list">
      <li>
    <FoldPanel>
    <template #header>
    <LineItem>
      <template #header >
        <span>表单</span>
      </template>
      <template #default >
        <span>
          <img src="../images/icon_nav_form.png" alt=" 展开"  class="small-img" />
        </span>
      </template>
    </LineItem>
  </template>

  <template #default>
    <ol class="list">
      <li>
        <LineItem>
          <template #header >
            <span>Button</span>
          </template>
        </LineItem>
      </li>
      <li>
        <LineItem>
          <template #header >
            <span>Button</span>
          </template>
        </LineItem>
      </li>
      <li>
        <LineItem>
          <template #header >
            <span>Button</span>
          </template>
        </LineItem>
      </li>   
    </ol>
  </template>
   </FoldPanel>
 
   </li>
     <li>
    <FoldPanel>
    <template #header>
    <LineItem>
      <template #header >
        <span>表单</span>
      </template>
      <template #default >
        <span>
          <img src="../images/icon_nav_form.png" alt=" 展开"  class="small-img" />
        </span>
      </template>
    </LineItem>
  </template>

  <template #default>
    <ol class="list">
      <li>
        <LineItem>
          <template #header >
            <span>Button</span>
          </template>
        </LineItem>
      </li>
      <li>
        <LineItem>
          <template #header >
            <span>Button</span>
          </template>
        </LineItem>
      </li>
      <li>
        <LineItem>
          <template #header >
            <span>Button</span>
          </template>
        </LineItem>
      </li>   
    </ol>
  </template>
   </FoldPanel>
 
   </li>
     <li>
    <FoldPanel>
    <template #header>
    <LineItem>
      <template #header >
        <span>表单</span>
      </template>
      <template #default >
        <span>
          <img src="../images/icon_nav_form.png" alt=" 展开"  class="small-img" />
        </span>
      </template>
    </LineItem>
  </template>

  <template #default>
    <ol class="list">
      <li>
        <LineItem>
          <template #header >
            <span>Button</span>
          </template>
        </LineItem>
      </li>
      <li>
        <LineItem>
          <template #header >
            <span>Button</span>
          </template>
        </LineItem>
      </li>
      <li>
        <LineItem>
          <template #header >
            <span>Button</span>
          </template>
        </LineItem>
      </li>   
    </ol>
  </template>
   </FoldPanel>
 
   </li>
     <li>
    <FoldPanel>
    <template #header>
    <LineItem>
      <template #header >
        <span>表单</span>
      </template>
      <template #default >
        <span>
          <img src="../images/icon_nav_form.png" alt=" 展开"  class="small-img" />
        </span>
      </template>
    </LineItem>
  </template>

  <template #default>
    <ol class="list">
      <li>
        <LineItem>
          <template #header >
            <span>Button</span>
          </template>
        </LineItem>
      </li>
      <li>
        <LineItem>
          <template #header >
            <span>Button</span>
          </template>
        </LineItem>
      </li>
      <li>
        <LineItem>
          <template #header >
            <span>Button</span>
          </template>
        </LineItem>
      </li>   
    </ol>
  </template>
   </FoldPanel>
 
   </li>
     <li>
    <FoldPanel>
    <template #header>
    <LineItem>
      <template #header >
        <span>表单</span>
      </template>
      <template #default >
        <span>
          <img src="../images/icon_nav_form.png" alt=" 展开"  class="small-img" />
        </span>
      </template>
    </LineItem>
  </template>

  <template #default>
    <ol class="list">
      <li>
        <LineItem>
          <template #header >
            <span>Button</span>
          </template>
        </LineItem>
      </li>
      <li>
        <LineItem>
          <template #header >
            <span>Button</span>
          </template>
        </LineItem>
      </li>
      <li>
        <LineItem>
          <template #header >
            <span>Button</span>
          </template>
        </LineItem>
      </li>   
    </ol>
  </template>
   </FoldPanel>
 
   </li>
     <li>
    <FoldPanel>
    <template #header>
    <LineItem>
      <template #header >
        <span>表单</span>
      </template>
      <template #default >
        <span>
          <img src="../images/icon_nav_form.png" alt=" 展开"  class="small-img" />
        </span>
      </template>
    </LineItem>
  </template>

  <template #default>
    <ol class="list">
      <li>
        <LineItem>
          <template #header >
            <span>Button</span>
          </template>
        </LineItem>
      </li>
      <li>
        <LineItem>
          <template #header >
            <span>Button</span>
          </template>
        </LineItem>
      </li>
      <li>
        <LineItem>
          <template #header >
            <span>Button</span>
          </template>
        </LineItem>
      </li>   
    </ol>
  </template>
   </FoldPanel>
 
   </li>
   </ul>


  </div>
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

