const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault()
                const url = event.target.getAttribute('href')
                Router.go(url)
            })
        })
        //Check the initial URL
        Router.go(location.pathname)
        window.addEventListener("popstate", event => {
            Router.go(event.state.route, false)
        })

    },
    go: (route, addToHistory = true) => {
        // Implement navigation logic here
        console.log('going to', route)

        if (addToHistory) {
            history.pushState({ route }, '', route)
        }
        let pageElement = null;
        console.log('=======')
        switch(route) {
            case "/":
                console.log('herer')
                pageElement = document.createElement("menu-page");
                pageElement.textContent = "Menu"
                break;
            case "/order":
                console.log('444444444')

                pageElement = document.createElement("order-page");
                pageElement.textContent = "Your Order"
                break;
            default:
                console.log('kajdshkjadh')
                if(route.startsWith("/product-")) {
                    console.log('-------')
                    pageElement = document.createElement("details-page")
                    pageElement.textContent = "Details"
                    const paramID = route.substring(route.lastIndexOf("-")+1)
                    pageElement.dataset.productId = paramID
                }
        }
        if(pageElement) {

            const cache = document.querySelector("main");
            cache.innerHTML = ""
            document.querySelector("main").appendChild(pageElement)
            window.scrollX = 0
            window.scrollY = 0
        }
    }
}

export default Router