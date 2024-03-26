let a = 'abc';
let b = new String("abc");
let c =`a is ${a} b is ${b}`;
console.log(c);

//template literal
//주의! 백틱(`)을 사용하여 문자열을 표현할 수 있음.

console.log(a.replace(/b/g, 'X'));

let s = '현';
console.log(s.charCodeAt(0));