const receivesAFunction = (callback) => {
    callback();
}

const returnsANamedFunction = () => {
    function sum(){
        return 2+4;
    }

    return sum;
}

const returnsAnAnonymousFunction = () => {
    return function(){
        console.log("Hello world");
    }
}