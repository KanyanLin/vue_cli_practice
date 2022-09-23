<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <Form v-slot="{ errors, values, validate }" @submit="onSubmit">
      {{ errors }} {{ values }}

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <Field
          id="email"
          name="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors['email'],'is-valid':!errors['email'] && user.email != '' }"
          placeholder="請輸入 Email"
          rules="email|required"
          v-model="user.email"
        ></Field>
        <error-message name="email" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">姓名</label>
        <field
          id="name"
          name="姓名"
          type="text"
          class="form-control"
          placeholder="請輸入姓名"
          rules="required"
          :class="{ 'is-invalid': errors['姓名'] }"
          v-model="user.name"
        ></field>
        <error-message name="姓名" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="phone" class="form-label">電話</label>
        <field
          id="phone"
          name="電話"
          type="number"
          class="form-control"
          placeholder="請輸入電話"
          :rules="isPhone"
          :class="{ 'is-invalid': errors['電話'] }"
          v-model="user.phone"
        ></field>
        <error-message name="電話" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="region" class="form-label">地區</label>
        <field
          id="region"
          name="地區"
          class="form-control"
          :class="{ 'is-invalid': errors['地區'] }"
          rules="required"
          v-model="user.region"
          as="select"
        >
          <option value="">請選擇地區</option>
          <option value="台北市">台北市</option>
          <option value="高雄市">高雄市</option>
        </field>
        <error-message name="地區" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">地址</label>
        <field
          id="address"
          name="地址"
          type="text"
          class="form-control"
          placeholder="請輸入地址"
          rules="required"
          :class="{ 'is-invalid': errors['地址'] }"
          v-model="user.address"
        ></field>
        <error-message name="地址" class="invalid-feedback"></error-message>
      </div>

      <button
        class="btn me-2 btn-outline-primary"
        type="button"
        @click="validate"
      >
        驗證
      </button>
      <button class="btn btn-primary" type="submit">Submit</button>
    </Form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data () {
    return {
      user: {}
    }
  },
  methods: {
    onSubmit (values, { resetForm }) {
      console.log(values) // 送給 API 的資料值
      resetForm() // 把表單重置成預設值
    },
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    }
  },
  created () {
    // console.log(this)
  }
}
</script>
