/*
Seek and Destroy
You will be provided with an initial array
(the first argument in the destroyer function), 
followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.

destroyer([1, 2, 3, 1, 2, 3], 2, 3) --> [1,1]
*/

function destroyer(arr, ...arg) {
    return arr.filter(x => !arg.includes(x))
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);