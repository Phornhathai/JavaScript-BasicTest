function doubleChar(str){

    let arr = ""
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j <= i; j++) {
            arr = arr + str[i]
        }
        if(i !== str.length - 1){
            arr = arr + '-'
        }
    }
    let result = arr
    console.log(result);
}

doubleChar('abcd')
doubleChar('big')
doubleChar('test')