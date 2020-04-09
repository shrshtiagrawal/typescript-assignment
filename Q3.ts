//Q3: Create a simple Calculator using TypeScript.Implement Add,Multiply,Subtract and Division operation on two numbers.

const calculator = (num1: number, num2: number, operator: string) => {
    let res = 0;
    switch (operator) {
        case '+':
            res = num1 + num2;
            console.log("Addition :  " + res);
            break;
        case '-':
            res = num1 - num2;
            console.log("Substraction :  " + res);
            break;
        case '*':
            res = num1 * num2;
            console.log("Multiplication :  " + res);
            break;
        case '/':
            res = num1 / num2;
            console.log("Division :  " + res);
            break;
        default:
            console.log("Not a valid operator");
            break;
    }

}

calculator(10, 10, '/');