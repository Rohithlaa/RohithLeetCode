/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
let wordSplit = s.trim().split(" ")
return wordSplit[wordSplit.length - 1].length;
};