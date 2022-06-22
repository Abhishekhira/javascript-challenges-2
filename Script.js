console.log("factorialize in javascript")
//lets learn how we can factorilize any value in the javascript
function factorialize(val) {
    let result=1;
    for (let i = 1; i <= val; i++) {
        result*=i
       
    }
     console.log(result)
    
}

factorialize(5)