function getIndexToIns(arr, num) {
  arr.sort((a,b)=>a-b);
  for (let i = 0; i < arr.length; i++) {
    if ( arr[arr.length-1] < num ) {return arr.length}
    if ( num <= arr[i] ) {return i}
  }
  if ( arr.length == 0  ) {return 0}
}

getIndexToIns([40, 60], 50);