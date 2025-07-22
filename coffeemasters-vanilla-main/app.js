import Store from './services/Store.js'
import Router from './services/Router.js';
import { loadData } from './services/Menu.js'

import { MenuPage } from './components/MenuPage.js';
import { OrderPage } from './components/OrderPage.js';
import { DetailsPage } from './components/DetailsPage.js';
import ProductItem from './components/ProductItem.js';

window.app = {}

app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
    loadData()
    app.router.init()
    console.log(' in the worddddd', app);
})

window.addEventListener('appcartchange', (event) => {
    const badge = document.getElementById('badge')
    console.log('00000', app.store.cart)
    const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0)
    console.log('qtyyyyyyy', qty)
    badge.textContent = qty
    badge.hidden = qty == 0

})