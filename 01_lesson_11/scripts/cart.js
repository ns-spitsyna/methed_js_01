'use strict';

{
    const cart = {
        items: [], // товары
        get totalPrice() {
            return this.calculateItemPrice(this.items);
        },
        count: 0, // количество товаров

        add(name, price, count = 1) { // добавить товар
            const item = {
                name: name,
                price: price,
                count: count,
            }
            this.items.push(item);

        this.increaseCount(this.count);
        },
        increaseCount(num) { // увеличить количество товаров
            num += this.count;
            return num;
        },
        calculateItemPrice(arr) { // посчитать общую стоимость товаров
            return arr.reduce((sum, item) => sum + item.price * item.count, 0);
        },
        clear() { // очистить корзину
           this.items = []
           this.totalPrice = 0;
           this.count = 0;
        },
        print() { // распечатать корзину
            console.log(JSON.stringify(this.items));
            console.log(`Общая стоимость корзины: ${this.totalPrice}`);
        },
    }

    cart.add('Мыло', 100, 3);
    cart.add('Пена', 200, 7);
    cart.add('Порошок', 900, 2);
    cart.print();
}