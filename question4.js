function doubleChar(str){

    let arr = ""
    //for แรก ไล่ตัวอักษรทีละตัวใหญ่ๆ a-b-c-d
    for (let i = 0; i < str.length; i++) {
        //for ที่สอง เพิ่มตัวอักษรแต่ละรอบ ตามค่า i 
        // for (let j = 0; j <= i; j++) {
        //     arr = arr + str[i]
        // }
        let char = str[i].repeat(i+1)
        arr = arr + char
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