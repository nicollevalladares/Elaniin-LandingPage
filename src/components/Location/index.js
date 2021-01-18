// Import mapState for global variables in state
import { mapState } from "vuex";

// Import components
import LocationCard from "@/components/LocationCard/LocationCard.vue";

export default {
  name: "Location",
  components: {
    LocationCard,
  },
  methods: {
    onTabChange(locationType) {
      this.$store.dispatch("getLocations", { locationType });
    },
  },
  async created() {
    this.$store.dispatch("getLocations", { locationType: "takeaway" });
  },
  computed: {
    ...mapState(["locations", "selectedLocation"]),
  },
};
