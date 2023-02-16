function createIncriment() {
    let count = 0;
    function incriment(){
        count++;
    }
    let message = `Count is ${count}`;
    function log(){
        console.log(message);
    }
    
    return [incriment,log];
}

const [incriment,log] = createIncriment();

incriment();
incriment();
incriment();
log();

//Output will be "Count is 0" as message is in Global scope.