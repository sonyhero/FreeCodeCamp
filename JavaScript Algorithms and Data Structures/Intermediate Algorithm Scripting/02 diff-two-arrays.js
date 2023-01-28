function diffArray(a1, a2) {
          return a1
            .filter((i) => !a2.includes(i))
            .concat(a2.filter((i) => !a1.includes(i)));
      }

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);