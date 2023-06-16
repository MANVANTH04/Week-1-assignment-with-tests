/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/




function isAnagram(str1, str2) {
  var str1array = str1.toLowerCase().split('').sort();
  var str2array = str2.toLowerCase().split('').sort();



  if (str1array.length === str1array.length) {
    for (var i = 0; i < str1array.length; i++) {
      if (str1array[i]!==str2array[i]){
        return false
      }
    }
    return true
  }
  return false


}

// console.log(isAnagram(str1, str2));

module.exports = isAnagram;
