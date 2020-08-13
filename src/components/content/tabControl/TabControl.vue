<template>
    <div class="tab-control">
      <div class="tab-control-item"
           @click="itemclick(index)"
           :class="{active: currentIndex === index}"
           v-for="(item,index) in title">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "TabControl",
      props:{
        title:{
            type:Array,
            default(){
              return []
            }
          }
      },
      data(){
        return {
          currentIndex:0
        }
      },
      methods:{
        itemclick(index){
          this.currentIndex = index
          this.$emit('tabClick',index)

        }
      }
    }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    line-height: 40px;
    background: #fff;
    z-index: 9;

  }
  .tab-control-item{
    flex: 1;
  }
  .tab-control-item span{
    padding: 5px;
  }
  .active{
    color: var(--color-high-text);
  }
  .active span{
    border-bottom: 2px solid var(--color-high-text);
  }
</style>
