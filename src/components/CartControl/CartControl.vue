<template>
  <div class="cartcontrol">
      <transition name="move">
        <span class="iconfont icon-removecircleoutline" v-if="food.count" @click.stop="updateFoodCount(false)"></span>
      </transition>
      <span class="cart-count" v-if="food.count">{{food.count}}</span>
      <span class="iconfont icon-add-circle-outline" @click.stop="updateFoodCount(true)"></span>
  </div>
</template>

<script>
export default {
  props: {
    food: Object
  },
  methods: {
    updateFoodCount (isAdd) {
      this.$store.dispatch('updateFoodCount', {isAdd, food: this.food})
    }
  }
}
</script>

// <style lang="stylus" rel="stylesheet/stylus">
@import "../../commom/stylus/mixins.styl"
.cartcontrol
   display inline-block
  .icon-removecircleoutline
    margin 6px
    line-height 24px
    font-size 24px
    color #02a774
    &.move-enter-active, &.move-leave-active
      transition all 0.3s
    &.move-enter, &.move-leave-to
      opacity 0
      transform translateX(50px) rotate(180deg)
  .cart-count
    line-height 24px
    margin 0px
    font-size 20px
    color #000
  .icon-add-circle-outline
    margin 6px
    line-height: 24px
    font-size 24px
    color #02a774
</style>
