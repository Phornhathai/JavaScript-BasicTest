function sumNumTarget(arr,target){
    for (let i = 0; i < arr.length ; i++) {
        for (let j = 0; j < arr.length ; j++) {
            if(arr[i] + arr[j] == target){
                console.log(i,j);
                i = arr.length           
            }
            
        }
    }

}

sumNumTarget([4,7,2] , 6)