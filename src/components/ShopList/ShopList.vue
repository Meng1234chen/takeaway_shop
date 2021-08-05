<template>
  <div class="shop_container">
        <ul class="shop_list" v-if="shops.length">
          <li class="shop_li border-1px" v-for="(shop, index) in shops" :key="index" @click="$router.push('/shop')">
            <a>
              <div class="shop_left">
                <img :src="shopimgs[index].icon">
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title">{{shop.name}}</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports" v-for="(support, index) in shop.supports" :key="index">{{support.icon_name}}</li>
                  </ul>
                </section>
                <section class="shop_rating_order">
                  <section class="shop_rating_order_left">
                    <Star :score="shop.rating" :size="24"></Star>
                    <div class="rating_section">
                      {{shop.rating}}
                    </div>
                    <div class="order_section">
                      月售{{shop.recent_order_num}}单
                    </div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_left">{{shop.delivery_mode.text}}</span>
                    <span class="delivery_style delivery_right">准时达</span>
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>￥{{shop.float_minimum_order_amount}}起送</span>
                    <span class="segmentation">/</span>
                    <span>配送费约￥{{shop.float_delivery_fee}}</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
        </ul>
        <ul v-else>
          <li v-for="item in 6" :key="item.id">
            <img src="./imgs/shop_back.svg" alt="back">
          </li>
        </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Star from '../Star/Star.vue'
export default {
  data () {
    return {
      baseImageUrl: '.imgs/shop/1.jpg'
    }
  },
  computed: {
    ...mapState(['shops', 'shopimgs'])
  },
  mounted () {
    this.$store.dispatch('getShopImgs')
  },
  components: {
    Star
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../commom/stylus/mixins.styl"
.shop_container
      margin-bottom 50px
      .shop_list
        .shop_li
          bottom-border-1px(#e4e4e4)
          width 100%
          >a
            clearFix()
            display block
            box-sizing border-box
            padding 15px 8px
            width 100%
            .shop_left
              float left
              box-sizing border-box
              padding-right 10px
              width 23%
              heigt 75px
              img
                display block
                width 100%
                height 100%
            .shop_right
              float right
              width 77%
              .shop_detail_header
                clearFix()
                width 100%
                .shop_title
                  float left
                  &::before
                    content '品牌'
                    display inline-block
                    font-size 11px
                    line-height 11px
                    color #333
                    background-color #ffd390
                    padding 2px 2px
                    border-radius 2px
                    margin-right 5px
                .shop_detail_ul
                  float right
                  margin-top 3px
                  .supports
                    float left
                    font-size 10px
                    color #999
                    border 1px solid #f1f1f1
                    padding 0 2px
                    border-radius 2px
              .shop_rating_order
                clearFix()
                width 100%
                margin-top 18px
                margin-bottom 8px
                .shop_rating_order_left
                  float left
                  color #ff9a0d
                  .rating_section
                    float left
                    font-size 10px
                    color #ff6000
                    margin-left 4px
                  .order_section
                    float left
                    font-size 10px
                    color #666
                    transform scale(.8)
                .shop_rating_order_right
                  float right
                  .delivery_style
                    display inline-block
                    transform scale(.7)
                    // transform-origin 35px 0
                    font-size 12px
                    padding 1px
                    border-radius 2px
                  .delivery_left
                    color #fff
                    border 1px solid #02a774
                    background-color #02a774
                    margin-right -15px
                  .delivery_right
                    color #02a774
                    border 1px solid #02a774
            .shop_distance
              clearFix()
              width 100%
              font-size 12px
              .shop_delivery_msg
                float left
                transform-origin 0
                transform scale(.9)
                width 200px
                color #666
              .segmentation
                color #ccc
</style>
