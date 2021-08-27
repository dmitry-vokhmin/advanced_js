export let goods_item = {
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
}