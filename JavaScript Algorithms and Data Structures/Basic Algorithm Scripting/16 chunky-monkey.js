function chunkArrayInGroups(arr, size) {
  let tmp = [];
  for (let i = 0; i < arr.length; i += size) {
    tmp.push(arr.slice(i, i + size));
  }
  return tmp;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);