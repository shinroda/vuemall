<template>
    <div class="recommend">
      <div class="recommend-item" v-for="item in recommends">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
        <div>{{item.title}}</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "RecommendView",
        props:{
          recommends:{
            type:Array,
            default(){

            }
          }
        }
    }
</script>

<style scoped>
  .recommend{
    display: flex;
    /*align-items: center;*/
    font-size: 12px;
    justify-content: space-around;

    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
  }
  .recommend-item{
    flex: 1;
    text-align: center;
  }
  .recommend-item img{
    height: 70px;
    width: 70px;
    margin-bottom: 10px;
  }
</style>
