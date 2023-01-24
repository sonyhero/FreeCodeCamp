function mutation(arr) {
  arr[0] = arr[0].toUpperCase().split('');
  arr[1] = arr[1].toUpperCase().split('');
  return arr[1].every( x => arr[0].includes(x));
}