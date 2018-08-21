/***
Write a function that detect if a string is a rotation of another string. 

E.g. if the string is "water", then the following are examples of its rotations: 
"aterw", "terwa", "erwat"


***/

function rotation (str1, str2) {
    var newStr = str1.split('').sort().join('');
    var newStr2 = str2.split('').sort().join('');

if (newStr === newStr2) {
  return true
}

};

console.log(rotation("water", "aterw"));

/***
Given 2 separate arrays, write a method to find the values that exist in both arrays and return them.
[1,1,2,6,8] & [1,5,8,10] => [1,8]

***/

var holder = [];

function double (arr1, arr2) {
  for(var i = 0; i < arr1.lenght; i++) { // 1 iteration arr1= 1
  for(var j = 0; j < arr2.length; j++) { // arr2= 1, 5, 8, 10
    if (arr1[i] ==- arr2[j]) {
      holder.push(arr[i])
    }
  }
}

for(var h = 0; h < holder.length; h++) {
  if ( holder[h] === holder[h + 1]) {
   var left = holder.slice(0, holder[i - 1])
   var right = holder.slice(holder[i - 1], holder.legnth -1)
   left.concat(right)
  }
}
return holder // 1, 8
}

console.log([1,1,2,6,8], [1,5,8,10]);


/***
Write a function that removes duplicate characters in a given string

E.g: aaabbcccdca => abcd
***/

//split the string
//fucntion that loops though str arr
//rcheck for dups <---
//empt arr
//place one of the dupes and those that not dupes    <<-- 
//join and return it

function remove (str) {
var strArr = str.split(''); // ['a', 'a', a]
var newArr = []; // []
for (var i = 0; i < strArr.length; i++) { // a, a , a
  if ( strArr[i] === strArr[i + 1]) { 
    for(var n = 0; n < newArr.length; n++) {
      if ( newArr[n] !== strArr[i]) {
         newArr.push(strArr[i]) // newArr = [a, b]
      }
    }
  }
}
return newArr.join('')
}

console.log(remove(str))


/***
Given an array of numbers. Replace each number with the product of all numbers in the array except for the number itself. 

E.g. [1, 4, 0, 10] => [4*0*10, 1*0*10, 1*4*10, 1*4*0] => [0, 0, 40, 0] 
***/

//loop 
// empt arr

function productRepl (arr) {
var newArr = []
for(var i = 0; i < arr.length; i) {
  if (arr[i]) {
    newArr.push( arr[i + 1] * arr[i + 2]) // 0 | 4 + 0
  }
}
return newArr
}

prod(arr);
