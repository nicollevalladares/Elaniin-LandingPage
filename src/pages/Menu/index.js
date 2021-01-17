import { mapState } from "vuex"
import MenuItem from '@/components/MenuItem/MenuItem.vue'
import ElaniinFilter from '@/components/ElaniinFilter/ElaniinFilter.vue'

export default {
    name: 'Menu',
    components: {
        MenuItem,
        ElaniinFilter
    },
    async mounted() {
        this.$store.dispatch("getMenuItems");
    },
    computed: {
        ...mapState(["menu"]),
    }
}