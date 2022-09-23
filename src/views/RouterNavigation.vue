<template>
  <div>
    <button type="button" class="btn btn-primary" @click="getRoute">
      getRoute
    </button>
    <hr />
    <button type="button" class="btn btn-primary" @click="push">push</button>
    <button type="button" class="btn btn-primary" @click="replace">
      replace
    </button>
    <button type="button" class="btn btn-primary" @click="go">Go</button>
    <hr />
    <button type="button" class="btn btn-primary" @click="addRoute">
      新增路由
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    // 包含歷史紀錄
    push () {
      //   this.$router.push('/newpage/dynamicRouterByProps/610a4b32e603a46f')
      this.$router.push({
        name: 'about'
      })
    },
    // 沒有歷史紀錄
    replace () {
      this.$router.replace({
        name: 'about'
      })
    },
    // 操作歷史紀錄
    go () {
      this.$router.go(-1)
    },
    // 取得常用參數
    getRoute () {
      // 取得路由的屬性
      //  https://next.router.vuejs.org/zh/api/#routelocationnormalized
      // 範例：this.$route.fullPath (目前網址)
      console.log('$route', this.$route)

      // 呼叫路由的方法
      //  https://next.router.vuejs.org/zh/api/#router-%E6%96%B9%E6%B3%95
      // 範例：this.$router.go(-1) (回到前一頁)
      console.log('$router', this.$router)
    },
    // 延伸介紹
    addRoute () {
      this.$router.addRoute({
        path: '/newAbout',
        name: 'newAbout',
        component: () => import('./AboutView.vue')
      })
    }
  }
}
</script>
