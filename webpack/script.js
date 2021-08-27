import {basket} from "./module_basket";
import {goods_item} from "./module_good_item";
import {goods_list} from "./module_goods_list";
import {search} from "./module_search";

const app = new Vue({
    el: '#app',
    components: {
        "basket": basket,
        "goods-item": goods_item,
        "goods-list": goods_list,
        "search": search
    },
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
        makePOSTRequest(url, data) {
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
                    }
                }

                xhr.open('POST', url, true);
                xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
                data = JSON.stringify(data)
                xhr.send(data);
            })
        },
        makeDELETERequest(url, data) {
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
                    }
                }

                xhr.open('DELETE', url, true);
                xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
                data = JSON.stringify(data)
                xhr.send(data);
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
            this.makePOSTRequest(`/addToCart`, item)
                .then((resp) => {
                    console.log(resp)
                })
        },
        removeItem(index) {
            this.makeDELETERequest(`/deleteFromCart`, this.cart[index])
                .then((resp) => {
                    console.log(resp)
                });
            this.totalPrice -= this.cart[index].price
            this.cart = [...this.cart.slice(0, index), ...this.cart.slice(index + 1)];
        }
    },
    mounted() {
        this.makeGETRequest(`/catalogData`)
            .then((goods) => {
                this.goods = JSON.parse(goods);
                this.filteredGoods = JSON.parse(goods);
            })
            .catch((error) => {
                console.log(error)
            });
    }
});