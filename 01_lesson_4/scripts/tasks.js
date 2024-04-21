'use strict';
{
    const rain = Math.round(Math.random());

    rain === 1 ? console.log("Пошёл дождь. Возьмите зонт!") : console.log("Дождя нет!");
}
{
    const numberPointsMathematics = +prompt("Введите кол-во баллов по математике",'');
    const numberPointsRussianLanguage = +prompt("Введите кол-во баллов по русскому языку",'');
    const numberPointsComputerScience = +prompt("Введите кол-во баллов по информатике",'');
    const sum = numberPointsMathematics + numberPointsRussianLanguage + numberPointsComputerScience;

    sum >= 265 ? alert("Поздравляю, вы поступили на бюджет!") : alert("Вы не поступили на бюджет!");
}
{
    const amountMoney = +prompt("Какую сумму хотели бы снять?",'');

    amountMoney % 100 === 0 ? alert("Возьмите деньги") : alert("Необходимо ввести сумму кратную 100") ;
}