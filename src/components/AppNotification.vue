<template>
  <b-toast
    v-if="!!notification"
    id="my-toast"
    :variant="notification.variant"
    solid
    :visible="!!notification"
    :title="notification.title"
    @hidden="closeNotification"
  >
    {{ notification.message }}
  </b-toast>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['notification']),
  },
  methods: {
    ...mapMutations(['CLEAR_NOTIFICATION']),
    closeNotification() {
      this.CLEAR_NOTIFICATION()
    },
  },
}
</script>
