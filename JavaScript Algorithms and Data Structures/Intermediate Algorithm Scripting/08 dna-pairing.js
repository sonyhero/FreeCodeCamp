/*Сопряжение ДНК
Пары нитей ДНК состоят из пар нуклеобаз. Пары оснований представлены символами AT и CG, которые образуют строительные блоки двойной спирали ДНК.
В нити ДНК отсутствует элемент сопряжения. Напишите функцию для подбора недостающих пар оснований для предоставленной нити ДНК. 
Для каждого символа в предоставленной строке найдите символ пары оснований. Верните результаты в виде массива 2d.
Например, для входного GCG верните [["G", "C"], ["C", "G"], ["G", "C"]].
Символ и его пара попарно объединяются в массив, а все массивы группируются в один инкапсулирующий массив.*/

//("ATCGA") --> [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]
let str = "ATCGA"

function pairElement(str) {
    let pairs = {
        "A": ["A","T"],
        "T": ["T","A"],
        "C": ["C","G"],
        "G": ["G","C"],
    }
    return str.split('').map(x=>pairs[x])
  }
  
console.log( pairElement(str))
