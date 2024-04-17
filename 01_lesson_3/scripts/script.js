'use strict';
{
    let productName = "Мыло",
        productAmount = 5,
        productСategory = "Гигиена",
        productPrice = 30,
        sum;

    sum = productAmount * productPrice;
    console.log(productName);
    console.log(`Общая сумма товара: ${sum}`);
}
{
    let productName = "Кружка",
        productAmount = 10,
        productСategory = "Посуда",
        productPrice = 50,
        sum;

    sum = productAmount * productPrice;
    console.log(productName);
    console.log(`Общая сумма товара: ${sum}`);
}
{

    const productName = prompt("Введите наименование товара",'');
    const productAmount = +prompt("Введите количество товара",'');
    const productСategory = prompt("Введите категорию товара",'');
    const productPrice = +prompt("Введите цену товара",'');

    let sum = productAmount * productPrice;

    console.log(`Тип данных "Наименование товара": ${typeof productName}`);
    console.log(`Тип данных "Количество товара": ${typeof productAmount}`);
    console.log(`Тип данных "Категория товара": ${typeof productСategory}`);
    console.log(`Тип данных "Цена товара": ${typeof productPrice}`);

    console.log(`На складе ${productAmount} единицы товара "${productName}" на сумму ${sum} деревянных`);
}