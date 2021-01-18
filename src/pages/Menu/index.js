// Import mapState for global variables in state
import { mapState } from 'vuex'

// Import components
import MenuItem from '@/components/MenuItem/MenuItem.vue'
import Adds from '@/components/Adds/Adds.vue'
import ElaniinFilter from '@/components/ElaniinFilter/ElaniinFilter.vue'

// Import images from assets
import Hamburger from '@/assets/MenuAssets/Hamburger.png'

export default {
  name: 'Menu',
  data() {
    return {
      data: {
        url: Hamburger,
        firstText: 'Cada sabor es una nueva',
        underlineText: 'experiencia',
        backgroundColor: 'black',
        titleColor: 'white'
      }
    }
  },
  components: {
    MenuItem,
    Adds,
    ElaniinFilter
  },
  async mounted() {
    this.$store.dispatch('changeHeaderColor', { color: 'white' })
    this.$store.dispatch('changeHeaderBackground', { background: 'black' })
    this.$store.dispatch('getMenuItems')
  },
  computed: {
    ...mapState(['menu'])
  }
}
