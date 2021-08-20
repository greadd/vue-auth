<template>
  <b-card align="center" title="Регистрация">
    <b-form class="p-3" @submit.prevent="onSubmit">
      <b-form-group class="mb-2"
        ><b-form-input
          v-model="$v.email.$model"
          type="email"
          placeholder="Введите email"
          :state="validateState('email')"
          aria-describedby="input-1-live-feedback"
        ></b-form-input>
        <b-form-invalid-feedback :state="validateState('email')"
          >Введите корректный email</b-form-invalid-feedback
        ></b-form-group
      >
      <b-form-group class="mb-2"
        ><b-form-input
          v-model="$v.password.$model"
          type="password"
          placeholder="Введите пароль"
          :state="validateState('password')"
        ></b-form-input>
        <b-form-invalid-feedback :state="validateState('password')"
          >Пароль должен содержать не менее 8 символов, 1 заглавную букву, 1
          строчную букву и 1 цифру.</b-form-invalid-feedback
        ></b-form-group
      >

      <b-button class="my-2 w-100" block type="submit" variant="primary"
        >Зарегистрироваться</b-button
      >
      <p style="margin: 0">Есть аккаунт?</p>
      <b-button
        class="mt-1 w-50"
        size="sm"
        variant="outline-primary"
        to="/sign_in"
        >Авторизация</b-button
      >
    </b-form></b-card
  >
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'

export default {
  name: 'RegisterPage',
  mixins: [validationMixin],
  data() {
    return {
      email: '',
      password: '',
    }
  },
  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(8),
      uppercaseLetter: (string) => /[A-Z]|[А-Я]/.test(string),
      lowercaseLetter: (string) => /[a-z]|[а-я]/.test(string),
      digit: (string) => /\d/.test(string),
    },
  },
  methods: {
    ...mapActions(['registerUser']),
    onSubmit() {
      this.$v.$touch()
      if (this.$v.$anyError) {
        return
      }
      this.registerUser({ email: this.email, password: this.password })
    },
    validateState(name) {
      const { $dirty, $error } = this.$v[name]
      return $dirty ? !$error : null
    },
  },
}
</script>
