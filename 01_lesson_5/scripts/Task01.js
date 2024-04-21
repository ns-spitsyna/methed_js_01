'use strict';

{
    const oneDollarInRubles = 64;
    const oneEuroInRubles = oneDollarInRubles * 1.2;

    const getAmountInRubles = (euro) => {
        let sumEuro = euro;

        return sumEuro * oneEuroInRubles;
    }

    console.log(`Стоимость покупки в рублях: ${getAmountInRubles(500)}`);
}