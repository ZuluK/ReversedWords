//Reversed Words alogrithm
//takes in a string as an parameter
function reverseWords(string) {
  //creates a array of all the words in our string
  var wordsArr = string.split(' ');
  //to push all the reversed words into array
  var reversedWordsArr = [];
 //loops through every word in the array
  wordsArr.forEach(word => {
    //defines an empty string to build our reversed word
    var reversedWord = '';
    //loops through every letter in array backwards
    for (var i = word.length - 1; i >= 0; i--) {//starts at last character in the string
      //adds current letter to 'reversedWord'
      reversedWord += word[i];
    };
    //pushes completed reversedWord into reversedWordsArray
    reversedWordsArr.push(reversedWord);
  });
  //returns final reversed words as a string
  return reversedWordsArr.join(' ');
}
