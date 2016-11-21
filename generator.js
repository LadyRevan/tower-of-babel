const max = process.argv[2];
let FizzBuzz = function*() {
    let num = 0;
    while (num < max) {
        num++;
        let replace = [];
        if (num % 3 === 0)
            replace.push('Fizz');
        if (num % 5 === 0)
            replace.push('Buzz');
        yield replace.join('') || num;
    }
}();

for (var n of FizzBuzz) {
  console.log(n);
}
