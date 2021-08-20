<template>
  <b-modal v-model="show" hide-header>
    <template #default>
      <p>Вы уверены, что хотите выйти?</p>
    </template>
    <template #modal-footer="{ ok, cancel }">
      <b-button size="sm" variant="success" @click="ok()"> Да </b-button>
      <b-button size="sm" variant="danger" @click="cancel()"> Нет </b-button>
    </template>
  </b-modal>
</template>

<script>
// import { mapMutations, mapState } from 'vuex'
export default {
  props: ['show'],
  // computed: {
  //   ...mapState(['modal']),
  //   showModal() {
  //     return this.modal ? true : false
  //   },
  // },
  watch: {
    show() {
      if (this.show === true) {
        this.$bvModal.show('modal-scoped')
      }
    },
  },
  methods: {
    // ...mapMutations(['CLOSE_MODAL']),
    // closeModal() {
    //   this.$refs['my-modal'].hide()
    //   this.CLOSE_MODAL()
    // },
  },
}
</script>
