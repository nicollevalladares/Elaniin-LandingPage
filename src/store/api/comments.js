import axios from 'axios'

const COMMENTS_URL = `${process.env.VUE_APP_API_BASE_URL}/api/contact`

export const CommentsAPI = {
  async sendComments(name, email, message) {
    try {
      let response = await axios.post(COMMENTS_URL, { name, email, message })
      return response.data
    } catch (error) {
      return error
    }
  }
}
