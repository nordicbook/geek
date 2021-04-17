// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
let i = 0 


// while (i < 100) {
//     let flag = true;
//     let j = 0;
//     while (j < i) {
//         if (i % j === 0 && j !== 1) {
//             flag = false;
//             break;
//         }
//         j++;
//     }

//     if (flag) console.log(i);
//     i++;
// }


// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
let basket = [345, 22, 4500, 2200];

// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
function countBasketPrice(basket) {
    if (!Array.isArray(basket)) return false;

    let result = basket.reduce((gen, value) => {
        return gen + value;
    }, 0)

    return result;
}

console.log(countBasketPrice(basket));

// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
for (let i = 0; i < 10; console.log(i++)) {}

// 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
function pyramid(rows = 0) {
    if (isNaN(rows) && rows < 0) return false;

    let stars = '';
    for (let i = 1; i <= rows; i++) {
        stars += 'x';
        console.log(stars);
    }
}

pyramid('fsdf');