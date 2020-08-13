<template>
    <div id="home">
      <nav-bar class="home-nav"><div slot="center">不买不要钱</div></nav-bar>
      <tab-control ref="tabControl1"
                   :title="['流行','新款','精选']"
                   @tabClick="tabClick"
                   class="tab-control-s"
                    v-show="isTabFixed"></tab-control>
      <scroll class="content" ref="scroll"
              :probe-type="3"
              :pull-up-load="true"
              @scroll="contentScroll"
              @pullingUp="loadMore">
        <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <feature-view></feature-view>
        <tab-control ref="tabControl2"
                     :title="['流行','新款','精选']"
                     @tabClick="tabClick"></tab-control>
        <goods-list :goods="showGoods"/>
      </scroll>
      <back-top @click.native="backClick" v-show="isShowbBackTop" ></back-top>
    </div>
</template>

<script>
  import {getHomeMultidata, getHomeGoods} from "network/home";
  import {debounce} from "common/utils";

  import NavBar from  'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from 'components/content/backTop/BackTop'
  
  import HomeSwiper from  './childComps/HomeSwiper'
  import RecommendView from  './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'


  export default {
    name: "Home",
    components:{
      NavBar,
      Scroll,
      GoodsList,
      TabControl,
      BackTop,

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
        },
        currentType:'pop',
        isShowbBackTop:false,
        tabOffsetTop:0,
        isTabFixed:false
      }
    },
    created(){
      //请求多个数据
      this.getHomeMultidata()

      this.getGoods('pop')
      this.getGoods('new')
      this.getGoods('sell')

      console.log('被');
    },
    mounted(){
      const refresh = debounce(this.$refs.scroll.refresh,200)
      this.$bus.$on('itemImgLoad',()=>{
        refresh()
      })

    },
    methods:{
      /**
      * 事件监听
      */
      tabClick(index){
        switch(index){
          case 0 :
            this.currentType='pop'
            break
          case 1 :
            this.currentType = 'new'
            break
          case 2 :
            this.currentType = "sell"    
        }
        this.$refs.tabControl1.currentIndex = index
        this.$refs.tabControl2.currentIndex = index
        
      },
      backClick(){
         this.$refs.scroll.scrollTo(0,0,500)
      },
      contentScroll(position){
        // 是否显示向上按钮
        this.isShowbBackTop = (-position.y) > 1000

        //是否吸顶
        this.isTabFixed = (-position.y) >= this.tabOffsetTop

      },
      loadMore(){
        this.getGoods(this.currentType)
      },
      swiperImageLoad(){
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      },

      /**
       * 网络请求相关
       */
      getHomeMultidata(){
        getHomeMultidata().then(res =>{
          this.banners = res.data.data.banner.list
          this.recommends = res.data.data.recommend.list
        })
      },
      getGoods(type){
        let page = this.goods[type].page+1
        getHomeGoods(type,page).then(res =>{
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    }
  }
</script>

<style scoped>
  #home{
    /*position: relative;*/
    /*padding-top: 44px ;*/
  }
.home-nav{
  background: var(--color-tint);
  color: white;

  /*position: fixed;*/
  /*top: 0;*/
  /*left: 0;*/
  /*right: 0;*/
  /*z-index: 100;*/
}

  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;

    width: 100%;
    overflow: hidden;
  }
  .tab-control-s{
    z-index: 10;
    position: fixed;
    left: 0;
    right: 0;
    top: 43px;
  }
</style>
