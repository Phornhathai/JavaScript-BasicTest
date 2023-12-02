function sortMinMaxArray (arr1,arr2){
    let arr = [...arr1,...arr2]
    // console.log(arr);
    let n = arr.length
    let newArr = []
    
    
    for (let i = 0; i < arr.length; i++) {
        
        if(newArr.indexOf(arr[i]) === -1){
            newArr.push(arr[i])
        }else{
            const index = newArr.findIndex(e => e == arr[i])   
            console.log(index);         
            newArr.splice(index, 1)
        }
    }
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if(newArr[j] > newArr[j+1]){
                let temp = newArr[j]
                newArr[j] = newArr[j+1]
                newArr[j+1] = temp
            }
            
        }
        
    }

    console.log(newArr);
}



sortMinMaxArray([1,2,3,4],[100,5,1,10,4])
