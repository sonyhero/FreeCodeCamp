function spinalCase(str) {
  return str.split(/(?=[A-Z])|[^a-zA-Z]/g).join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');