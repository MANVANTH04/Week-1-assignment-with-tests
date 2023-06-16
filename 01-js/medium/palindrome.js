/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

// var str   = 'abba'

const smallalpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
 

function isPalindrome(str) {

  var anarray = []
  var ansplit = str.toLowerCase().split("")

  for (var i = 0 ; i < ansplit.length; i++){
    if (smallalpha.includes(ansplit[i])){
      anarray.push(ansplit[i])
    }
  }
  return anarray.join("") === anarray.reverse().join("")

}

// console.log(isPalindrome(str))

module.exports = isPalindrome;
