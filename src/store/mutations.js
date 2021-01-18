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
    setHeaderBackground(state, background) {
        state.headerBackground = background
    },
    setLocations(state, locations) {
        state.locations = [...locations.data]
        state.selectedLocation = state.locations[0]
    },
};