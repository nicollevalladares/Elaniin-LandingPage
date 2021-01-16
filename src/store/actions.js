import { MenuAPI } from "./api/menu"

export const actions = {
    async getMenuItems(context) {
        let menu = await MenuAPI.getMenuItems()
        context.commit('setMenuItems', menu)
    },
};