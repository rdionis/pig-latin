//PIG LATIN TRANSLATION
// Create a function that takes a string of words and moves the first letter of each word to the end of it,
// then adds ‘ay’ to the end of the word. This is a basic form of “Pig Latin”.
// a) Move the first letter of each word to the end of the word.
// b) Add “ay” to the end of the word.
// c) Words starting with a vowel (A, E, I, O, U) append “way” to the end instead.
// 1:19
// Extra Practice
// Preserve proper capitalization as in the examples below.
// Examples:
// pigLatin(“Cats are great pets.“) ➞ “Atscay areway reatgay etspay.”
// pigLatin(“Tom got a small piece of pie.“) ➞ “Omtay otgay away allsmay iecepay ofway iepay.”
// pigLatin(“He told us a very exciting tale.“) ➞ “Ehay oldtay usway away eryvay excitingway aletay.”

function pigLatin(userStr) {
  let userStrToArr = userStr.toLowerCase().split(" "); // turns the string into an array
  let vowels = ["a", "e", "i", "o", "u"]; // creates an array with all the vowels

  for (let i = 0; i < userStrToArr.length; i++) {
    let currentIndex = userStrToArr[i]; // assigns a value to the current Index of the array the function is looping through
    if (vowels.includes(currentIndex[0])) {
      currentIndex = currentIndex + "way"; //it appends the word way to every word starting with a vowel
    } else {
      currentIndex = currentIndex + currentIndex[0]; // it adds the first character to the end of each word starting with a consonant
      currentIndex = currentIndex.substring(1); // it removes the first character of each word starting with a consonant
      currentIndex = currentIndex + "ay"; // it adds "ay" to each word starting with a consonant
    }
    userStrToArr[i] = currentIndex;
  }
  userStrToArr[0] = userStrToArr[0][0].toUpperCase() + userStrToArr[0].slice(1); // turns the first letter of the first word to a capital letter
  return userStrToArr;
}

console.log(pigLatin("I love eating"));
console.log(pigLatin("I love eating and arriving early to places"));
