export default {
    name: 'LocationCard',
    props: ['locations'],
    data() {
        return {
            selected: 1
        }
    },
    methods: {
        selectedCard(location) {
            this.selected = location.id
            this.$store.state.selectedLocation = location;
        }
    }
}