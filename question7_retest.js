//sortOdd ([5,28,3,10,7,1]) -> [1,28,3,10,5,7]

const test1 = [5,3,2,10,9,1] 

// step 1 stored index and value of even array
// step 2 sort even array Less to More
const sortedOdd = (arr) =>{
    const storeEventIndex = arr.map((value, index) =>({
        number : value,
        oldIndex: index
    })).filter((value) => value.number % 2 === 0)

    const oddArr = arr.filter((value) => value % 2 !== 0).sort((a , b) => a - b)
    // step 3 use splice to insert odd value 
    storeEventIndex.forEach(value => {
        oddArr.splice(value.oldIndex, 0 , value.number)
    });

    return oddArr
}



const result = sortedOdd(test1)
console.log(result);