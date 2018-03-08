/**
JavaScript code here
*/

function titleCase(str) {
    str = str.toLowerCase();
    var arr = str.split(' ');
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1, arr[i].length);
    }
    arr = arr.join(' ');
    return(arr);
}
console.log(titleCase("I'm a little tea pot"));
