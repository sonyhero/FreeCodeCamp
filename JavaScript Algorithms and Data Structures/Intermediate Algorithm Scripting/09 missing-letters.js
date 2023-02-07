/*Пропущенные буквы
Найдите недостающую букву в переданном диапазоне букв и верните ее.
Если в диапазоне присутствуют все буквы, возвращается undefined.*/


//("abce") --> "d"
let str = "abce"

function pairElement(str) {
    let arr = str.split('').map(x=>x.codePointAt(0))
    arr
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let newArr = [];
    for (let i = min; i <=max; i++) {
        newArr.push(i);
    }
    return String.fromCodePoint(newArr)
}

console.log(pairElement(str))
