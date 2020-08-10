<template>
  <div id="app">
      <!--<router-link to="/home">home</router-link>-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <main-tab-bar></main-tab-bar>


  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
 @import './assets/css/base.css';

</style>
