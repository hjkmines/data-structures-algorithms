// //Built in object methods 
// let object1 = {
//     name: 'Tony'
// }

// object1.keys(object1)
// object1.values(object1)
// object1.hasOwnProperty('name')

// //Built in array methods 

// let array1 = [
//     'tony', 
//     'james'
// ]

// array1.push('john'); 
// array1.pop('john'); 
// array1.unshift('john');
// array1.shift('john');
// array1.concat('john'); 
// array1.slice(0,1); 
// array1.splice(0,2); 
// array1.sort(); 
// array1.forEach
// array1.map(element => {
//     console.log(element)
// })
// array1.reduce((sum, element) => {
//     sum + element 
// }); 

// //example: 
// let array2 = [
//     1, 
//     2, 
//     3
// ]

// array2.slice(0, 2) //returns [1, 2]

// array2.splice(1) //returns [2, 3]

// array2.splice(0, 1) //returns [2, 3]

// //.split()

// let word = 'hello tony'; 

// word.split(''); //returns ["h", "e", "l", "l", "o", " ", "t", "o", "n", "y"]
// word.split(' '); // returns ['hello', 'tony']
// word.split(','); //returns ['hello tony']

// //.join()
// let word1 = word.split('') //returns ["h", "e", "l", "l", "o", " ", "t", "o", "n", "y"]

// word1.join(''); //returns 'hello tony'
// word1.join(' '); //returns 'h e l l o t o n y'
// word1.join(','); //returns 'h,e,l,l,o, t,o,n,y'

// let word2 = word.split(' ') // returns ['hello', 'tony']

// word2.join(''); //returns 'hellotony'
// word2.join(' ') //returns 'hello tony'
// word2.join(',') //returns 'hello,tony; 

// //Write a function which takes two numbers and returns their sum 
// function sum(n, m) {
//     return n + m 
// }

// //Looping through objects by key 
// let someObj = {a: 1, b: 2, c: 3}

// for (let key in someObj) {
//     console.log(key)
// } //outputs a, b, c

// for (let values of someObj) {
//     console.log(values)
// } //outputs 1, 2, 3

// //TOPIC 1: DO YOU UNDERSTAND THE PROBLEM?
// //Can I restate the problem in my own words?
// //What are the inputs that go into the problem?
// //What are the outputs that should come from the solution to the problem?

// //TOPIC 2: Concrete examples

// //Challenge 2: 
// let characters = 'Your PIN is 1234';  

// function charCount(str) {
//     //make object to return at end 
//     //loop over string, make new key for letter or number if it doesn't exist already, if it already exists, inc one up.
//     //if it is a space, period, etc. don't count it  
//     //return object at end 

//     let charObject = {}; 

//     let arrayOfChars = str.split('') //['y', 'o', ...]
    
//     for (let i = 0; i < arrayOfChars.length; i++) {
//         if (typeof arrayOfChars[i] === String) {
//             arrayOfChars[i].toLowerCase(); 
//         }
        
//         if (charObject.hasOwnProperty(arrayOfChars[i])) {
//             charObject.arrayOfChars[i] += 1; 
//         } else {
//             charObject.arrayOfChars = 1; 
//         }
//     }
//     return charObject; 
// }

// //Anagrams check, given two strings, write a function to determine if the second string is an anagram of the first. 
// //Utlizes the frequency counter pattern 
// let firstWord = 'hello'; 
// let secondWord = 'elloh'; 

// function checkAnagram(word1, word2) {
//     //create new objects to count the frequency of each word 
//     //compare the count between the objects 
//     //if the frequency are the same, return true, else false 

//     if (word1.length !== word2.length) {
//         return false; 
//     }

//     const collection = {}; 

//     for (let i = 0; i < word1.length; i++) {
//         let letter = word1[i]; 

//         collection[letter] ? collection[letter] += 1 : collection[letter] = 1; 
//     }

//     for (let i = 0; i < word2.length; i++) {
//         let letter = word2[i]; 

//         if (!collection[letter]) {
//             return false; 
//         } else {
//             collection[letter] -= 1; 
//         }
//     }

//     return true; 
// }

// //Using the Multiple Pointers pattern 
// let sortedArray = [-2, -1, 0, 1, 2]; 

// function findPairEqualToZero(sortedArray) {
//     let left = 0; 
//     let right = sortedArray.length - 1

