<template>
  <div class="row">
    <div class="col-4">
      <div class="list-group">
        <router-link
          :to="{
            name: 'a'
          }"
          class="list-group-item list-group-item-action"
        >
          A頁面
        </router-link>
        <router-link
          to="/newpage/b"
          class="list-group-item list-group-item-action"
        >
          B頁面
        </router-link>
        <router-link
          to="/newpage/namedView/c2a"
          class="list-group-item list-group-item-action"
        >
        命名路由 c2a
        </router-link>
        <router-link
          to="/newpage/namedView/a2b"
          class="list-group-item list-group-item-action"
        >
        命名路由 a2b
        </router-link>
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
