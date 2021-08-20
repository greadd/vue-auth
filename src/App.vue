<template>
  <div id="app">
    <b-container>
      <b-row class="mt-5" align-h="center">
        <b-col cols="4" align-self="center">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
    <AppNotification />
  </div>
</template>
<script>
import AppNotification from '@/components/AppNotification'
export default {
  components: {
    AppNotification,
  },
}
</script>
