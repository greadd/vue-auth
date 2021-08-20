<template>
  <b-card align="center" title="Задайте новый пароль">
    <b-form class="p-3" @submit.prevent="onSubmit">
      <b-form-input
        v-model="code"
        class="mb-3"
        placeholder="Код для сброса пароля"
      ></b-form-input>
      <b-form-input
        v-model="newPassword"
        class="mb-3"
        placeholder="Введите новый пароль"
      ></b-form-input>
      <b-button class="w-100" type="submit" variant="primary"
        >Создать пароль</b-button
      >
    </b-form></b-card
  >
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      code: '',
      newPassword: '',
    }
  },
  methods: {
    ...mapActions(['setNewPassword']),
    onSubmit() {
      this.setNewPassword({ code: this.code, password: this.newPassword })
    },
  },
}
</script>
