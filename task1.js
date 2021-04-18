// 1. Написать функцию, преобразующую число в объект. Передавая на вход число 
// от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих 
// свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны 
// получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение 
// с помощью console.log и вернуть пустой объект.

function NumberToObject(num = 0) {
    this.num = num;
    this['единицы'] = 0;
    this['десятки'] = 0;
    this['сотни'] = 0;

    this.isCorrectValue = function() {
        if (this.num > 999 || this.num < 0) {
            console.log('число должно быть в промежутке от 0 до 999');
            return false
        }
        return true;
    }
    this.convert = function() {
        if(!this.isCorrectValue()) return {};

        let strNum = String(this.num);
        if (strNum.length < 3) {
            for(let i = 1; i < 3; i++) {
                if (strNum[i] !== undefined) {
                    continue;
                }
                strNum = '0' + strNum;
            }
        }
        this['единицы'] = +strNum[2];
        this['десятки'] = +strNum[1];
        this['сотни'] = +strNum[0];

        return this;
    }
}

let obj = new NumberToObject(567);
// console.log(obj);
console.log(obj.convert());