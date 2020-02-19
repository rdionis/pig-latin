console.log("PIG LATIN TRANSLATION");
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
  const vowels = ["a", "e", "i", "o", "u"];
  const newArr = []; // creates an empty array
  userStrToArr.some(word =>
    vowels.some(vowel => {
      if (vowel === word[0]) {
        newArr.push(word + "ay");
      }
    })
  );
  return newArr;
}

console.log(pigLatin("I love eating"));
console.log(pigLatin("I love eating and arriving early to places."));

console.log("PIG LATIN 1");

function pigLatin1(userStr1) {
  const userStrToArr1 = userStr1.toLowerCase().split(" "); // turns the string into an array
  //   console.log(userStrToArr1);
  const vowels1 = ["a", "e", "i", "o", "u"];
  const newArr1 = []; // creates an empty array
  userStrToArr1.some(word =>
    vowels1.some(vowel => {
      if (word[0] === vowel) {
        newArr1.push(word + "ay");
      } else if (word[0] !== vowel) {
        newArr1.push(word);
      }
    })
  );
  return newArr1;
}
console.log(pigLatin1("i do an eager mood And I am"));
