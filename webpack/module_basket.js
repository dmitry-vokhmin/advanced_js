export let basket = {
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
}


