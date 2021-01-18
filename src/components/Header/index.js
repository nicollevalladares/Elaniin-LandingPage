// Import mapState for global variables in state
import { mapState } from "vuex"

export default {
    name: 'Header',
    computed: {
        ...mapState(["headerColor", "headerBackground"]),
    }
}