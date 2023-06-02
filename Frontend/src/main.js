import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'font-awesome-animation/css/font-awesome-animation.min.css'
import {addIcons} from "@/icons";

createApp(App).mount('#app')

addIcons();

const app = createApp(App);

app.component("es-icon", FontAwesomeIcon)


app.mount('#app');
