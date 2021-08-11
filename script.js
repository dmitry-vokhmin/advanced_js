class BasketItem {
    constructor() {
    }

    delete() {

    }

    changeQuantity() {

    }
}

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
const searchButton = document.querySelector('.search-button')
const searchInput = document.querySelector('.goods-search')


function makeGETRequest(url) {
    return new Promise((resolve, reject) => {
        var xhr;

        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.responseText);
            } else if (xhr.readyState === 4 && xhr.status !== 200) {
                reject(xhr.status);
            }
        }

        xhr.open('GET', url, true);
        xhr.send();
    })
}

class Basket {
    constructor() {
        this.basket = [];
    }

    getInitialItems() {
        makeGETRequest(`${API_URL}/getBasket.json`)
            .then((goods) => {
                this.basket = JSON.parse(goods);
            })
            .then(() => {
                this.showBasket();
            })
            .catch((error) => {
                console.log(error)
            });
    }

    addItem(item) {
        this.basket.push(item);
    }

    deleteItem(item) {
        this.basket.splice(this.basket.indexOf(item), 1);
    }

    showBasket() {
        console.log(JSON.stringify(this.basket));
    }

    totalCost() {
        let cost = this.basket.reduce((acc, elem) => {
            return acc + elem.price
        }, 0)
        if (cost) {
            document.querySelector(".cart-button").innerText = `Total: ${cost}$ in Cart`
        } else {
            document.querySelector(".cart-button").innerText = "Cart"
        }
    }

    render() {

    }

}

class GoodsItem {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
    }

    render() {
        return `<div class="card">
            <img src="img/default_image_product.png" class="card-img-top" alt="product">
            <div class="card-body">
                <h5 class="card-title">${this.product_name}</h5>
                <p class="card-text">Price: ${this.price}$</p>
                <a class="btn btn-primary">Add to cart</a>
            </div>
      </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
        this.filteredGoods = [];
    }

    fetchGoods() {
        return makeGETRequest(`${API_URL}/catalogData.json`);
    }

    filterGoods(value) {
        const regexp = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(good =>
            regexp.test(good.product_name));
        this.render();
    }

    render() {
        let listHtml = '';
        this.filteredGoods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector(".goods-list").innerHTML = listHtml;
    }
}

searchButton.addEventListener('click', (e) => {
  const value = searchInput.value;
  list.filterGoods(value);
});

const list = new GoodsList();
const basket = new Basket();
list.fetchGoods()
    .then((goods) => {
        list.goods = JSON.parse(goods);
        list.filteredGoods = JSON.parse(goods);
        list.render();
    })
    .then(() => {
        basket.getInitialItems();
    })
    .catch((error) => {
        console.log(error)
    });
