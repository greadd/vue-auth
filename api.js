import axios from 'axios'

const HTTP = axios.create({
  baseURL: 'http://dev.aicap.tech',
})

export default {
  registerUser(email, password) {
    return HTTP.post('/api/account/respondent/signup/', {
      email,
      password,
    }).then((res) => res.data)
  },
  verifyUser(code) {
    return HTTP.get(`/api/account/signup/verify/?code=${code}`).then(
      (res) => res.data
    )
  },
  resetPassword(email) {
    return HTTP.post('/api/account/password/reset/', email).then(
      (res) => res.data
    )
  },
  setNewPassword(code, password) {
    return HTTP.post('/api/account/password/reset/verified/', {
      code,
      password,
    }).then((res) => res.data)
  },
  getToken(email, password) {
    return HTTP.post('/api/account/token/', { email, password }).then(
      (res) => res.data
    )
  },
  refreshToken(refresh) {
    return HTTP.post('/api/account/token/refresh/', refresh).then(
      (res) => res.data
    )
  },
  verifyToken(token) {
    return HTTP.post('/api/account/token/verify/', token).then(
      (res) => res.data
    )
  },
  getUser(token) {
    return HTTP.get('/api/account/current_user/', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    }).then((res) => res.data)
  },
}
