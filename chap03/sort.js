let a = [];
for(let i = 0; i < 100; ++i){
    a.push(Math.floor(Math.random() * 100)+1);
}
function compare(a, b){
    return a - b;
}
console.log(a.sort(compare));