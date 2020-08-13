<template>
    <div class="detail-nav">
      <nav-bar>
        <div slot="left" @click="back">
          <img class="back-btn" src="~assets/img/common/back.svg" alt="">
        </div>
        <div slot="center" class="title">
          <span v-for="(item,index) in titles"
          :class="{active:currentIndex === index}"
          @click="itemClick(index)">{{item}}</span>
        </div>
      </nav-bar>
    </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
    export default {
      name: "DetailNavBar",
      components:{
        NavBar
      },
      data(){
        return{
          titles:['商品','参数','评论','推荐'],
          currentIndex :0
        }
      },
      methods:{
        back(){
          this.$router.back()
        },
        itemClick(index){
          this.currentIndex = index
        }
      }
    }
</script>

<style scoped>
  .detail-nav {
    background-color: #fff;
    font-weight: normal;
  }
  .back-btn{
    margin-top: 12px;
  }
  .title{
    display: flex;
    font-size: 14px;
    padding: 0 20px;
  }
  .title span{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
</style>
