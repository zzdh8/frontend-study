let a = [5, 1, 8, 10, 4];
a.sort((a, b) => a - b);
//오름차순
console.log(a);

a.sort((a, b) => b - a);
//내림차순
console.log(a);