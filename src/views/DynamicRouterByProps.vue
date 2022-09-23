<template>
  <h1>ID：{{ seed }}</h1>
  <div>{{ jsonData }}</div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id'],
  data () {
    return {
      seed: '',
      jsonData: {}
    }
  },
  created () {
    console.log('props', this.id)
    this.seed = this.id
    axios
      .get(`https://randomuser.me/api/?seed=${this.seed}`)
      .then((res) => {
        // console.log(res)
        this.jsonData = res.data.results[0]
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
