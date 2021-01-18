import axios from 'axios'

const MENU_URL = `${process.env.VUE_APP_API_BASE_URL}/api/menu`

export const MenuAPI = {
  async getMenuItems() {
    try {
      let response = await axios.get(MENU_URL)
      return response.data
    } catch (error) {
      return error
    }
  }
}
