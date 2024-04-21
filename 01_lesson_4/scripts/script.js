'use strict';
{
    let productName = "Мыло",
        productAmount = 5,
        productСategory = "Гигиена",
        productPrice = 30,
        sum;

    sum = productAmount * productPrice;
}
{
    let productName = "Кружка",
        productAmount = 10,
        productСategory = "Посуда",
        productPrice = 50,
        sum;

    sum = productAmount * productPrice;
}
{

    const productName = prompt("Введите наименование товара",'');
    const productAmount = prompt("Введите количество товара",'');
    const productСategory = prompt("Введите категорию товара",'');
    const productPrice = prompt("Введите цену товара",'');
    const sum = productAmount * productPrice;
    const errorMessage = "Вы ввели некорректные данные";


    if(typeof productAmount === "number"){
        console.log(`Тип данных "Количество товара": ${typeof productAmount}`)
    }
    else {
        console.log(`Тип данных "Количество товара": ${errorMessage}`)
    }

    if(typeof productPrice === "number"){
        console.log(`Тип данных "Цена товара": ${typeof productPrice}`)
    }
    else {
        console.log(`Тип данных "Цена товара": ${errorMessage}`)
    }
}