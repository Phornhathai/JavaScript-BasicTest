function sortOddValue(arr){
    let n = arr.length

for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if(arr[j] % 2 !== 0 && arr[j+1] % 2 !== 0){
                    if(arr[j] > arr[j+1]){
                        let temp = arr[j]
                        arr[j] = arr[j+1]
                        arr[j+1] = temp
                        
                    }
            }
        }
    }
    console.log(arr);
}

sortOddValue([1,7,3,4])