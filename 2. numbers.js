/* 1. Write a JavaScript function that returns an array with generated  Multiplication Table of a given number (max. 1000 iterations)
	var result =  generateMultiplicationTable(5);
	console.log(result); */

function generateMulitiplicationTable(number) {
  const numbers = [];
  for (let i = 0; i < 1000; i++) {
    numbers.push(number * i);
  }
  return numbers;
}

//console.log(generateMulitiplicationTable(5));

/*
2. extension of first challenge:

	Every time a value in the array is divisible by 20 add an (asterisk)* to it  */

function generateMulitiplicationTable(number) {
  const numbers = [];
  for (let i = 0; i < 1000; i++) {
    if ((number * i) % 20 !== 0) {
      numbers.push(number * i);
    } else numbers.push(number * i + "*");
  }
  return numbers;
}

//console.log(generateMulitiplicationTable(5));

// 3. Write a Javascript function to return wether a value is divisible by a certain number
// 	isDivisible(333,7)
// 	=> false

function isDivisible(number, divideBy){
  return number % divideBy === 0;
}

//console.log(isDivisible(8,3));

// 4. Write a Javascript function that return an array with even numbers between a range
// 	getEvenNumbersInRange(56,1211)

function getEvenNumbersInRange(startRange,endRange){
  const evenNumbers = [];
  for (let i = startRange; i < endRange; i++){
    if (i % 2 === 0){
      evenNumbers.push(i);
    }
  }
  return evenNumbers;
}

// console.log(getEvenNumbersInRange(3,200))

// 5. Write a Javascript function that calculate the distance between two coordinates.
// 	getDistance([20,100],[50,800])

function getDistance(cordinateOne, cordinateTwo) {}
