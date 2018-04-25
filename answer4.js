//Question 4
/*
「function createArrayOfFunctions(y) {
var arr = [];
for(var i = 0; i<y; i++) {
arr[i] = function(x) { return x + i; }
}
return arr;
}」

I guess the above program is to read x and y, output an array with size of y, start with (x) and end with (x+y);
the problems are as following:

1: "function(x) { return x + i; } " is treated as a string and store in arr[i]
2: x is undefined
3: function name is missing

Here are the solution
*/
function createArrayOfFunctions(y,x) {
var arr = [];
for(var i = 0; i<y; i++) {
arr[i] =   x + i ;
}
console.log(arr.toString());
return arr;
}
createArrayOfFunctions(5,6);