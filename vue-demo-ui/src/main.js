// packages
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

// style packages
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

// components
import App from './App.vue';
import HomeContent from './components/Home/HomeContent.vue';
import OurWorkContent from './components/OurWork/OurWorkContent.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [ 
        { path: '/', redirect: '/home'},
        { path: '/home', component: HomeContent},
        { path: '/ourwork', component: OurWorkContent},
    ]
});

const app = createApp(App);

app.use(router);

app.mount('#app');
