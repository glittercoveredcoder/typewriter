const sentence = "hello there from lighthouse labs";
let increment = 50;
let index = 0
for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
    index++;
    if (index === sentence.length) {
      console.log();
    }
  }, increment += 50);
};