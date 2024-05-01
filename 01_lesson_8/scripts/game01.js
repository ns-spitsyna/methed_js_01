'use strict';

{
    const game = () => {
        const numberBot = Math.floor(Math.random() * 100) + 1;
        let numberUser = prompt("Введите число: ", "");

        while (Number(numberUser) !== numberBot) {
            if (Number(numberUser) > numberBot) {
                numberUser = prompt("Меньше! Введите число: ", "");
            }

            if (Number(numberUser) < numberBot && numberUser !== null) {
                numberUser = prompt("Больше! Введите число: ", "");
            }

            if (Number(numberUser) === numberBot && numberUser !== null) {
                numberUser = alert("Правильно!");
                return;
            }

            if (isNaN(numberUser) && numberUser !== null) {
                numberUser = prompt("Вы ввели не число. Введите число: ", "");
            }

            if (numberUser === null) return;
        }
    }

    game();
}