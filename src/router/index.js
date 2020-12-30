/* 路由器对象 */
import Vue from 'vue'
import VueRouter from 'vue-router'

/*引入路由组件 */
import MSite from '../pages/MSite/msite.vue'
import Mine from '../pages/Mine/Mine.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/login.vue'

//声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
    // 配置所有路由 
    routes:[
        {
           path:'/msite',
           component:MSite,
           meta:{
               showFooter:true
           }
        },{
            path:'/mine',
            component:Mine,
            meta:{
                showFooter:true
            }
        },{
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
            }
        },{
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            }
        },{
            path:'/',
            redirect:'/msite' 
        },{
            path:'/login',
            component:Login
        }
    ]
})