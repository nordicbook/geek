// 1. 
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);              // 2 превиксный оператор сначала прибавит 1 и затем вернет значение переменной
// d = b++; alert(d);              // 1 постфиксный оператор сначала вернет значение переменной, затем прибавит к нему единицу
// c = (2+ ++a); alert(c);         // 5 В переменной а изначально значение 2, прибавляем к нему единицу и складываем с двойкой, получаем 5
// d = (2+ b++); alert(d);         // 4 В случае с постфиксным оператором произойдет тоже самое, что и описано на строке 4, 
//                                 //вначале мы получим значение b=2 , затем прибавим двойку, положим в d
// alert(a);                       // 3 в этой строке и строке ниже уже выводятся идентичные значения, так как префиксные и постфиксные
// alert(b);                       // 3 операторы уже отработали выше. Их разницу можно почувствовать только в тех местах, где они используются


// 2. Чему будет равен x в примере ниже?
var a = 2;
var x = 1 + (a *= 2);

// x будет равен 5, так как мы вначале a * 2, получаем 4, перезаписываем a, затем 1 складываем с 4. 

3. 

let e = 15;
let v = 7;

function baseCount(arg1, arg2) {
    if (arg1 >= 0 && arg2 >= 0) {
        return arg1 - arg2;
    } else if (arg1 < 0 && arg2 < 0) {
        return arg1 * arg2;
    } else {
        return arg1 + arg2;
    }
}

console.log(baseCount(e, v));

// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15
let num = 7; 

function switchNumberIntoText(num) {
    $result = '';
    switch (num) {
        case 1:
            console.log('один');
        case 2:
            console.log('два');
        case 3:
            console.log('три');
        case 4:
            console.log('четыре');
        case 5:
            console.log('пять');
        case 6:
            console.log('шесть');
        case 7:
            console.log('семь');
        case 8:
            console.log('восемь');
        case 9:
            console.log('девять');
        case 10:
            console.log('десять');
        case 11:
            console.log('одиннадцать');
        case 12:
            console.log('двенадцать');
        case 13:
            console.log('тринадцать');
        case 14:
            console.log('четырнадцать');
        case 15:
            console.log('пятнадцать');
            break;
    }
}

switchNumberIntoText(num);

// 5.Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
function multiply(arg1, arg2) {
    if (!arg1 && !arg2) {
        return false;   
    }
    return arg1 * arg2;
}

function divide(arg1, arg2) {
    if (!arg1 && !arg2) {
        return false;   
    }
    return arg1 / arg2;
}

function plus(arg1, arg2) {
    if (!arg1 && !arg2) {
        return false;   
    }
    return arg1 + arg2;
}

function minus(arg1, arg2) {
    if (!arg1 && !arg2) {
        return false;   
    }
    return arg1 - arg2;
}


// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.

function mathOperation(arg1, arg2, operation) {
    let result = 0;

    if (operation === '+') {
        result = plus(arg1, arg2);
    } else if (operation === '-') {
        result = minus(arg1, arg2);
    } else if (operation === '/') {
        result = divide(arg1, arg2);
    } else {
        result = multiply(arg1, arg2);
    }

    return result;
}

console.log(mathOperation(5, 7, '*'));

// 7. *Сравнить null и 0. Попробуйте объяснить результат. 
null == 0; // false 
null === 0; // false 

// 0 - это значение, хоть и нулевое
// null - это "нет значения"
// соответственно эти два параметра не могут быть равны


// 8. *С помощью рекурсии организовать функцию возведения числа в степень. 
// Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow) {
    let result = val;
    pow--;
    if (pow > 0) result *= power(val,pow);

    return result
}

console.log(power(3, 4));