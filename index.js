function receivesAFunction(param) {
    return param();
}

function returnsANamedFunction() {
    return function aNamedFunction() {

    }
}
    
function returnsAnAnonymousFunction() {
    return function () {
        
    }
}