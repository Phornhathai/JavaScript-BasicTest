function lastSum(input) {
    let num = String(input)
    num = num.split('')
    //ไม่สามารถใช้ for loop แทนได้ เพราะไม่รู้ว่าต้องวนลูปกี่รอบ เพราะงั้นเลยใช้ while loop จนกว่าค่า condition จะเป็น false
    while (num.length > 1) {
        let result = 1
        for (let index = 0; index < num.length; index++) {
            result = result * num[index]
            console.log(result);
        }
        num = result
        num = String(num)
        num = num.split('')       
    }
    
}

// lastSum(999)
lastSum(39)