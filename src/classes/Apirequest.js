import Axios from 'axios'

class ApiRequest {
  /**
   * Create a new APIRequest instance.
   * @param {object} data
   */
  constructor (data = false) {
    this.Axios = Axios
    this.url = 'http://localhost/bit703/module6/api/v1/'
    this.data = data
    this.store = false

    if (data) {
      for (const field in data) {
        this.data[field] = data[field]
      }
    }
    this.headers = {
      'Content-Type': { 'Content-Type': 'application/json' }
      // 'Content-Type': { 'Content-Type': 'application/x-www-form-urlencoded' }
    }
  }

  /**
   * Send a GET request to the given URL.
   * @param {string} url
  */

  /**
   * Adds a Vuex store to our class
   */
  addStore (store) {
    this.store = store
    return this.store
  }

  addAuth () {
    this.headers.Authorization = `Bearer  ${this.store.getters.getToken}`
  }

  /**
   * Fetch all relevant data for the APIRequest.
   */
  addData () {
    const data = new FormData()
    for (const property in this.data) {
      data.append(property, this[property])
    }
    this.data = data
  }

  /**
   * Reset the APIRequest fields.
   */
  reset () {
    for (const field in this.data) {
      this.data[field] = ''
    }
  }

  /**
   * Send a GET request to the given URL.
   * @param {string} endpoint
   */
  get (endpoint, auth = false) {
    return this.submit('get', endpoint)
  }

  /**
   * Send a POST request to the given URL.
   * @param {string} endpoint
   */
  post (endpoint, auth = false) {
    this.addData()
    this.headers.Authorization = `Bearer  ${this.store.getters.getToken}`
    return this.submit('post', endpoint)
  }

  /**
   * Submit the APIRequest.
   *
   * @param {string} requestType
   * @param {string} endpoint
   */
  submit (requestType, endpoint) {
    // console.log(this.headers)
    // this.withCredentials = true
    return new Promise((resolve, reject) => {
      this.Axios({
        credentials: 'include',
        method: requestType,
        url: this.url + endpoint,
        header: this.headers,
        data: this.data
      })
        .then((response) => {
          console.log(response.headers.authorization)
          if (response.headers.authorization) {
            this.storeToken(response.headers.authorization)
            // console.log('response included auth header')
          } else {
            // console.log('response did not include auth header')
          }
          resolve(response.data)
        })
        .catch((error) => {
          reject(error.message)
        })
    })
  }

  storeToken (bearerHeader) {
    const parts = bearerHeader.split(' ')
    if (parts.length === 2) {
      const scheme = parts[0]
      const token = parts[1]
      if (/^Bearer$/i.test(scheme)) {
        this.store.dispatch('login', token)
      }
    }
  }
}

export default ApiRequest
