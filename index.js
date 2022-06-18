function isPalindrome(word) {
  // Write your algorithm here
  let palindrome='';
  for(let i=word.lenght-1;i>0; i--){
    palindrome+=word[i]
  }
  if(word===palindrome){
    return true}
  else{return false
 }
}

/* 
  Add your pseudocode here
  initialize empty string called palindrome
  iterate over the input string 'word'
  then append characters into the palindrome
  if input is the same as the palindrome the return true
  if not same then return false 

*/

/*
  Add written explanation of your solution here
  -I created an empty string and named it palindrome
  -I iterated the input string in reverse while matching it with the palidrome
  -After comparison I returned true when the comparisons are matching and returned false 
   for those that didn't match
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
