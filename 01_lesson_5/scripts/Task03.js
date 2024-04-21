'use strict';

{
    const getStringReverse  = (string) => {

        let stringReverse = [...string].reverse().join("");

        return stringReverse;
    }

    console.log(`Обратная строка: ${getStringReverse("Привет Мир")}`);
}