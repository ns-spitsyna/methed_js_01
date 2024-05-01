'use strict';

{
    const getArrayRandomNumbers = (num, n, m, type) => {
        const arrayRandomNumbers = [];
        const max = Math.max(n,m);
        const min = Math.min(n,m);

        while (arrayRandomNumbers.length < num) {
            const numRandom = Math.floor(Math.random() * (max - min)) + min;

            if (type === 'odd') {
                if (numRandom % 2) {
                    arrayRandomNumbers.push(numRandom);
                }

            } else if (type === 'even') {
                if (!(numRandom % 2)) {
                    arrayRandomNumbers.push(numRandom);
                }
            } else {
                arrayRandomNumbers.push(numRandom);
            }
        }

        return arrayRandomNumbers;
    }

    console.log(getArrayRandomNumbers(5, 20, -20,'even'));
}