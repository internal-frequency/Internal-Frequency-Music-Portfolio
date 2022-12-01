import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'
import MainPage from './Views/MainPage.vue'
import EPKPage from './Views/EPKPage.vue'
import MerchPage from './Views/MerchPage.vue'

const router = createRouter({
    history: createWebHashHistory(),

    routes: [
        {path: '/', name: 'MainPage', component: MainPage},
        {path: '/EPK', name: 'EPK', component: EPKPage},
        {path: '/Merch', name: 'MerchPage', component: MerchPage}
    ]
})
createApp(App)
.use(router)
.mount('#app')
