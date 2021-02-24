import axios from 'axios'

export default {
    getPosts: function () {
        return axios.get('/api/Post')
      },
    getItems: function () {
      return axios.get('/api/Item')
    }
}