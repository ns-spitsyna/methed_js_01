'use strict';

{
    const getArrayLeapYears = (n, m) => {
        const arrayRandomNumbers = [];
        const max = Math.max(n,m);
        const min = Math.min(n,m);

        for (let year = min; year < max; year++) {
            if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
                arrayRandomNumbers.push(year);
            }
        }
        return arrayRandomNumbers;
    }

    console.log(getArrayLeapYears(1957, 2003));
}