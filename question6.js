function nextDay(str){
    let currentDate = str.split(' ')
    let date = Number(currentDate[1])
    let month = currentDate[2]
    let year = Number(currentDate[4])
    let nextDay 
    let nextMonth
    let nextYear

    const dayInMonth = {
        "มกราคม" : 31,
        "กุมภาพันธ์" : isLeapYear(year) ? 29: 28,
        "มีนาคม" : 31,
        "เมษายน" : 30,
        "พฤษภาคม" : 31,
        "มิถุนายน" : 30,
        "กรกฏาคม" : 31,
        "สิงหาคม" : 31,
        "กันยายน" : 30,
        "ตุลาคม" : 31,
        "พฤศจิกายน" : 30,
        "ธันวาคม" : 31
    }



    //อยู่ภายในเดือน 
    if(date < dayInMonth[month]){
        nextDay = date + 1
        console.log(`วันที่ถัดไป คือ ${nextDay} ${month} ${year}`);
    }else{
        //สิ้นเดือน
        nextDay = 1
        nextMonth = Object.keys(dayInMonth).indexOf(month)
        if(nextMonth !== -1 && nextMonth < 11){
            nextMonth = Object.keys(dayInMonth)[nextMonth+1]
            console.log(`วันที่ถัดไป คือ ${nextDay} ${nextMonth} ${year}`);
        }else{
            //วันสุดท้ายของเดือนธันวาคม
            nextMonth = "มกราคม"
            nextYear = year + 1
            console.log(`วันที่ถัดไป คือ ${nextDay} ${nextMonth} ${nextYear}`);
        }
        
    }



}

function isLeapYear(year) {
    let y = year - 543
    let yeartest = (((y % 4 === 0) && (y % 100 != 0))|| (y % 400 == 0 ))
    return yeartest
}

nextDay(`วันที่ 28 กุมภาพันธ์ พ.ศ. 2567`) 