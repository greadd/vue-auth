<template>
  <b-card
    border-variant="success"
    :header="headerTitle"
    align="center"
    header-text-variant="success"
    header-border-variant="success"
    class="mt-4"
  >
    <b-card-text>
      <b-list-group v-for="(value, name) in user" :key="name">
        <b-list-group-item class="mb-1">
          <div class="d-flex">
            <h6 class="ml-3">{{ name }}:</h6>
            <h6>{{ value }}</h6>
          </div>
        </b-list-group-item>
      </b-list-group></b-card-text
    >
    <b-button class="w-100" variant="outline-danger" @click="logout"
      >Выйти</b-button
    >
    <AppModal :show="showModal" @cancel="showModal = false" />
  </b-card>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import AppModal from '@/components/AppModal'
export default {
  name: 'ProfilePage',
  components: {
    AppModal,
  },
  data() {
    return {
      headerTitle: 'Профиль',
      showModal: false,
    }
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    ...mapActions(['logoutUser']),
    logout() {
      this.showModal = true
      // this.logoutUser()
    },
  },
}
</script>
