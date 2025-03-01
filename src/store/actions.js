import { MenuAPI } from './api/menu'
import { CategoriesAPI } from './api/categories'
import { LocationsAPI } from './api/locations'
import { CommentsAPI } from './api/comments'

export const actions = {
  async getMenuItems(context) {
    let menu = await MenuAPI.getMenuItems()
    context.commit('setMenuItems', menu)
  },
  async getCategories(context) {
    let categories = await CategoriesAPI.getCategories()
    context.commit('setCategories', categories)
  },
  async changeHeaderColor(context, { color }) {
    context.commit('setHeaderColor', color)
  },
  async changeHeaderBackground(context, { background }) {
    context.commit('setHeaderBackground', background)
  },
  async getLocations(context, { locationType }) {
    let locations = await LocationsAPI.getLocations(locationType)
    context.commit('setLocations', locations)
  },
  async sendComments(context, { name, email, message }) {
    let comments = await CommentsAPI.sendComments(name, email, message)
    console.log(comments)
  }
}
