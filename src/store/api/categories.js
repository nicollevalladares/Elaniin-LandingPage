import axios from 'axios'

const CATEGORIES_URL = `${process.env.VUE_APP_API_BASE_URL}/api/categories`

export const CategoriesAPI = {
  async getCategories() {
    try {
      let response = await axios.get(CATEGORIES_URL)
      return response.data
    } catch (error) {
      return error
    }
  }
}
