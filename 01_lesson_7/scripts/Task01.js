'use strict';

{
    const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
    const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

    const filter = (fullArray, failedArray) => {
        return fullArray.filter(item => {
            return !failedArray.includes(item);
        });
    }

    console.log(filter(allStudents, failedStudents));
}