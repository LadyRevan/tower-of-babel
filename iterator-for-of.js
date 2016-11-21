const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    let num = 0;
    return {
        next() {
            num++;
            let replace = [];
            if (num % 3 === 0)
                replace.push('Fizz');
            if (num % 5 === 0)
                replace.push('Buzz');
            if (num > max)
                return {done:true};
            return {done:false, value:replace.join('') || num};
        }
    };
  }
};

for (var n of FizzBuzz) {
  console.log(n);
}
