const linear_search = (numbers,target)=>{
        for (const x of numbers) {
            if(x === target) return x -1
            
        }
}


const verify = (index)=>{
    if(index !== undefined)
        return `Target found at index:  ${index}`
    
    return "Target not found in list"
}

const numbers = [1,2,3,4,5,6,7,8,9,10]
const result = linear_search(numbers,10)
console.log(verify(result));

const binary_search=()=>{
    const numbers = [1,2,3,4,5,6,7,8,9,10]
    const target = 10  //target to search for   index of target 
    const midpoint = Math.round((numbers.length) / 2)- 1    
    if(numbers[midpoint] === target) return midpoint
    if(numbers[midpoint] < target) return binary_search(numbers.slice(midpoint,), target)
}


