//TODO: 1. Диалоговое окно при отправке формы // TODO: 1. Сделать валидацию
пароля 2.
<template>
  <b-card align="center" title="Подтверждение почты">
    <b-form class="p-3" @submit.prevent="submitForm">
      <b-form-input
        v-model="code"
        class="mb-3"
        placeholder="Введите код подтверждения"
      ></b-form-input>
      <b-button class="w-100" type="submit" variant="primary"
        >Подтвердить</b-button
      >
    </b-form></b-card
  >
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'Verify',
  data() {
    return {
      code: null,
    }
  },
  methods: {
    ...mapActions(['verifyUser']),
    submitForm() {
      this.verifyUser(this.code)
    },
  },
}
</script>
