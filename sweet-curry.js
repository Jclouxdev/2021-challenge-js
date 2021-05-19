//Create the following functions with the "currying" process:
//Please note that those functions can only have one argument each.

//mult2 that multiplies two numbers.
const mult2 = (a) => (b) => a * b

//add3 that adds three numbers.
const add3 = (a) => (b) => (c) => a + b + c

//sub4 that subtracts four numbers.
const sub4 = (a) => (b) => (c) => (d) => a - b - c - d

//TEST//
console.log('---mult2----')
console.log(mult2(2)(5),',', 10)
console.log(mult2(3)(6),',', 18)
console.log(mult2(4)(7),',', 28)
console.log('---add3----')
console.log(add3(1)(2)(3),',', 6)
console.log(add3(4)(5)(11),',', 20)
console.log(add3(4)(7)(10),',', 21)
console.log('---sub4----')
console.log(sub4(4)(7)(10)(30),',', -43)
console.log(sub4(5)(17)(-10)(3),',', -5)
console.log(sub4(3)(72)(-211)(99),',', 43)
console.log(sub4(5)(7)(10)(26),',', -38)