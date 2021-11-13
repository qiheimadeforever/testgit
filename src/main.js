import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import http from 'axios'//引入axios
import '@/assets/scss/reset.scss'//全局样式
import {
    Button, Select, Radio, Container, Aside, Header, Main,
    Menu, MenuItem, MenuItemGroup, Submenu, Dropdown, DropdownItem,
    DropdownMenu, Row, Col, Card, Table, TableColumn, Tag, Breadcrumb, BreadcrumbItem
} from
    'element-ui';

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Select.name, Select);
Vue.use(Radio.name, Radio);
Vue.use(Container)
Vue.use(Aside)
Vue.use(Header)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card).use(Table).use(TableColumn).use(Tag).use(Breadcrumb).use(BreadcrumbItem)
Vue.prototype.$http = http

if (process.env.NODE_ENV === 'development') require('@/api/mock')
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')