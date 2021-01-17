import { mapState } from "vuex"

export default {
    name: 'ElaniinFilter',
    async mounted() {
        this.$store.dispatch("getCategories");
    },
    computed: {
        ...mapState(["categories"]),
    }
}