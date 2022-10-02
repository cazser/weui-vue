<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import FoldPanel from '../components/FoldPanel.vue';
import LineItem from '../components/LineItem.vue';
import RightArrow from '../components/RightArrow.vue';
import Overlay from '../components/Overlay.vue';

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
        <router-link to="button">
        <LineItem>
          <template #header >
            <span>Button</span>
          </template>
          <template #default >
            <RightArrow/>
          </template>
        </LineItem>
        </router-link>
      </li>
      <li>
        <router-link to="form">
        <LineItem>
          <template #header >
            <span>Form</span>
          </template>
          <template #default >
            <RightArrow/>
          </template>
        </LineItem>
        </router-link>
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
        <span>基础组件</span>
      </template>
      <template #default >
        <span>
          <img src="../images/icon_nav_layout.png" alt=" 展开"  class="small-img" />
        </span>
      </template>
    </LineItem>
  </template>

  <template #default>
    <ol class="list">
      <li>
        <LineItem>
          <template #header >
            <span>Progress</span>
          </template>
          <template #default >
            <RightArrow/>
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
        <span>操作反馈</span>
      </template>
      <template #default >
        <span>
          <img src="../images/icon_nav_feedback.png" alt=" 展开"  class="small-img" />
        </span>
      </template>
    </LineItem>
  </template>

  <template #default>
    <ol class="list">
      <li>
        <RouterLink to="/dialog">
          <LineItem>
            <template #header >
              <span>Dialog</span>
            </template>
            <template #default >
              <RightArrow/>
            </template>
          </LineItem>
        </RouterLink>
      </li>
      
      <li>
        <LineItem>
          <template #header >
            <span>Picker</span>
          </template>
          <template #default >
            <RightArrow/>
          </template>
        </LineItem>
      </li>

       <li>
        <LineItem>
          <template #header >
            <span>Toast</span>
          </template>
          <template #default >
            <RightArrow/>
          </template>
        </LineItem>
      </li>
       <li>
        <LineItem>
          <template #header >
            <span>Toptips</span>
          </template>
          <template #default >
            <RightArrow/>
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

.overlay{
  position:  fixed;
  height: 100%;
  width: 100%;
  top:0;
  left:0;
  background-color: rgba(100, 100, 100, 0.5);
}

.content{
  width: 100px;
  height: 100px;
  background:  red;
  position: absolute;
  top:100px;
  left: 100px;
}
</style>

