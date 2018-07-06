let numTest1 = "789";
let numTest2 = "12";

// 0 is not well handled

function bigMultiply(num1, num2) {
    let tempResult = [];
    let count = 0

    for (let i = num1.length - 1; i >= 0; i--) {
        let carry = 0;
        let result = [];
        for (let j = num2.length - 1; j >= 0; j--) {
            let re = Number(num1[i]) * Number(num2[j]) + carry;
            let remainder = (re % 10).toString();
            carry = Math.floor(re / 10);            
            result.unshift(remainder)
        }
        if (carry > 0)
            result.unshift(carry.toString());

        for (let k = 0; k < count; k++) {
            result.push("0");
        }
        //console.log(result);
        tempResult.push(result);
        count++;
    }
    let finalResult = ["0"];
    for (let i = 0; i < tempResult.length; i++) {         
        finalResult = bigAdd(finalResult, tempResult[i])
    }

    console.log(finalResult);
}


function bigAdd(num1, num2) {
    let maxLength = num1.length > num2.length ? num1.length : num2.length;
    let carry = 0
    let addResult = [];
    for (let i = maxLength - 1; i >= 0; i--) {
        
        let n1 = i < num1.length ?  Number(num1[i]) : 0;
        let n2 = i < num2.length ?  Number(num2[i]) : 0;        

        let re = n1 + n2 + carry;
        let remainder = (re % 10).toString();
        carry = Math.floor(re / 10);
        addResult.unshift(remainder);
    }   

    if (carry > 0)
        addResult.unshift(carry.toString());
    
    return addResult;
}

bigMultiply(numTest1, numTest2);