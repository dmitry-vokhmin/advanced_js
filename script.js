class Basket {
    constructor() {
    }

    totalCost() {

    }

    order() {

    }

    render() {

    }

}


class BasketItem {
    constructor() {
    }

    delete() {

    }

    changeQuantity() {

    }
}


class GoodsItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }

    render() {
        return `<div class="card">
            <img src="img/default_image_product.png" class="card-img-top" alt="product">
            <div class="card-body">
                <h5 class="card-title">${this.title}</h5>
                <p class="card-text">Price: ${this.price}$</p>
                <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
      </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            {title: 'Shirt', price: 150},
            {title: 'Socks', price: 50},
            {title: 'Jacket', price: 350},
            {title: 'Shoes', price: 250},
        ];
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector(".goods-list").innerHTML = listHtml;
    }

    totalCost() {
        let cost = this.goods.reduce((acc, elem) => {
            return acc + elem.price
        }, 0)
        if (cost) {
            document.querySelector(".cart-button").innerText = `Total: ${cost}$ in Cart`
        }
        else {
            document.querySelector(".cart-button").innerText = "Cart"
        }
    }
}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.totalCost();