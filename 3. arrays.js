// 1. Write a JavaScript function to check if a certain word is a Palindrome.
function isPalindrome(word) {
  lengthWord = word.length;
  let answer = "";
  for (let i = 0; i < lengthWord; i++) {
    if (word[i] === word[lengthWord - i - 1]) {
      answer = true;
    } else answer = false;
  }
  return answer;
}

//console.log(isPalindrome("racecareeee"));

// 2. Write a JavaScript function to get a random item from an array.

//const array = ["boom", "tak", "blad", "huis"];

function getRandomArrayItem(array) {
  let arrayLength = array.length;
  let randomNumber = Math.floor(Math.random() * arrayLength);
  return array[randomNumber];
}

//console.log(getRandomArrayItem(array));

// 3. Write a JavaScript program which accept a string as input and swap the case of each character.
// 	For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function swapCase(string) {
  let swapped = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      swapped += string[i].toLowerCase();
    } else {
      swapped += string[i].toUpperCase();
    }
  }
  return swapped;
}

//console.log(swapCase("The Quick Brown Fox"));

// 4.Write a JavaScript function to compute the sum of an array of integers.

function sumOfNumbers(numbers) {
  let sum = 0;
  numbers.forEach(function (number) {
    sum += number;
  });
  return sum;
}

function sum() {
  let total = 0;
  for (let i = 0; i > arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

const numbers = [2, 6, 9, 8];
//console.log(sumOfNumbers(numbers));

/* 5. Write a JavaScript function to remove a specific element from an array 
	var myNames = ["John","Cindy","Omer","Barbie","Barbie"];
	removeSpecificelement(myNames,"Barbie"); */

function removeSpecificelement(list, item) {
  let indexItem = list.indexOf(item);
  list.splice(indexItem, 1);
  return list;
}
//var myNames = ["John", "Cindy", "Omer", "Barbie", "Barbie"];
//console.log(removeSpecificelement(myNames, "Barbie"));

// 6. Write a function to remove all strings with less than X characters from an array of strings

function removeFromArray(array, minimumCharacters) {
  let i = 0;
  array.forEach(function (arrayItem) {
    if (arrayItem.length < minimumCharacters) {
      console.log(arrayItem);
      array.splice(i, 1);
    }
    i++;
  });
  return array;
}

//const array = ["boomeee", "takeeeeee", "bla", "huis", "tes", "test", "groenten"];
//console.log(removeFromArray(array,4));

// 7. Write a JavaScript function to generate an array with the first X Fibonacci numbers.

function printFibonnacci(amount) {
  const fibonnacci = [];
  let fibonnacciNumber = 0;
  fibonnacci.push(fibonnacciNumber);
  fibonnacci.push(1);
  for (let i = 0; i < amount; i++) {
    fibonnacciNumber = fibonnacci[i] + fibonnacci[i + 1];
    fibonnacci.push(fibonnacciNumber);
  }
  return fibonnacci;
}

//console.log(printFibonnacci(50));

// 8. Write a JavaScript function that returns array elements larger than a number given:
var numbers = [5, 2, 20, 60, 45];
var toCheck = 6;
// returned array:[20,60,45]

function checkNumber(listNumbers, numberToCheck) {
  const largerNumbers = [];
  listNumbers.forEach(function (number) {
    if (number > numberToCheck) {
      largerNumbers.push(number);
    }
  });
  return largerNumbers;
}

// console.log(checkNumber(numbers, toCheck));

// 9. Write a Javascript function to generate a random color in format rgb(0,0,0);

function randomColor() {
  let randomColor =
    "rgb(" +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    "," +
    Math.floor(Math.random() * 255) +
    ")";
  return randomColor;
}

// console.log(randomColor());

// 10. Write a JavaScript program to find the types of a given angle.  Go to the editor
//   Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     Obtuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.

function giveTypeAngle(angle) {
  if (angle < 90) {
    return "acute";
  }
  if (angle === 90) {
    return "right";
  }
  if (angle > 90 && angle < 180) {
    return "obtuse";
  } else return "straight";
}

//console.log(giveTypeAngle(180));

// 11. Write a JavaScript function to merge two arrays and removes all duplicates elements.
function mergeArrays(array1, array2) {
  let i = 0;
  array1.forEach(function (array1Item) {
    array2.forEach(function (array2Item) {
      if (array1Item === array2Item) {
        console.log(array1Item);
        array1.splice(i, 1);
      }
    });
    i++;
  });
  const mergedArray = array1.concat(array2);
  return mergedArray;
}

const array1 = ["blaba", "haha", "nene"];
const array2 = ["jaja", "nene", "haha"];

// console.log(mergeArrays(array1, array2));        doet het niet helemaal, als er twee duplicaten zijn gaat het mis

new Set();

// 12. given [2,1,6,4]
//     expected => [8,1,216,64] => the power 3
//     thirdPower([2,1,6,4])

function thirdPower(numbers) {
  const newNumbers = numbers.map(function (number) {
    return Math.pow(number, 3);
  });
  return newNumbers;
}

//console.log(thirdPower([2, 1, 6, 4]));

// 13. given [2,1,6,4]
//     expected => [8,1,216,64] => the power N
//    nthPower([2,1,6,4],16)

function nthPower(numbers, power) {
  const newNumbers = numbers.map(function (number) {
    return Math.pow(number, power);
  });
  return newNumbers;
}

//console.log(nthPower([2, 1, 6, 4],3));

// 14. given [2,1,6,4]
//     calc avg
//     calc sum    (reduce)

function calcAvg(numbers) {
  let sum = 0;
  numbers.forEach(function (number) {
    sum += number;
  });
  return (avg = sum / numbers.length);
}

// console.log(calcAvg([2, 1, 6, 4]));

/* 15. given ["Ellen","bert","Bart","zaki","Sandra","Soroush"]
  remove all the names that do not start with a capital */

function removeNotCapital(names) {
  let indexName = 0;
  names.forEach(function (name) {
    if (name[0] !== name[0].toUpperCase()) {
      let indexName = names.indexOf(name);
      names.splice(indexName, 1);
    }
  });
  return names;
}

const names = ["Ellen", "bert", "Bart", "zaki", "Sandra", "Soroush"];
//console.log(removeNotCapital(names));

// 16. Write a Javascript function to find how many times a certain number occurs in that array.

function howManyTimes(numbers, certainNumber) {
  let i = 0;
  numbers.forEach(function (number) {
    if (number === certainNumber) {
      i++;
    }
  });
  return i;
}

const list = [1, 9, 10, 1];
//console.log(howManyTimes(list, 1));

// 17. Write a JavaScript program to find the most frequent item of an array.

function mostFrequent(list) {
  list.forEach(function (listItem) {
    list.filter(listItem);
  });
}

//weet niet hoe
