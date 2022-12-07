<template>
  <h1>ID：{{ seed }}</h1>
  <!-- <div>{{ jsonData }}</div> -->
  <div class="card" v-if="jsonData.picture">
    <img :src="jsonData.picture.large" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">
        {{ jsonData.name.first }} {{ jsonData.name.last }}
      </h5>
      <p class="card-text">Gender: {{ jsonData.gender }}</p>
      <p class="card-text">
        City: {{ jsonData.location.city }} {{ jsonData.location.country }}
      </p>
      <p class="card-text">Phone: {{ jsonData.phone }}</p>
      <p class="card-text">Email: {{ jsonData.email }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      seed: '',
      jsonData: {}
    }
  },
  created () {
    // console.log(this.$route.params)
    this.seed = this.$route.params.id
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
