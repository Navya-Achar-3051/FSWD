function outer(){
    const outvar="i am Navya";

    function inner(){
        console.log(outvar)
    }
    return inner;
}
const newclosure=outer();
newclosure();