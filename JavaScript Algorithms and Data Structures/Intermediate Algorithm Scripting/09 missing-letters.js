/*Пропущенные буквы
Найдите недостающую букву в переданном диапазоне букв и верните ее.
Если в диапазоне присутствуют все буквы, возвращается undefined.*/


//("abce") --> "d"
let str = "abcde"

function pairElement(str) {
    let arr = str.split('').map(x=>x.codePointAt(0))
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let newArr = [];
    for (let i = min; i <=max; i++) {
        newArr.push(i);
    }
    newArr = newArr.filter(x=>!arr.includes(x))
    if(newArr.length == 0) return undefined;
    else return String.fromCodePoint(newArr)
}

console.log(pairElement(str))
