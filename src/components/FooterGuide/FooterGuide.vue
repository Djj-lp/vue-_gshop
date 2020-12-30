<template>
  <div class="footer_guide border_top flex flex_sb" >
    <div class="guide_item" :class="{on:'/msite'===$route.path}" @click="goTo('/msite')">
      <div class="item_icon">
      <i class="iconfont icon-waimai"></i>
      </div>
      <div>外卖</div>
    </div>
    <div class="guide_item" :class="{on:'/search'===$route.path}" @click="goTo('/search')">
      <div class="item_icon">
        <i class="iconfont icon-search"></i>
      </div>
      <div>搜索</div>
    </div>
    <div class="guide_item"  :class="{on:'/order'===$route.path}" @click="goTo('/order')">
      <div class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </div>
      <div>订单</div>
    </div>
    <div class="guide_item"  :class="{on:'/mine'===$route.path}" @click="goTo('/mine')">
      <div class="item_icon">
        <i class="iconfont icon-geren"></i>
      </div>
      <div>我的</div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      goTo (path) {
        this.$router.replace(path)
        // console.log(this.$router.replace(path))
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl';
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    font-size .14rem
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      .item_icon
        margin .05rem 0
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>