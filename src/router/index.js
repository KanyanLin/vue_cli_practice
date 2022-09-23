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
        path: '',
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
        props: (route) => {
          console.log('route:', route)
          return {
            id: route.params.id
          }
        }
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
