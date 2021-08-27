export let goods_list = {
    props: ['goods', 'addFunk'],
    template: `
       <div class="goods-list">
        <goods-item v-for="good in goods" :good="good" @add-item="addFunk"></goods-item>
       </div>
    `
}