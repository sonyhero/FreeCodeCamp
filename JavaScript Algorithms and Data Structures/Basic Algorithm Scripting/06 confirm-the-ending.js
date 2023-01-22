function confirmEnding(str, target) {
  let regex = new RegExp(`${target}$`);
  return regex.test(str);
}

confirmEnding("Bastian", "n");