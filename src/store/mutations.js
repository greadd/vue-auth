export default {
  SET_USER(state, user) {
    state.user = user
    state.isLoggedIn = true
  },
  SET_TOKEN(state, token) {
    state.token = token
  },
  SET_ERROR(state, error) {
    state.error = error
  },
  LOGOUT_USER(state) {
    state.user = null
  },
  SHOW_MODAL(state, modal) {
    state.modal = modal
  },
  CLOSE_MODAL(state) {
    state.modal = null
  },
  SET_NOTIFICATION(state, { message, options }) {
    state.notification = {
      title: options.title,
      message,
      variant: options.variant,
    }
  },
  CLEAR_NOTIFICATION(state) {
    state.notification = null
  },
}
