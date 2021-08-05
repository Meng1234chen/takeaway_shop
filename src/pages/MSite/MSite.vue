<template>
  <div class="msite">
    <!-- 首页头部 -->
    <HeadTop :title="address.name">
      <a class="header_search" slot="left">
        <i class="iconfont icon-icon-search"></i>
      </a>
      <a class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </a>
    </HeadTop>
    <!-- 首页导航 -->
    <nav class="msite_nav border-1px">
      <div class="swiper-container" v-if="types.length">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(types, index) in typesArr" :key="index">
            <a href="javascript:;" class="link_to_food" v-for="(type, index) in types" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl + type.image_url">
              </div>
              <span>{{type.title}}</span>
            </a>
          </div>
        </div>
        <!-- 标记页数 -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./imgs/msite_back.svg" alt="back" v-else>
    </nav>
    <!-- 首页附近商家 -->
    <div class="msite_shop_list border-1px">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>

  </div>
</template>

<script>
import {mapState} from 'vuex'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

import HeadTop from '../../components/HeadTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
export default {
  data () {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com'
    }
  },
  mounted () {
    // 发送请求，调用actions
    this.$store.dispatch('getTypes')
    this.$store.dispatch('getShops')
  },
  computed: {
    ...mapState(['address', 'types']),
    // 根据types一维数组生成一个二维数组，小数组中的元素个数是8
    typesArr () {
      const {types} = this
      // 准备空的二维数组
      const arr = []
      // 准备一个小数组（最大长度为8）
      let minArr = []
      // 遍历types
      types.forEach(t => {
        // 如果当前小数组已经满了，创建一个新的
        if (minArr.length === 8) {
          minArr = []
        }
        // 如果minArr是空的，将小数组保存到大数组中
        if (minArr.length === 0) {
          arr.push(minArr)
        }
        // 将当前分类保存到小数组中
        minArr.push(t)
      })
      return arr
    }
  },

  watch: {
    types (value) {
      // types数组中有数据了，在异步更新界面之前执行,no!
      // 使用setTimeout可以实现效果，但不是最好的,just so so
      // setTimeout(() => {
      //   /* eslint-disable no-new */
      //   new Swiper('.swiper-container', {
      //     loop: true,
      //     pagination: {
      //       el: '.swiper-pagination'
      //     }
      //   })
      // }, 100)
      // 界面更新就立即创建Swiper对象
      // vue中提供了vm.$nextTick( [callback] )方法，将回调延迟到下次 DOM 更新循环之后执行,nice!
      this.$nextTick(() => { // 一旦完成界面更新，立即调用（此条语句要写在页面更新之后）
        /* eslint-disable no-new */
        new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
    }
  },
  components: {
    HeadTop,
    ShopList
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../commom/stylus/mixins.styl"
.msite
  width 100%
  .msite_nav
    bottom-border-1px(#e4e4e4)
    margin-top 45px
    .swiper-container
      width 100%
      height 100%
      .swiper-wrapper
        width 100%
        height 100%
        .swiper-slide
          display flex
          flex-wrap wrap
          .link_to_food
            width 25%
            .food_container
              width 100%
              text-align center
              img
                display inline-block
                width 50px
                height 50px
            span
                display block
                width 100%
                text-align center
                font-size 10px
                corlor #666
        .swiper-pagination
          >span.swiper-pagunation-bullet-active
            background-color #02a774
  .msite_shop_list
    top-border-1px(#e4e4e4)
    margin-top 10px
    background-color #fff
    .shop_header
      padding 10px 10px 0 10px
      .icon-xuanxiang
        margin-left 5px
        color #999
      .shop_header_title
        color #999
        font-size 14px
        line-height 20px

</style>
