// old way function
//1 function define one time process
function aFunction(){ // formal argument/parameter
    console.log("Sumit")
}
//2. function call/invoke many time process
aFunction(); //actual argument/parameter



//New way function (Fat arrow) 2015 ES6
//1.function define one time process
let bFunction =()=>{ //formal argument/parameter
    console.log("Raju") //statements
}

//2. function calling/invoking many time process
bFunction();