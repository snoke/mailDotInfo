/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';
const $ = require('jquery');
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
library.add(faEnvelope)
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)
import { faLock } from '@fortawesome/free-solid-svg-icons'
library.add(faLock)
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
library.add(faMailBulk)
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons'
library.add(faShieldAlt)
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
library.add(faDollarSign)
import { faComment } from '@fortawesome/free-solid-svg-icons'
library.add(faComment)

Vue.component('font-awesome-icon', FontAwesomeIcon)
import VueRouter from 'vue-router'
import App from './components/App.vue';
import Auth from './components/Auth.vue';
import Register from './components/Auth/Register.vue';
import Login from './components/Auth/Login.vue';

Vue.use(VueRouter)
const router = new VueRouter({  
    mode:'history',
    routes: [
        { 
            name: "Auth",
            path: '/Auth', 
            component:  Auth,
            props: true,
            children: [
                { 
                        name: "Register",
                        path: '/Auth/Register', 
                        component:  Register,
                        props: true,
                },
                { 
                        name: "Login",
                        path: '/Auth/Login', 
                        component:  Login,
                        props: true,
                },
            ]
        },
    ]
});

new Vue({
    el: '#main-wrapper', 
    router: router,
    render: h => h(App)
});