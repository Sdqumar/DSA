const recursive_binary_search = (list,target)=>{
let first = 0
let last = list.length -1

    while(first <= last){
        const midpoint = Math.round((first + last) /2 )
        
        if (list[midpoint] === target) return midpoint
        if(list[midpoint] < target) first = midpoint + 1
        if(list[midpoint] > target) last = midpoint - 1

        }
    return undefined

}


const verify = (index)=>{
if(index !== undefined){
    return `Target found at index:  ${index}`
}
return "Target not found in list"
}

const numbers = [1,2,3,4,5,6,7,8,9,10]
const result = recursive_binary_search(numbers,11)
console.log(verify(result));