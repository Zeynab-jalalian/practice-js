let count=0;
let R=setInterval(result , 1000)
function show(){
    count++
    console.log(count);
    
}
function result(){
    show()
    if(count==10){
        console.log('finish')
        clearInterval(R)
    }
}