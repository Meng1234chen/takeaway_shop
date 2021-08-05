/*
    状态对象:
    1.分析有哪些状态需要管理
 */
export default {
  latitude: 30.750117,
  longtitude: 103.931309,
  address: {}, // 地址相关对象
  types: [], // 食品分类
  shops: [], // 商家列表
  userInfo: '', // 用户信息
  goods: [], // 商品列表
  ratings: [], // 商家评价列表
  info: {}, // 商家信息
  cartFoods: [], // 购物车中的foods列表
  searchshops: [], // 搜索得到的商铺列表
  shopimgs: [] // 商家图片数组
}
