<template>
  <div>
    <div class="goods">
      <div class="menu-wrapper" ref="menuWrapper">
        <ul>
          <!--current-->
          <li class="menu-item" v-for="(good, index) in goods" :key="index" :class="{current: index === currentIndex}" @click="clickMenuItem(index)">
            <span class="text bottom-border-1px">
              <img class="icon" :src="good.icon" v-if="good.icon">
              {{good.name}}
            </span>
          </li>
        </ul>
      </div>
      <div class="foods-wrapper" ref="foodsWrapper">
        <ul ref="foodsUl">
          <li class="food-list-hook" v-for="(good, index) in goods" :key="index">
            <h1 class="title">{{good.name}}</h1>
            <ul>
              <li class="food-item bottom-border-1px" v-for="(food, index) in good.foods" :key="index" @click="showFood(food)">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                  <div class="cartcontrol-wrapper">
                    <CartControl :food="food"/>
                    <!-- <div>CartControl :food="food"</div> -->
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ShopCart/>
    </div>
    <Food :food="food" ref="food"/>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
import CartControl from '../../../components/CartControl/CartControl.vue'
import Food from '../../../components/Food/Food.vue'
import ShopCart from '../../../components/ShopCart/ShopCart.vue'
export default {
  data () {
    return {
      scrollY: 0, // 右侧滑动的Y轴坐标（滑动过程中实时变化）
      tops: [], // 所有右侧分类li的top组成的数组（列表第一次显示后不再变化）
      food: {} // 需要显示的food
    }
  },
  mounted () {
    this.$store.dispatch('getShopGoods', () => {
      this.$nextTick(() => {
        this._initScroll()
        this._initTops()
      })
    })
  },
  computed: {
    ...mapState(['goods']),
    // 计算得到当前分类的下标
    currentIndex () { // 初始和相关数据发生变化
      // 得到条件数据
      const {scrollY, tops} = this
      // 根据条件数据计算产生一个结果
      const index = tops.findIndex((top, index) => {
        // scrollY >= top且scrollY小于下一个top
        return scrollY >= top && scrollY < tops[index + 1]
      })
      // 返回结果
      return index
    }
  },
  methods: {
    // 初始化滚动条
    _initScroll () {
      // 列表显示之后创建
      /* eslint-disable no-new */
      new BScroll('.menu-wrapper', {
        click: true
      })
      this.foodsScroll = new BScroll('.foods-wrapper', {
        probeType: 2, // 因为惯性滑动不会触发
        click: true
      })
      // 给右侧列表绑定scroll监听
      this.foodsScroll.on('scroll', ({x, y}) => {
        // 收集scrollY
        this.scrollY = Math.abs(y)
      })
      // 给右侧列表绑定scroll结束的监听
      this.foodsScroll.on('scrollEnd', ({x, y}) => {
        console.log('scrollEnd', x, y)
        this.scrollY = Math.abs(y)
      })
    },
    // 初始化tops
    _initTops () {
      // 1.初始化tops
      const tops = []
      let top = 0
      tops.push(top)
      // 2. 收集
      // 找到所有分类的li
      const lis = this.$refs.foodsUl.getElementsByClassName('food-list-hook')
      Array.prototype.slice.call(lis).forEach(li => {
        top += li.clientHeight
        tops.push(top)
      })
      // 3.更新数据
      this.tops = tops
      console.log(this.tops)
    },
    clickMenuItem (index) {
      // console.log(index)
      // 使右侧列表滑动到指定的位置
      // 1.得到目标位置的scrollY（y）
      const y = -this.tops[index]
      // 2.立即更新scrollY（更新点击的分类项成为当前分类）
      this.scrollY = -y
      // 3.平滑滚动右侧列表
      this.foodsScroll.scrollTo(0, y, 300)
    },
    // 显示点击的food
    showFood (food) {
      // 设置food
      this.food = food
      // 显示food组件(调用子组件food.vue中的方法)
      this.$refs.food.toggleShow()
    }
  },
  components: {
    CartControl,
    Food,
    ShopCart
  }
}
</script>

// <style lang="stylus" rel="stylesheet/stylus">
@import "../../../commom/stylus/mixins.styl"
.goods
  position relative
  width 100%
  height 414px
  background #fff
  top 0
  bottom 46px
  overflow hidden
  .menu-wrapper
    position absolute
    float left
    top 0
    left 0
    width 22%
    height 414px
    box-sizing border-box
    background #f3f5f7
    .menu-item
      display table
      height 54px
      width 56px
      padding 0 12px
      line-height 14px
      &.current
        background #fff
        color #02a774
        font-weight 700
        .text
          border none
      .text
        display table-cell
        width 56px
        vertical-align middle
        font-size 12px
        bottom-border-1px(#d3d3d3)
        .icon
          display inline-block
          vertical-align top
          width 12px
          height 12px
          mergin-right 2px
          background-size 12px 12px
          background-repeat no-repeat
  .foods-wrapper
    position absolute
    float right
    top 0
    right 0
    width 77%
    height 414px
    box-sizing border-box
    padding-left 14px
    .food-list-hook
      width 100%
      height 100%
      .title
        height 26px
        line-height 26px
        border-left 2px solid #d9dde1
        font-size 12px
        color #93999f
        background #f3f5f7
      .food-item
        margin 18px
        padding-bottom 18px
        bottom-border-1px(#d3d3d3)
        &:last-child
          border none
          margin-bottom 0
        .icon
          display inline-block
          margin-right 10px
        .content
          display inline-block
          .name
            margin 2px 0 8px 0
            height 14px
            line-height 14px
            font-size 14px
            color #7111b
          .desc, .extra
            display inline-block
            height 10px
            line-height 10px
            font-size 10px
            color #93999f
          .desc
            line-height 12px
            margin-bottom 8px
          .extra
            .count
              margin-right 12px
          .price
            font-weight 700
            line-height 24px
            .now
              margin-right 8px
              font-size 14px
              color #f01414
            .old
              text-decoration line-through
              font-size 10px
              color #93999f
          .cartcontrol-wrapper
            position absolute
            right 0
            bottom 24px
            line-height 12px
</style>
