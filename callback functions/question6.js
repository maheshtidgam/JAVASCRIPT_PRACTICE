
function operation(num1,num2,cb){
    cb();
}

function operation(num1,num2){
    console.log(num1+num2)
}





function calculate(num1,num2){
    operation(num1,num2, ()=>{
        cb(num1,num2)
    })
}

calculate(5,6);