const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

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
        showCart() {
            this.isVisibleCart = !this.isVisibleCart;
        },
        addItem: function (index) {
            this.cart.push(this.filteredGoods[index])
            this.totalPrice += this.filteredGoods[index].price
        },
        removeItem: function (index) {
            this.totalPrice -= this.cart[index].price
            this.cart.splice(index, 1);
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