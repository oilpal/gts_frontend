import axios from './axios'
import VueCookies from 'vue-cookies'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export async function userLogin (iusername, ipassword, iremember) {
  try {
    const token = await axios.post('/api/auth/signin', {
      username: iusername,
      password: ipassword
    })
    console.log(token.data)
    VueCookies.set('token', token.data.token, '600s')
    VueCookies.set('refresh_token', token.data.refresh_token, '30d')
    axios.defaults.headers.refresh_token = VueCookies.get('refresh_token')
    if (iremember === 'Y') {
      VueCookies.set('rememberId', iusername, '30d')
      VueCookies.set('remember', iremember, '30d')
    } else {
      VueCookies.remove('rememberId')
      VueCookies.remove('remember')
    }
    return token
  } catch (err) {
    return err
  }
}

export async function refreshToken () {
  try {
    const token = await axios.post('/api/auth/refresh')
    if (token.data.token === null) {
      return null
    } else {
      VueCookies.set('token', token.data.token, '600s')
      return token
    }
  } catch (err) {
    return err
  }
}

export async function userLogout () {
  try {
    this.$cookies.remove('token')
    this.$cookies.remove('refresh_token')
    return true
  } catch (err) {
    return err
  }
}
