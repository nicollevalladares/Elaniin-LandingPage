import Adds from "../../components/Adds/Adds.vue"
import About from "../../components/About/About.vue"

export default {
    name: 'Home',
    data(){
        return{
            homeData: {
                description: "Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables.",
                link: 'Encuéntranos'
            }
        }
    },
    components: {
        Adds,
        About
    }
}