var arg1 = process.argv[2];
var arg2 = process.argv[3];

import mathfile from './Math2';
console.log(mathfile.PI);
console.log(mathfile.sqrt(+arg1));
console.log(mathfile.square(+arg2));
