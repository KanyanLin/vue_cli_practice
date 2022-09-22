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
      </div>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
