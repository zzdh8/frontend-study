let c = 1;

const f = function(){
    c++;
    if(c === 5) {clearInterval(f)};
    return console.log(new Date());
}
setInterval(f, 1000);