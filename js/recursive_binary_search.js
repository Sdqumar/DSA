const recursive_binary_search = (list,target)=>{
    if(list.length === 0) return false

    const midpoint = Math.round((list.length) / 2)- 1

    if(list[midpoint] === target)  return true 

    if(list[midpoint] < target) return recursive_binary_search(list.slice(list[midpoint],), target)
    if(list[midpoint] > target) return recursive_binary_search(list.slice(0,list[midpoint -1]), target)

    }
    
    
    const verify = (index)=>{
    if(index !== false) return `Target found at index:  ${index}`
    
    return "Target not found in list"
    }
    
    const numbers = [1,2,3,4,5,6,7,8,9,10]
    const result = recursive_binary_search(numbers,31)
    console.log(verify(result));