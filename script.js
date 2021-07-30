const goods = [
    {title: 'Shirt', price: 150},
    {title: 'Socks', price: 50},
    {title: 'Jacket', price: 350},
    {title: 'Shoes', price: 250},
];

const renderGoodsItem = (title = "New_product", price = 0) =>
    `<div class="card" style="width: 18rem;">
            <img src="img/default_image_product.png" class="card-img-top" alt="product">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">Price: ${price}$</p>
                <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
      </div>`;

const renderGoodsList = (list) => document.querySelector('.goods-list').innerHTML =
    list.map(item => renderGoodsItem(item.title, item.price)).join("");

renderGoodsList(goods)
