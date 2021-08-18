const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

Vue.component("basket", {
    props: ["isVisible", "cart", "totalPrice"],
    template: `
            <div class="shopping_cart" v-show="isVisible">
                <div class="table_container">
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Item</th>
                            <th scope="col">Price</th>
                            <th scope="col">Delete</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, index) in cart">
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ item.product_name }}</td>
                            <td>{{ item.price }}$</td>
                            <td>
                                <button class="del_btn btn-primary" @click="$emit('remove-item', index)">Delete</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <p v-show="totalPrice">Total price: {{ totalPrice }}$</p>
            </div>
    `
})

Vue.component("search", {
    props: ['searchLine'],
    template: `
        <div>
            <input type="text" class="goods-search" v-bind:value="searchLine" v-on:input="$emit('input', $event.target.value)">
            <button class="search-button cart-button btn btn-outline-success me-2" type="button"
                    @click="$emit('filter-goods')">Искать
            </button>
        </div>
    `
})

Vue.component("goods-list", {
    props: ['goods', 'addFunk'],
    template: `
       <div class="goods-list">
        <goods-item v-for="good in goods" :good="good" @add-item="addFunk"></goods-item>
       </div>
    `
});

Vue.component("goods-item", {
    props: ["good"],
    template: `
        <div class="card">
            <img src="../img/default_image_product.png" class="card-img-top" alt="product">
            <div class="card-body">
                <h5 class="card-title">{{ good.product_name }}</h5>
                <p class="card-text">Price: {{ good.price }}</p>
                <a class="btn btn-primary" @click="$emit('add-item', good)">Add to cart</a>
            </div>
        </div>
    `
});

const app = new Vue({
    el: '#app',
    data: {
        cart: [],
        goods: [],
        filteredGoods: [],
        searchLine: '',
        totalPrice: 0,
        isVisibleCart: false
    },
    methods: {
        makeGETRequest(url) {
            return new Promise((resolve, reject) => {
                let xhr;

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
        },
        FilteredGoods() {
            const regexp = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.goods.filter(good =>
                regexp.test(good.product_name));
        },
        addItem(item) {
            this.cart.push(item)
            this.totalPrice += item.price
        },
        removeItem(index) {
            this.totalPrice -= this.cart[index].price
            this.cart = [...this.cart.slice(0, index), ...this.cart.slice(index + 1)];
        }
    },
    mounted() {
        this.makeGETRequest(`${API_URL}/catalogData.json`)
            .then((goods) => {
                this.goods = JSON.parse(goods);
                this.filteredGoods = JSON.parse(goods);
            })
            .catch((error) => {
                console.log(error)
            });
    }
});