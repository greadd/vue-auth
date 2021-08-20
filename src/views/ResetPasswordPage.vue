<template>
  <b-card align="center" title="Сброс пароля">
    <b-form class="p-3" @submit.prevent="onSubmit">
      <b-form-input
        v-model="email"
        class="mb-3"
        placeholder="Введите адрес электронной почты"
      ></b-form-input>
      <b-button class="w-100" type="submit" variant="primary"
        >Сбросить</b-button
      >
    </b-form></b-card
  >
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      email: '',
    }
  },
  methods: {
    ...mapActions(['resetPassword']),
    onSubmit() {
      this.resetPassword({ email: this.email })
    },
  },
}
</script>
