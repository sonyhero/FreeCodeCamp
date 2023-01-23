function palindrome(str) {
  let str1 = str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').join('');
  let str2 = str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').reverse().join('');
  return str1==str2;
}

palindrome("eye");