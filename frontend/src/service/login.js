import axios from './axios'
import VueCookies from 'vue-cookies'

export async function testLogin (iusername, ipassword) {
  try {
    const token = await axios.post('/api/auth/signin', {
      username: iusername,
      password: ipassword
    })
    console.log(token.data)
    VueCookies.set('token', token.data.token, '600s')
    VueCookies.set('refresh_token', token.data.refresh_token, '30d')
    axios.defaults.headers.refresh_token = VueCookies.get('refresh_token')
    return token
  } catch (err) {
    return err
  }
}

export async function refreshToken () {
  try {
    const token = await axios.post('/api/auth/refresh')
    VueCookies.set('token', token.data.data.token, '60s')
    return token
  } catch (err) {
    return err
  }
}
