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
  const userStrToArr = userStr.split(" "); // turns the string into an array
  const vowels = ["a", "e", "i", "o", "u"]; // creates an array with all the vowels
  const wordsStartingWithVowel = []; // creates an empty array
  userStrToArr.some((
    word // using the some() method twice to go through the array and check which words have a vowel as its zero index
  ) =>
    vowels.some(vowel => {
      if (vowel === word[0]) {
        wordsStartingWithVowel.push(word + "ay"); // pushes the words that start with a vowel to a new array
      }
    })
  );
  return wordsStartingWithVowel;
}

console.log(pigLatin("I love eating"));
console.log(pigLatin("I love eating and arriving early to places."));
