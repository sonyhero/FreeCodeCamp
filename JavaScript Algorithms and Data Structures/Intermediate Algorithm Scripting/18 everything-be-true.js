/*
Проверьте, является ли предикат (второй аргумент) истинным для всех элементов коллекции (первый аргумент).

Другими словами, вам дана коллекция объектов в виде массива. Предикат pre будет свойством объекта, и вам нужно вернуть true, если его значение истинно. В противном случае верните false.

В JavaScript истинностные значения - это значения, которые переводятся в true при оценке в булевом контексте.

Помните, что для доступа к свойствам объекта можно использовать либо точечную нотацию, либо нотацию [].*/

function truthCheck(collection, pre) {
    let count = 0
    let arr = collection.map(x=>x=x[pre]);
    for (let i = 0; i < arr.length; i++) {
        if (Boolean(arr[i]) == Boolean(arr[arr.length-1])) {
            count++
        }
    }
  return (count == arr.length ) ? true : false
}



console.log(truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "isBot"
  )
);
