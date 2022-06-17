def quicksort(values):
    if len(values) <= 1:
        return values
    
    less_than_pivot = []
    greater_than_pivot = []
    pivot = values[0]

    for value in values[1:]:
        if value <= pivot:
            less_than_pivot.append(value)
        else:
            greater_than_pivot.append(value)

    return quicksort(less_than_pivot) + [pivot] + quicksort(greater_than_pivot)


numbers = [121,31,11,23,14,4,8,2,1,33,52,112]
names = ["sadeeq","umar","musa","abu","mubi","zaid","xyz","motion","wick","sadeeq umar","sadeeq abu",]
sorted_numbers = quicksort(names)

print(sorted_numbers)