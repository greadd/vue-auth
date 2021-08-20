import api from '../../api'
import router from '@/router'
export default {
  registerUser({ commit, dispatch }, { email, password }) {
    api
      .registerUser(email, password)
      .then((response) => {
        router.push({ name: 'VerifyPage' })
        dispatch('setNotification', {
          message: response.data,
          type: 'other',
        })
        return Promise.resolve(response)
      })
      .catch((error) => {
        dispatch('setNotification', {
          message: error.response.data,
          type: 'error',
        })
        commit('SET_ERROR', error.response.data)
        return Promise.reject(error)
      })
  },
  verifyUser({ commit, dispatch }, code) {
    api
      .verifyUser(code)
      .then((response) => {
        commit('VERIFY_USER')
        //TODO: MODAL WINDOW WITH OK BUTTON TO REDIRECT
        router.push({ name: 'LoginPage' })
        return Promise.resolve(response)
      })
      .catch((error) => {
        dispatch('setNotification', {
          message: error.response.data,
          type: 'error',
        })
        commit('SET_ERROR', error.response.data)
        return Promise.reject(error)
      })
  },
  loginUser({ commit, dispatch }, { email, password }) {
    api
      .getToken(email, password)
      .then((token) => {
        localStorage.setItem('token', JSON.stringify(token))
        commit('SET_TOKEN', token)
        api.getUser(token.access).then((user) => {
          localStorage.setItem('user', JSON.stringify(user))
          commit('SET_USER', user)
          router.push({ name: 'ProfilePage' })
          dispatch('setNotification', {
            message: 'Вы успешно авторизовались!',
            type: 'success',
          })

          return Promise.resolve(user)
        })
      })
      .catch((error) => {
        commit('SET_ERROR', error.response.data)
        dispatch('setNotification', {
          message: error.response.data,
          type: 'error',
        })
        return Promise.reject(error)
      })
  },
  logoutUser({ commit, dispatch }) {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    commit('LOGOUT_USER')
    router.push({ name: 'LoginPage' })
    dispatch('setNotification', {
      message: 'Вы вышли из профиля',
      type: 'success',
    })
  },
  resetPassword({ commit, dispatch }, email) {
    api
      .resetPassword(email)
      .then((response) => {
        dispatch('setNotification', {
          message:
            'Код для смены пароля отправлен на ваш адрес ' + response.email,
          type: 'other',
        })
        router.push({ name: 'SetNewPasswordPage' })
        return Promise.resolve(response.data)
      })
      .catch((error) => {
        dispatch('setNotification', {
          message: error.response.data,
          type: 'error',
        })
        commit('SET_ERROR', error.response.data)
        return Promise.reject(error)
      })
  },
  setNewPassword({ commit, dispatch }, { code, password }) {
    api
      .setNewPassword(code, password)
      .then((response) => {
        router.push({ name: 'LoginPage' })
        dispatch('setNotification', {
          message: 'Пароль изменён',
          type: 'success',
        })
        return Promise.response(response)
      })
      .catch((error) => {
        console.log(error, error.response)
        dispatch('setNotification', {
          message: error.response.data,
          type: 'error',
        })
        commit('SET_ERROR', error.response.data)
        return Promise.reject(error)
      })
  },
  setNotification({ commit }, { message, type }) {
    let options
    type === 'error'
      ? (options = {
          title: 'Ошибка',
          variant: 'danger',
        })
      : type === 'success'
      ? (options = {
          title: 'Успех',
          variant: 'success',
        })
      : (options = {
          title: 'Внимание',
          variant: 'warning',
        })

    commit('SET_NOTIFICATION', { message, options })
  },
}
