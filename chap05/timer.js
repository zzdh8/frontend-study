let c = 1;

const f = function(){
    console.log(new Date());
    ++c;
    if(c = 10) {clearInterval(f)};
}
setInterval(f, 1000);