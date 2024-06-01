function isPalindrome(string) {
  // create a container to store reversed name
  let reverseName=string.split("").reverse().join("");
  // write the condition
  if(string===reverseName){
    return true
  }else{
    return false
  }
}
// call the function to display the result in the console
console.log(isPalindrome("abba"))


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
