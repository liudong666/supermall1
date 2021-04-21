import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

//1、安装router
Vue.use(VueRouter)

//2、创建router
const routes = [
  {
    path: '/',
    redirect: '/home'  //重定向
  },
  {
    path: '/home', //组件地址
    component: Home //注册组件
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  routes, //挂载路由地址
  mode:'history' //可以进行来回跳
})

export default router
