export class MenuPage extends HTMLElement {
    constructor() {
        super()
        this.root = this.attachShadow({ mode: 'open' })

        const styles = document.createElement("style")
        this.root.appendChild(styles)
        async function loadCSS() {
            const request = await fetch("/components/MenuPage.css")
            const css = await request.text();
            styles.textContent = css
        }
        loadCSS()
    }
    connectedCallback() {
        const template = document.getElementById('menu-page-template')
        const content = template.content.cloneNode(true);
        this.root.appendChild(content)

        window.addEventListener('appmenuchange', () => {
            this.render()
        })
    }
    render() {
        const menu = app.store.menu;
        console.log('menu', menu)
        this.root.querySelector("#menu").innerHTML = ""
        if(menu) {
            for(let category of menu) {
                const liCategory = document.createElement('li');
                liCategory.innerHTML = `
                <h3>${category.name}</h3>
                <ul class='category'></ul>
                `;
                this.root.querySelector('#menu').appendChild(liCategory)
                
                category.products.forEach(product => {
                    let item = document.createElement("product-item")
                    item.dataset.product = JSON.stringify(product)
                    liCategory.querySelector('ul').appendChild(item)
                })
            }
        } else {
            this.root.querySelector("#menu").innerHTML = "Loading..."
        }
    }
}

customElements.define("menu-page", MenuPage)