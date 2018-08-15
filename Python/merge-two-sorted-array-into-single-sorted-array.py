'''
    This is to merge two sorted array into single sorted array

    Input:
    a = [1, 3, 5], b = [2, 4, 5, 7]

    Output:
    [1, 2, 3, 4, 5, 5, 7]

'''

''' With inbuilt sort function '''
def mergeTwoSortedArrays_(a,b):
	c = a + b
	c.sort()
	return c

''' Without sort function '''
def mergeTwoSortedArrays__(a, b):
    aLen = len(a)
    bLen = len(b)
    aIndex = bIndex = 0
    newArr = []
    for i in range(aLen + bLen):
        if aIndex < aLen and bIndex < bLen:
            if a[aIndex] < b[bIndex]:
                newArr.append(a[aIndex])
                aIndex += 1
            else:
                newArr.append(b[bIndex])
                bIndex += 1

        elif aIndex < aLen:
            newArr.extend(a[aIndex:])
            break

        elif bIndex < bLen:
            newArr.extend(b[bIndex:])
            break

    return newArr