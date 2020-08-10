<template>
    <div class="goods-item">
      <img :src="goodsItem.show.img" alt="">
      <div class="goods-info">
        <p>{{goodsItem.title}}}</p>
        <spam class="price">{{goodsItem.price}}</spam>
        <spam class="collect">{{goodsItem.cfav}}</spam>
      </div>
    </div>
</template>

<script>
    export default {
      name: "GoodsListItem",
      props:{
          goodsItem:{
            type:Object,
            default(){
              return {}
            }
          }
      }
    }
</script>

<style scoped>
  .goods-item{
    width: 48%;
    padding-bottom: 40px;
    position: relative;
  }
  .goods-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info{
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }
  .collect{
    position: relative;
  }
  .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~asserts/img/common/collect.svg");
  }
</style>
