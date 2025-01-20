function sum(a,b){
    return a+b ;
}

function diff(a,b){
    return a-b ;
}

function product(a,b){
    return a*b ;
}

function divide(a,b){
    if (b){
        return a/b ;
    }
    return "Division by zero error" ;
}

const pi = 3.14 ;

const g = 9.8 ;

let object = {
    sum : sum,
    diff : diff,
    product : product,
    divide : divide,
    pi : pi,
    g : g
};

module.exports = object ;