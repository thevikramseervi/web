/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const len = str1.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (str1[i] != str2[j]) {
        if (j == len - 1) {
          return false;
        }
        continue;
      }
      else {
        break;
      }
    }
  }
  return true;
}

module.exports = isAnagram;
