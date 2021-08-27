export let search ={
    props: ['searchLine'],
    template: `
        <div>
            <input type="text" class="goods-search" v-bind:value="searchLine" v-on:input="$emit('input', $event.target.value)">
            <button class="search-button cart-button btn btn-outline-success me-2" type="button"
                    @click="$emit('filter-goods')">Искать
            </button>
        </div>
    `
}