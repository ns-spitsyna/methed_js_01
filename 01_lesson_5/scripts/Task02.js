'use strict';

{
    const getStringModified  = (string) => {

        let stringModified = string.trimStart(),
            firstSymbol = stringModified.toUpperCase().charAt(0),
            otherSymbols = stringModified.toLowerCase().slice(1);

        return firstSymbol + otherSymbols;
    }

    console.log(`Стоимость покупки в рублях: ${getStringModified("привет Мир")}`);
}