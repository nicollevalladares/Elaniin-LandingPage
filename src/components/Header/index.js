import { mapState } from "vuex"

export default {
    name: 'Header',
    computed: {
        ...mapState(["headerColor"]),
    }
}