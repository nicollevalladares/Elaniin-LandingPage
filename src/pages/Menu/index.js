import { mapState } from "vuex";
import MenuItem from '@/components/MenuItem/MenuItem.vue'

export default {
    name: 'Menu',
    components: {
        MenuItem
    },
    async mounted() {
        this.$store.dispatch("getMenuItems");
    },
    computed: {
        ...mapState(["menu"]),
    }
}