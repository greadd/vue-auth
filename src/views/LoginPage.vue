<template>
  <b-card align="center" title="Авторизация"
    ><b-form class="p-3" @submit.prevent="onSubmit">
      <b-form-input
        v-model.trim="email"
        class="mb-2"
        type="email"
        placeholder="Введите email"
        required
      ></b-form-input>
      <b-form-input
        v-model="password"
        class="mb-2"
        type="password"
        placeholder="Введите пароль"
        required
      ></b-form-input>
      <b-button class="my-2 w-100" block type="submit" variant="primary"
        >Авторизоваться</b-button
      >
      <b-button
        class="my-2 w-100"
        to="/reset_password"
        size="sm"
        variant="outline-danger"
        >Сбросить пароль</b-button
      >
      <p style="margin: 0">Нет аккаунта?</p>
      <b-button
        class="mt-1 w-100"
        size="sm"
        variant="outline-primary"
        to="/sign_up"
        >Регистрация</b-button
      >
    </b-form>
    <div></div>
  </b-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'LoginPage',
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    ...mapActions(['loginUser']),
    onSubmit() {
      this.loginUser({ vm: this, email: this.email, password: this.password })
    },
  },
}
</script>
