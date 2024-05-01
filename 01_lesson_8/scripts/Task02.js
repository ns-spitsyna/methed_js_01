'use strict';

{
    const getArrayRandomNumbers = (num, n, m) => {
        const arraytRandomNumbers = [];
        const max = Math.max(n,m);
        const min = Math.min(n,m);

        for (let i = 0; i < num - 1; i++) {
            arraytRandomNumbers[i] = Math.floor(Math.random() * (max - min)) + min;
            arraytRandomNumbers.push(arraytRandomNumbers[i]);
        }
        return arraytRandomNumbers;
    }

    console.log(getArrayRandomNumbers(5, -10, 5));
}