import Vue from 'vue'
import VueRouter from 'vue-router'
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function push(location) {
   return originalReplace.call(this, location).catch(err => err)
}
const Home = () => import('views/home/home')
const Category = () => import('views/category/category')
const Cart = () => import('views/cart/cart')
const Profile = () => import('views/profile/profile')
Vue.use(VueRouter)

const routes = [
    {
        path:'',
        redirect:'/home'
    },
    {
        path:'/home',
        component:Home,
        meta:{
            title:'首页'
        }
    },
    {
        path:'/category',
        component:Category,
        meta:{
            title:'分类'
        }
    },
    {
        path:'/cart',
        component:Cart,
        meta:{
            title:'购物车'
        }
    },
    {
        path:'/profile',
        component:Profile,
        meta:{
            title:'我的'
        }
    }
]
const router = new VueRouter({
    routes,
    mode:'history'
})
export default router