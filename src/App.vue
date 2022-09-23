<template>
  <nav class="navbar navbar-expand-lg bg-light fixed-top">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Home</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/newpage">新增頁面</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container" style="height: 300vh">
    <router-view />
    {{ name }}
  </div>
  <router-link to="/newPage/routerNavigation"
    >/newPage/routerNavigation</router-link
  >
</template>

<script>
export default {
  data () {
    return {
      name: process.env.VUE_APP_NAME
    }
  }
}
</script>

<style lang="scss">
@import 'bootstrap';

body {
  padding-top: 80px;
}
</style>
