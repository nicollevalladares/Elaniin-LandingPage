import { MenuAPI } from "./api/menu"
import { CategoriesAPI } from "./api/categories"

export const actions = {
    async getMenuItems(context) {
        let menu = await MenuAPI.getMenuItems()
        context.commit('setMenuItems', menu)
    },
    async getCategories(context) {
        let categories = await CategoriesAPI.getCategories()
        context.commit('setCategories', categories)
    },
};