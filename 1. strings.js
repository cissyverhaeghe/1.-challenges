/* 1- Write a JavaScript function to check whether a string is blank or not.

console.log(is_Blank('')); => true 
console.log(is_Blank('abc')); => false */

function is_Blank(string) {
  return string === "";
}

//console.log(is_Blank("nee"));

/* 2 */
function protectEmail(email) {
  let firstPart = email.length / 3;
  let startEmail = email.substring(0, firstPart);
  let hiddenEmail = startEmail + "..." + email.substring(firstPart * 2);
  return hiddenEmail;
}

//console.log(protectEmail("mijnemail-mail@example.com"));

function protect_email(email) {
  let positionAt = email.search("@");
  let firstPart = email.substring(0, positionAt);
  let secondPart = email.substring(positionAt);
  let hiddenPart = firstPart.substring(0, firstPart.length / 2);
  let protectedEmail = `${hiddenPart}...${secondPart}`;
  return protectedEmail;
}

//console.log(protect_email("mijn_email@emailadres.com"));

/* 3- Write a JavaScript function to insert a string within a string at a particular position (default is 1).

console.log(insert('We are doing some exercises.')); =>  "We are doing some exercises." 
console.log(insert('We are doing some exercises.','JavaScript '));  => "JavaScript We are doing some exercises." 
console.log(insert('We are doing some exercises.','JavaScript ',18)); => "We are doing some JavaScript exercises." */

function insertString(string, stringToInsert, position) {
  let sentenceStart = string.substring(0, position);
  let sentenceEnd = string.substring(position + 1);
  return sentenceStart + stringToInsert + sentenceEnd;
}

//console.log(insertString("hallo mijn naam is ","Cissy ", 15));

/* 4 */
function string_chop(string, letters) {
  const chunks = [];
  for (let i = 0; i < string.length; i++) {
    chunks.push(string.substr(i, i + letters));
  }
  return chunks;
}
//console.log(string_chop("halihaloo", 4));

/* 5- Write a JavaScript function to truncate a string to a certain length.

console.log(truncate_string("Robin Singh",4)); =>  "Robi" */

function truncate_string(string, length) {
  return string.substring(0, length);
}

//console.log(truncate_string("hahahahahaha",3));

/* 6- Write a JavaScript function to test whether the character at the provided (character) index is lower case.

console.log(isLowerCaseAt ('Js STRING EXERCISES', 1)); => true */

function isLowerCaseAt(string, index) {
  return string[index] === string[index].toLowerCase();
}

//console.log(isLowerCaseAt("JS STRING EXERCISES", 1));

/* 7- Write a JavaScript function to test whether a string ends with a specified string.

console.log(endsWith('JS string exercises', 'exercises')); => true */

function endsWith(string, word) {
  let lengthLastWord = word.length; //9
  let lastWordofString = string.substring(string.length - lengthLastWord);
  return lastWordofString === word;
}

//console.log(endsWith("haha chocolade","chocolad"));

/* 8- Write a JavaScript function to get unique guid (an acronym for 'Globally Unique Identifier?) of the specified length, or 32 by default.

console.log(guid()); => "hRYilcoV7ajokxsYFl1dba41AyE0rUQR"
console.log(guid(15)); => "b7pwBqrZwqaDrex" */

function guid(number){
  return (Math.random()*10000000000000000).toString(16);
}

//console.log(guid());

