function titleCase(str) {
  return  str.split(" ")
          .map((word) => {
            return word[0].toUpperCase() + word.toLowerCase().slice(1);
          })
          .join(" ");
}

titleCase("I'm a little tea pot");