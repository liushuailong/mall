<template>
<!--  <div id="nav">-->
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/about">About</router-link>-->
<!--  </div>-->
<!--  <router-view/>-->
  <div class="App">
    <router-view></router-view>
    <TabBar>
      <TabBarItem path="/home" activeColor="pink">
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/home.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="@/assets/img/tabbar/home_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/category" activeColor="pink">
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/category.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="@/assets/img/tabbar/category_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/cart" activeColor="pink">
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/shopcart.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="@/assets/img/tabbar/shopcart_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/profile" activeColor="pink">
        <template v-slot:item-icon>
          <img src="@/assets/img/tabbar/profile.svg" alt="">
        </template>
        <template v-slot:item-icon-active>
          <img src="@/assets/img/tabbar/profile_active.svg" alt="">
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
// 配置的别名为什么没有生效
import TabBar from '@/components/common/tabbar/TabBar.vue';
import TabBarItem from '@/components/common/tabbar/TabBarItem.vue';

@Options({
  components: {
    // HelloWorld,
    TabBar,
    TabBarItem,
  },
})
export default class App extends Vue {}
</script>

<style >
  @import 'assets/css/base.css';
  .tab-bar-item img {
    height: 24px;
    width: 24px;
  }
</style>
