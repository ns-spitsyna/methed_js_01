'use strict';

{   const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
    const getAverageValue = (array) => {
        return Math.floor(array.reduce((res, item) => res + item, 0 ) / array.length);
    }

    console.log(getAverageValue(allСashbox));
}