class Hamburger {
    constructor(size, stuffing) {
        this.stuffings = {
            cheese: {
                price: 10,
                calories: 20,
            },
            salad: {
                price: 20,
                calories: 5,
            },
            fries: {
                price: 15,
                calories: 10,
            }
        }
        this.toppingsMenu = {
            spices: {
                price: 15,
                calories: 0,
            },
            mayonnaise: {
                price: 20,
                calories: 5,
            }
        }
        this.menu = {
            small: {
                price: 50,
                calories: 20,
            },
            big: {
                price: 100,
                calories: 40,
            }
        }
        if (!this.menu[size] || !this.stuffings[stuffing]) {
            throw new Error('Such Hamburger does not exist');
        }
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = []
    }

    addTopping(topping) {
        if (this.toppingsMenu[topping]) {
            this.toppings.push(this.toppingsMenu[topping])
            console.log(`${topping} was added`)
        } else {
            throw new Error(`Such topping does not exist, existing topping: ${JSON.stringify(this.toppingsMenu)}`);
        }
    }

    removeTopping(topping) {
        if (this.toppings.includes(this.toppingsMenu[topping])) {
            this.toppings.splice(this.toppings.indexOf(this.toppingsMenu[topping]), 1);
            console.log(`${topping} was removed`)
        } else {
            throw new Error(`You did not added such ${topping}, all your toppings: ${JSON.stringify(this.toppings)}`);
        }
    }

    getToppings() {
        console.log(`Your toppings: ${JSON.stringify(this.toppings)}`)
    }

    getSize() {
        console.log(`The size is ${this.size}`)
    }

    getStuffing() {
        console.log(`The stuffing is ${this.stuffing}`)
    }

    calculatePrice() {
        let totalPrice = this.menu[this.size].price + this.stuffings[this.stuffing].price;
        if (this.toppings) {
            totalPrice = this.toppings.reduce((acc, topping) => {
                return acc + topping.price;
            }, totalPrice)
        }
        console.log(`Price: ${totalPrice} Rub`)
    }

    calculateCalories() {
        let totalCal = this.menu[this.size].calories + this.stuffings[this.stuffing].calories;
        if (this.toppings) {
            totalCal = this.toppings.reduce((acc, topping) => {
                return acc + topping.calories;
            }, totalCal)
        }
        console.log(`Calories: ${totalCal}`)
    }
}

const hamburger = new Hamburger("small", "cheese")


