import Store from './services/Store.js'
import Router from './services/Router.js';
import { loadData } from './services/Menu.js'

import { MenuPage } from './components/MenuPage.js';
import { OrderPage } from './components/OrderPage.js';
import { DetailsPage } from './components/DetailsPage.js';

window.app = {}

app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
    loadData()
    app.router.init()
    console.log(' in the worddddd', app);
})