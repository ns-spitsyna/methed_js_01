'use strict';

{
    const calculate  = (total = 0, number = 0, codePromotional = "") => {
        let resultSum = total;

        if(number > 10) {
            resultSum = resultSum - (resultSum * 0.03);
        }
        if(resultSum > 30000) {
            resultSum = resultSum - ((resultSum - 30000) * 0.15);
        }
        if(codePromotional === "METHED") {
            resultSum = resultSum - (resultSum * 0.1);
        }
        if(codePromotional === "G3H2Z1") {
            resultSum = resultSum > 2000 ? resultSum - 500 : resultSum;
        }

        return resultSum;
    }

    console.log(`Стоимость товаров с учетом всех акций и скидок: ${calculate(1000, 11, "METHED")} руб.`);
}