// Import components
import Adds from "@/components/Adds/Adds.vue";
import About from "@/components/About/About.vue";
import Location from "@/components/Location/Location.vue";
import Testimonials from "@/components/Testimonials/Testimonials.vue";
import Comments from "@/components/Comments/Comments.vue";

// Import images from assets
import Hamburger from "@/assets/AddsAssets/Hamburger.png";

export default {
  name: "Home",
  data() {
    return {
      data: {
        description:
          "Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables.",
        link: "Encuéntranos",
        url: Hamburger,
        firstText: "Un nuevo sabor esta en",
        underlineText: "la ciudad",
        backgroundColor: "white",
        titleColor: "black",
      },
    };
  },
  components: {
    Adds,
    About,
    Location,
    Testimonials,
    Comments,
  },
  async mounted() {
    this.$store.dispatch("changeHeaderColor", { color: "black" });
    this.$store.dispatch("changeHeaderBackground", { background: "white" });
  },
};
