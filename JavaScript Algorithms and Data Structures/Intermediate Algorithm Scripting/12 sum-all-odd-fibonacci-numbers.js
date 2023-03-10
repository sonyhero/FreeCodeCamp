/*
Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

/*
Если задано целое положительное число num, 
верните сумму всех нечетных чисел Фибоначчи, которые меньше или равны num.
Первые два числа в последовательности Фибоначчи - 1 и 1.
Каждое последующее число в последовательности является суммой двух предыдущих чисел. 
Первые шесть чисел последовательности Фибоначчи - 1, 1, 2, 3, 5 и 8.
Например, sumFibs(10) должно вернуть 10, потому что все нечетные числа Фибоначчи, меньшие или равные 10, равны 1, 1, 3 и 5.
*/

function sumFibs(n) {
    let a = 1;
    let b = 1;
    let arr = [a, b];
    let c;
    for (let i = 3; i <= n; i++) {
        c = a + b;
        arr.push(c);
        a = b;
        b = c;  
    }
        return arr.filter(x=>x%2==1).filter(x=> x<=n).reduce((a,b)=>a+b)
}

console.log(sumFibs(4))