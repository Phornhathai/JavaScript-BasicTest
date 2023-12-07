//diffArray([1,2,3],[1,10,100]) -> [2,3,10,100] (sorted)
const test1 = [1, 3, 20]
const test2 = [1, 10, 1000]
// >> [2, 3, 10 , 1000]
const resultArray =[]

const diffArray = (arr1, arr2) => {
    // step 1
    // scan every arr1's item > included arr2's item
    // > if included > avoid
    // > if not included > stored value
    arr1.forEach(value => {
        if(arr2.includes(value) === false){
            resultArray.push(value)
        }
    });

    // step 2
    // scan every arr2's item > included arr1's item
    // > if included > avoid
    // > if not included > stored value
    arr2.forEach(value => {
        if(arr1.includes(value) === false){
            resultArray.push(value)
        }
    });

    // step 3
    // stored value step 1&2 sorted > return
    resultArray.sort((a,b)=> a - b)

    return (`resultArray : ${resultArray}`)

}

const result = diffArray(test1,test2)
console.log(result);



