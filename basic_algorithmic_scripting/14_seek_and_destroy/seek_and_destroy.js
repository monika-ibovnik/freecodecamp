/**
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].
destroyer([2, 3, 2, 3], 2, 3) should return [].
destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].

*/
function destroyer(arr) {
// Remove all the values
    var args = Array.from(arguments);
    arr = arr.filter(function(value){
        return args.indexOf(value) == -1;
    });
    return arr;
}
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
