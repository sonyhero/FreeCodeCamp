/*Выполните поиск и замену в предложении, используя предоставленные аргументы, и верните новое предложение.
Первый аргумент - предложение для поиска и замены.
Второй аргумент - слово, которое вы будете заменять (перед).
Третий аргумент - то, чем вы будете заменять второй аргумент (после).
Примечание: При замене сохраняйте регистр первого символа исходного слова. 
Например, если вы хотите заменить слово Book на слово dog, оно должно быть заменено как Dog*/

//("He is Sleeping on the couch", "Sleeping", "sitting") --> "He is Sitting on the couch"
let str = "He is Sleeping on the couch";
let before = "Sleeping";
let after = "sitting";
//console.log(after[0].toUpperCase() + after.slice(1, after.length))

function myReplace(str, before, after) {
    if (before[0].toUpperCase() == before[0] ) {
        return after[0].toUpperCase() + after.slice(1, after.length)
    } else return after[0].toLowerCase() + after.slice(1, after.length)
}
console.log(myReplace (str, before, after))
