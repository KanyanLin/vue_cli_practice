import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  // 專案 URL 為 http://localhost:8080/dist/#/
  // path: '/' 對應 Home.vue 元件
  // 因此，<router-view> 會顯示 Home.vue 元件的內容
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // 專案 URL 為 http://localhost:8080/dist/#/about
  // path: '/about' 對應 About.vue 元件
  // 因此，<router-view> 會顯示 About.vue 元件的內容
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  // 專案 URL 為 http://localhost:8080/dist/#/newpage
  {
    path: '/newpage',
    name: '新增頁面',
    component: () => import('../views/NewPage.vue'),
    children: [
      // 專案 URL 為 http://localhost:8080/dist/#/newpage/a
      // path: '/newpage/a' 對應 a.vue 元件
      // newpage 畫面顯示 a 的子頁面內容
      {
        path: 'a',
        name: 'a',
        component: () => import('../views/ComponentA.vue')
      },
      {
        path: 'b',
        component: () => import('../views/ComponentB.vue')
      },
      // 動態路由
      // 專案 URL 為 http://localhost:8080/dist/#/newpage/dynamicRouter/1
      // 畫面顯示 1 號使用者的資訊
      {
        path: 'dynamicRouter/:id',
        component: () => import('../views/DynamicRouter.vue')
      },
      {
        path: 'dynamicRouterByProps/:id',
        component: () => import('../views/DynamicRouterByProps.vue'),
        // props: () => ({
        //   id: '610a4b32e603a46f'
        // }),
        props: (route) => {
          // console.log('route:', route)
          return {
            id: route.params.id
          }
        }
      },
      {
        path: 'routerNavigation',
        component: () => import('../views/RouterNavigation.vue')
      },
      {
        path: 'namedView',
        component: () => import('../views/NamedView.vue'),
        children: [
          {
            path: 'c2a',
            components: {
              left: () => import('../views/ComponentC.vue'),
              right: () => import('../views/ComponentA.vue')
            }
          },
          {
            path: 'a2b',
            components: {
              left: () => import('../views/ComponentA.vue'),
              right: () => import('../views/ComponentB.vue')
            }
          }
        ]
      }
    ]
  },
  // 404 頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
  },
  // 重新導向到正確的頁面
  {
    path: '/newPage/:pathMatch(.*)*',
    redirect: {
      name: 'home'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // https://router.vuejs.org/zh/api/#linkactiveclass
  linkActiveClass: 'active', // 路由啟用的CSS樣式
  // https://router.vuejs.org/zh/api/#scrollbehavior
  scrollBehavior (to, from, savedPosition) {
    // `to` 和 `from` 都是路由地址
    // `savedPosition` 可以为空，如果没有的话。
    // console.log('to', to)
    // console.log('from', from)
    // console.log('savedPosition', savedPosition)
    if (to.fullPath.match('newpage')) {
      return {
        top: 0
      }
    }
    return {}
  }
})

export default router
