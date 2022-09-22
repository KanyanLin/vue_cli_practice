<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link
      :to="{
        name: '新增頁面'
      }"
      >新增頁面</router-link
    >
  </nav>
  <router-view />
  {{ name }}
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
</style>
