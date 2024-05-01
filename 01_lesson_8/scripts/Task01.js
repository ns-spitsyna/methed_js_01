'use strict';

{
    const getArrayRandomNumbers = (num) => {
        const arraytRandomNumbers = [];

        for (let i = 0; i < num - 1; i++) {
            arraytRandomNumbers[i] = Math.floor(Math.random() * 100) + 1;
            arraytRandomNumbers.push(arraytRandomNumbers[i]);
        }
        return arraytRandomNumbers;
    }

    console.log(getArrayRandomNumbers(5));
}