'use strict';

{
    const cart = {
        items: [], // товары
        totalPrice: 0, // общая стоимость корзины
        count: 0, // количество товаров
        getTotalPrice(){ // общая стоимость товаров
            return this.totalPrice;
        },
        add(name, price, count = 1) { // добавить товар
            const item = {
                name: name,
                price: price,
                count: count,
            }
            this.items.push(item);

        this.increaseCount(this.count);
        this.calculateItemPrice(this.items);
        },
        increaseCount(num) { // увеличить количество товаров
            num += this.count;
        },
        calculateItemPrice(arr) { // посчитать общую стоимость товаров
            this.totalPrice = arr.reduce((sum, item) => sum + item.price * item.count, 0);
            return this.totalPrice;
        },
        clear() { // очистить корзину
           this.items = [];
           this.totalPrice = 0;
           this.count = 0;
        },
        print() { // распечатать корзину
            console.log(JSON.stringify(this.items));
            console.log(`Общая стоимость корзины: ${this.getTotalPrice()}`);
        },
    }

    cart.add('Мыло', 100, 3);
    cart.add('Пена', 200, 7);
    cart.add('Порошок', 900, 2);
    cart.print();
}