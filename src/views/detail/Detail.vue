<template>
    <div id="detail">
      <detail-nav-bar class="detail-nav-bar"/>
      <scroll class="content" ref="scroll">
        <detail-swiper :topImages="topImages"/>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detailInfo="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
        <detail-param-info :param-info="paramInfo"></detail-param-info>
        <detail-comment-info :comment-info="commnetInfo"></detail-comment-info>
        <goods-list :goods="recommnd"></goods-list>
      </scroll>

    </div>
</template>

<script>
  import {getDetaail,Goods,Shop,GoodsParam,getRecommnd} from 'network/detail'

  import  DetailNavBar from './childComp/DetailNavBar'
  import  DetailSwiper from './childComp/DetailSwiper'
  import  DetailBaseInfo from './childComp/DetailBaseInfo'
  import  DetailShopInfo from './childComp/DetailShopInfo'
  import  DetailGoodsInfo from './childComp/DetailGoodsInfo'
  import  DetailParamInfo from './childComp/DetailParamInfo'
  import  DetailCommentInfo from './childComp/DetailCommentInfo'

  import Scroll from 'components/common/scroll/Scroll'
  import GoodsList from 'components/content/goods/GoodsList'

    export default {
      name: "Detail",
      components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodsList,

        Scroll
      },
      data(){
          return{
            iid : null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commnetInfo:{},
            recommnd:[]
          }
      },
      created(){
        this.iid = this.$route.params.iid
        getDetaail(this.iid).then((res) =>{
          let data = res.data.result
          //获取轮播图片
          this.topImages = data.itemInfo.topImages
          //获取商品信息
          this.goods = new Goods(data.itemInfo,data.columns, data.shopInfo.services)
          //商家信息
          this.shop = new Shop(data.shopInfo)
          //商品详情数据
          this.detailInfo = data.detailInfo
          //商品参数
          this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
          //评论信息
          if (data.rate.cRate !== 0){
            this.commnetInfo = data.rate.list[0]
          }
          //获取推荐
           getRecommnd().then(res =>{
            console.log(res);
           this.recommnd = res.data.data.list
           })
        })
      },
      methods:{
        imageLoad(){
          this.$refs.scroll.refresh()
        }
      }
    }
</script>

<style scoped>
  #detail{
    z-index: 9;
    position: relative;
    background: #fff;
    height: 100vh;
  }
  .detail-nav-bar{
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }
  .content{
    height: calc(100vh - 44px);
  }
</style>
