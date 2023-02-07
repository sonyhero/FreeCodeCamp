//let str = "algorithm" //algorithmway
let str = "schwartz" //artzschway

/*function translatePigLatin(str) {
  let vowels = "aeiouy";
  for (let i = 0; i < vowels.length; i++) {
    if (str[0] == vowels[i]) {
      return str + 'way';
    }
  }
}*/

function translatePigLatin(str, charPos = 0) {
  return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
    ? str + (charPos === 0 ? 'way' : 'ay')
    : charPos === str.length
      ? str + 'ay'
      : translatePigLatin(str.slice(1) + str[0], charPos + 1);
}

console.log(translatePigLatin(str))
//преобразовать строку в массив
//сделать проверку первых букв - глассная или нет через метод includes???
//далее по условию задачи