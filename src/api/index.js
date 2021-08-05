/*
    与后台交互模块
    包含n个接口请求的模块
    接口请求函数返回值：promise对象
 */
import ajax from './ajax'
// const BASE_URL = 'http://localhost:4000'
// const BASE_URL = '/proxy'
// 1.根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax(`${process.env.API_HOST}/position/${geohash}`)

// 2.获取食品分类列表
export const reqFoodTypes = () => ajax(process.env.API_HOST + '/index_category')

// 3.根据经纬度获取商铺列表
export const reqShopList = (latitude, longitude) => ajax(process.env.API_HOST + '/shops', {latitude, longitude})

// 4.根据经纬度和关键字搜索商铺列表
export const reqSearchShops = (geohash, keyword) => ajax(process.env.API_HOST + '/search_shops', {geohash, keyword})

// 5.获取一次性验证码

// 6.账号密码登录
export const reqPwdLogin = ({name, pwd, captcha}) => ajax(process.env.API_HOST + '/login_pwd', {name, pwd, captcha}, 'POST')

// 7.发送短信验证码
export const reqSendCode = (phone) => ajax(process.env.API_HOST + '/sendcode', {phone})

// 8.手机号验证码登录
export const reqSmsLogin = (phone, code) => ajax(process.env.API_HOST + '/login_sms', {phone, code}, 'POST')

// 9.根据会话获取用户信息
export const reqUserInfo = () => ajax(process.env.API_HOST + '/userinfo')

// 10.用户登出
export const reqLogout = () => ajax(process.env.API_HOST + '/logout')

// 获取商家信息
export const reqShopInfo = () => ajax('/info')
// 获取商家评论数组
export const reqShopRatings = () => ajax('/ratings')
// 获取商品数组
export const reqShopGoods = () => ajax('/goods')

// 获取商家图片数组
export const reqShopImgs = () => ajax('/shopimg')
