import "./assets/css/tailwind.css";
import './assets/css/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMoon, faSun, faDatabase} from '@fortawesome/free-solid-svg-icons'
// free brands svg icon
import { faPhp, faHtml5, faJsSquare, faCss3, faVuejs, faLaravel, faNode, faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faMoon, faSun, faPhp, faHtml5, faJsSquare, faCss3, faVuejs, faLaravel, faNode, faDatabase, faFacebook, faInstagram, faLinkedin)
import { MotionPlugin } from '@vueuse/motion'






  
const app = createApp(App)
app.use(createPinia()).use(router).use(MotionPlugin)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
