<template>
  <div class="profile">
    <HeadTop title="我的"></HeadTop>
    <section class="profile_number border-1px">
      <router-link to="/login" class="profile_link">
        <div class="profile_image">
          <i class="iconfont icon-icon-person"></i>
        </div>
        <div class="user_info">
          <p class="user_info_top">{{userInfo._id || '登录|注册'}}</p>
          <p>
            <span class="user_icon">
              <i class="iconfont icon-iconfontshouji"></i>
            </span>
            <span class="icon_mobile_user">暂无绑定手机号</span>
          </p>
        </div>
        <span class="arrow">
          <i class="iconfont icon-icon-jiantou1"></i>
        </span>
      </router-link>
    </section>
    <section class="profile_info_data border-1px">
      <ul class="info_data_list">
        <a href="javascript:;" class="info_data_link">
          <span class="info_data_top"><span>0.00</span>元</span>
          <span class="info_data_bottom">我的余额</span>
        </a>
        <a href="javascript:;" class="info_data_link">
          <span class="info_data_top"><span>0</span>个</span>
          <span class="info_data_bottom">我的优惠</span>
        </a>
        <a href="javascript:;" class="info_data_link">
          <span class="info_data_top"><span>0</span>分</span>
          <span class="info_data_bottom">我的积分</span>
        </a>
      </ul>
    </section>
    <section class="profile_my_order border-1px">
      <a href="javascript:;" class="my_order border-1px">
        <span>
          <i class="iconfont icon-iconorder"></i>
        </span>
        <div class="my_order_div">
          <span>我的订单</span>
          <span class="my_order_icon">
            <i class="iconfont icon-icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <a href="javascript:;" class="my_order border-1px">
        <span>
          <i class="iconfont icon-iconjifen "></i>
        </span>
        <div class="my_order_div">
          <span>积分商城</span>
          <span class="my_order_icon">
            <i class="iconfont icon-icon-jiantou1"></i>
          </span>
        </div>
      </a>
      <a href="javascript:;" class="my_order border-1px">
        <span>
          <i class="iconfont icon-iconvip"></i>
        </span>
        <div class="my_order_div">
          <span>叮咚外卖会员卡</span>
          <span class="my_order_icon">
            <i class="iconfont icon-icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </section>
    <section class="profile_my_order border-1px">
      <a href="javascript:;" class="my_order border-1px">
        <span>
          <i class="iconfont icon-icon-fuwu"></i>
        </span>
        <div class="my_order_div">
          <span>服务中心</span>
          <span class="my_order_icon">
            <i class="iconfont icon-icon-jiantou1"></i>
          </span>
        </div>
      </a>
    </section>
    <mt-button type="danger" style="width: 100%" v-show="userInfo._id" @click="logout">退出登录</mt-button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { MessageBox, Toast } from 'mint-ui'
import HeadTop from '../../components/HeadTop.vue'
export default {
  components: {
    HeadTop
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    logout () {
      MessageBox.confirm('确认退出吗？').then(
        action => { // 请求退出，发送异步请求
          this.$store.dispatch('logout')
          Toast('登出完成')
        },
        action => {
          console.log('点击了取消')
        }
      )
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../commom/stylus/mixins.styl"
.profile
  width 100%
  height 100%
  .profile_number
    top-border-1px(#e4e4e4)
    margin-top 45.5px
    .profile_link
      clearFix()
      position relative
      display block
      background-color #02a774
      padding 15px 8px
      .profile_image
        float left
        width 60px
        height 60px
        border-radius 50%
        overflow hidden
        vertical-align top
        // .iconfont:before
        //   content none
        .icon-icon-person
          background-color #e4e4e4
          font-size 60px
      .user_info
        float left
        margin-top 8px
        margin-left 15px
        p
          font-size 13px
          color #fff
          font-weight 700
          &.user_info_top
            padding-bottom 8px
          .user_icon
            display inline-block
            margin-right -8px
            .icon-iconfontshouji
              font-size 15px
              vertical-align center
          .icon_mobile_user
            font-size 12px
            color #fff
      .arrow
        width 12px
        height 12px
        position absolute
        top 40%
        right 15px
        .icon-icon-jiantou1
          font-size 5px
          color #fff
  .profile_info_data
    bottom-border-1px(#e4e4e4)
    width 100%
    background-color #fff
    overflow hidden
    .info_data_list
      clearFix()
      .info_data_link
        float left
        width 33%
        border-right 1px solid #f1f1f1
        text-align center
        .info_data_top
          display block
          width 100%
          font-size 12px
          color #333
          // padding 10px 5px
          span
            display inline-block
            font-size 30px
            color #f90
            font-weight 700
            line-weight 30px
        .info_data_bottom
          display inline-block
          font-size 12px
          color #666
          font-weight 400
          padding-bottom 10px
      .info_data_link:nth-of-type(2)
        .info_data_top
          span
            color #ff5f3e
      .info_data_link:nth-of-type(3)
        border 0
        .info_data_top
          span
            color #6ac20b
  .profile_my_order
    top-border-1px(#e4e4e4)
    margin-top 10px
    background-color #fff
    .my_order
      bottom-border-1px(#e4e4e4)
      display flex
      align-items center
      padding-left 15px
      >span
        display flex
        align-items center
        width 20px
        height 20px
        >.iconfont
          margin-left -10px
          font-size 20px
        .icon-iconorder
          color #02a774
        .icon-iconjifen
          color #ff5f3e
        .icon-iconvip
          color #f90
        .icon-icon-fuwu
          color #02a774
      .my_order_div
        display flex
        width 100%
        // justify-content space-between均匀排列每个元素
        justify-content space-between
        padding 18px 10px 18px 0
        font-size 14px
        color #333
        span
          display inline-block
        .my_order_icon
          float right
          width 10px
          height 10px
          .icon-icon-jiantou1
            font-size 10px
            color #bbb
</style>
