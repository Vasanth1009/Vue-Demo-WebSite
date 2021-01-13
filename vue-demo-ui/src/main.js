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
import Error404 from './components/PageNotFound/Error404.vue';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(savedPosition) {
    if(savedPosition) {
      return savedPosition;
    }else {
      return { left: 0, top: 0 };
    }
  },
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: HomeContent },
    { path: '/ourwork', component: OurWorkContent },
    { path: '/:notFound(.*)', component: Error404 },
  ],
});

const app = createApp(App);

app.use(router);

app.mount('#app');
