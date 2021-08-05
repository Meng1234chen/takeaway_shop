<template>
  <div class="footer-guide">
    <span href="javascript:;" class="guide_item" :class="{on: '/msite' === $route.path}" @click="goTo('/msite')">
      <span>
        <i class="iconfont icon-icon-waimai" ></i>
      </span>
      <span>外卖</span>
    </span>
    <span href="javascript:;" class="guide_item" :class="{on: '/search' === $route.path}" @click="goTo('/search')">
      <span>
        <i class="iconfont icon-icon-search"></i>
      </span>
      <span>搜索</span>
    </span>
    <span href="javascript:;" class="guide_item" :class="{on: '/order' === $route.path}" @click="goTo('/order')">
      <span>
        <i class="iconfont icon-iconorder"></i>
      </span>
      <span>订单</span>
    </span>
    <span href="javascript:;" class="guide_item" :class="{on: '/profile' === $route.path}" @click="goTo('/profile')">
      <span>
        <i class="iconfont icon-icon-geren"></i>
      </span>
      <span>我的</span>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    goTo (path) {
      // $router 实现路由的控制（跳转）
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../commom/stylus/mixins.styl"
.footer-guide
  top-border-1px(#e4e4e4)
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  width 100%
  height 50px
  background-color #fff
  display flex
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 3px
    color #999999
    &.on
      color #02a774
    span
      font-size 8px
      .iconfont
        font-size 18px
</style>