//     while (left < right) {
//         let sum = sortedArray[left] + sortedArray[right]
//         if ( sum === 0) {
//             return [sortedArray[left], sortedArray[right]]
//         } else if (sum > 0) {
//             right--; 
//         } else {
//             left++
//         }
//     }
// }

// //Using the multiple pointers pattern, count the number of unique numbers in the array list 
// //e.g. [1, 1, 3] 2 unique numbers 

// let arraySample = [-2, -2, 0, 1, 1, 1, 3, 3, 5] 

// function countUniqueNumbers(array) {
//     //double for loop that has i and j where i and j are compared based on j's next index
//     //if i and j match, replace new index with j's value 

//     let uniqueNumbers = [array[0]]; 

//     let i = array[0];

//     for (let j = 0; j < array.length; j++) {
//         if (i !== array[j]) {
//             uniqueNumbers.push(array[j]); 
//             i = array[j] 
//         }
//     }

//     return uniqueNumbers.length; 
// }

// console.log(countUniqueNumbers(arraySample)); 

// //Find max sum on pairs of n 
//  let arrayNumbers = [1, 2, 3, 4, 4, 3, 5, 32]; 

//  function maxSubArraySum(arr, num) {
//      let max = 0; 
//      let temp = 0; 

//      if (arr.length < num) {
//          return null
//      }

//      for (let i = 0; i < num; i++) {
//          max += arr[i]; 
//      }

//      temp = max; 

//      for (let i = 0; i < arr.length; i++) {
//          temp = temp - arr[i - num] + arr[i]
//          max = Math.max(max, temp)
//      }

//      return max; 
//  }

//  //Divide and conquer algorithm 
//  //Find index of specified number in array

//  function search(array, val) {
//      let min = 0; 
//      let max = array.length - 1; 

//      while (min <= max) {
//          let middle = Math.floor((min + max) / 2); 
//          let currentElement = array[middle]; 

//          if (array[middle] < val) {
//              min = middle + 1 
//          } else if (array[middle] > val) {
//             max = middle + 1
//          } else {
//              return middle; 
//          }
//      }

//      return -1; 
//  }

 //Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. 

//  function sameFrequency(firstNumber, secondNumber) {
//      //Utilize the frequency counter 
//      let collection = {}; 

//      if (firstNumber.length !== secondNumber.length) {
//          return false; 
//      }

//      for (let i = 0; i < firstNumber.length; i++) {
//          if (!collection.hasOwnProperty(firstNumber[i])) {
//              collection[firstNumber[i]] = 1; 
//          } else {
//              collection[firstNumber[i]] += 1; 
//          }
//      }

//      for (let i = 0; i < secondNumber.length; i++) {
//          if (collection.hasOwnProperty(secondNumber[i])) {
//              collection[secondNumber[i]] -= 1; 
//          } else {
//              return false; 
//          }
//      }

//      return true; 

//  }

 //Implement a function called, areThereDuplicates which accepts a varialbe of arguments, and checks whether there
 //are any duplicates among the arguments passed in. You can solve this using the frequency pattern or the multiple pointers pattern. 
 // 1, 2, 3    is false 
 // 1, 2, 2, 3  is true 

//  function areThereDuplicates(array) {
//      //for loop using the multiple pointers pattern 

//      let collection = {}; 

//      for (let i = 0; i < array.length; i++) {
//          if (!collection.hasOwnProperty(array[i])) {
//              collection[array[i]] = 1;  
//          } else {
//              return false; 
//          }
//      }

//      return true; 
//  }

//  console.log(areThereDuplicates([1, 2, 3, 2]))

 //Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in 
 //this array where the average of the pair equals the target average. There may be more than one pair that matches the average target. 

 function averagePair(array, targetValue) {
    //Using multiple pointers, i and j, initialize at i and move j, add them together, check avg against target value, if false, move over to next j index. 
    //Once j is at the end, if it is still false, move i and j to the beginning again. 

    let i = 0; 
    let j = 1; 

    while (array.indexOf(array[i]) < array.length - 1) {
        if ((array[i] + array[j]) / 2 === targetValue) {
            return true; 
        } else if (array.indexOf(array[j]) === array.length - 1){
            i++; 
            j = i + 2;  
        } else {
            j++;  
        }
    }

    return false; 

 } 

 console.log(averagePair([1, 2, 2], 2)); 