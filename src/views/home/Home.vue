<template>
    <div id="home">
      <nav-bar class="home-nav"><div slot="center">不买不要钱</div></nav-bar>
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control" :title="['流行','新款','精选']"></tab-control>
      <goods-list :goods="goods.pop.list"/>

      <ul>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
        <li>456</li>
      </ul>
    </div>
</template>

<script>
  import {getHomeMultidata, getHomeGoods} from "network/home";

  import NavBar from  'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  
  import HomeSwiper from  './childComps/HomeSwiper'
  import RecommendView from  './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'


  export default {
    name: "Home",
    components:{
      NavBar,
      GoodsList,
      TabControl,

      HomeSwiper,
      RecommendView,
      FeatureView
    },
    data(){
      return {
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        }
      }
    },
    created(){
      //请求多个数据
      this.getHomeMultidata()

      this.getGoods('pop')
      this.getGoods('new')
      this.getGoods('sell')

    },
    methods:{
      getHomeMultidata(){
        getHomeMultidata().then(res =>{
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
        })
      },
      getGoods(type){
        let page = this.goods[type].page+1
        getHomeGoods(type,page).then(res =>{
          console.log(res.data.data.list);
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px ;
  }
.home-nav{
  background: var(--color-tint);
  color: white;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
  .tab-control{
    position: sticky;
    top: 44px;
  }
</style>
