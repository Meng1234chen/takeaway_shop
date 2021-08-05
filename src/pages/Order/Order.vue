<template>
  <div class="order">
    <!-- 首页头部 -->
    <HeadTop title="订单列表"></HeadTop>
    <section class="order_to_login">
      <img src="./imgs/person.png">
      <h3>登录后查看外卖订单</h3>
      <button>立即登录</button>
    </section>
  </div>
</template>

<script>
import HeadTop from '../../components/HeadTop.vue'
export default {
  components: {
    HeadTop
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.order
  width 100%
  height 100%
  .order_to_login
    padding-top 100px
    width 60%
    margin 0 auto
    text-align center
    img
      display block
      width 100%
      height 30%
    h3
      padding 10px 0
      font-size 15px
      color #6a6a6a
    button
      dispaly inline-block
      background-color #02a774
      font-size 12px
      color #fff
      border 0
      outline none
      border-radius 5px
      padding 10px 20px

</style>
