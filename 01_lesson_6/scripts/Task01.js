'use strict';

{
    const getTableDegrees = () => {
        for (let i = 1; i < 11; i++) {
            console.log("----------------------");
            for (let j = 1; j < 11; j++) {
                console.log(`${i} ^ ${j} = ${Math.pow(i,j)}`)
            }
        }
    }
    getTableDegrees();
}