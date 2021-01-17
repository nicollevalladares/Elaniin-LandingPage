export const mutations = {
    setMenuItems(state, menu) {
        state.menu = [...menu.data]
    },
    setCategories(state, categories) {
        state.categories = [...categories.data]
    },
    setHeaderColor(state, color) {
        state.headerColor = color
    },
};