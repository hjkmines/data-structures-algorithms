//Built in object methods 
let object1 = {
    name: 'Tony'
}

object1.keys(object1)
object1.values(object1)
object1.hasOwnProperty('name')

//Built in array methods 

let array1 = [
    'tony', 
    'james'
]

array1.push('john'); 
array1.pop('john'); 
array1.unshift('john');
array1.shift('john');
array1.concat('john'); 
array1.slice(0,1); 
array1.splice(0,2); 
array1.sort(); 
array1.forEach
array1.map(element => {
    console.log(element)
})
array1.reduce((sum, element) => {
    sum + element 
}); 

//example: 
let array2 = [
    1, 
    2, 
    3
]

array2.slice(0, 2) //returns [1, 2]

array2.splice(1) //returns [2, 3]

array2.splice(0, 1) //returns [2, 3]

//.split()

let word = 'hello tony'; 

word.split(''); //returns ["h", "e", "l", "l", "o", " ", "t", "o", "n", "y"]
word.split(' '); // returns ['hello', 'tony']
word.split(','); //returns ['hello tony']

//.join()
let word1 = word.split('') //returns ["h", "e", "l", "l", "o", " ", "t", "o", "n", "y"]

word1.join(''); //returns 'hello tony'
word1.join(' '); //returns 'h e l l o t o n y'
word1.join(','); //returns 'h,e,l,l,o, t,o,n,y'

let word2 = word.split(' ') // returns ['hello', 'tony']

word2.join(''); //returns 'hellotony'
word2.join(' ') //returns 'hello tony'
word2.join(',') //returns 'hello,tony; 

//Write a function which takes two numbers and returns their sum 
function sum(n, m) {
    return n + m 
}

//TOPIC 1: DO YOU UNDERSTAND THE PROBLEM?
//Can I restate the problem in my own words?
//What are the inputs that go into the problem?
//What are the outputs that should come from the solution to the problem?

//TOPIC 2: Concrete examples

//Challenge 2: 
let characters = 'Your PIN is 1234';  

function charCount(str) {
    //make object to return at end 
    //loop over string, make new key for letter or number if it doesn't exist already, if it already exists, inc one up.
    //if it is a space, period, etc. don't count it  
    //return object at end 

    let charObject = {}; 

    let arrayOfChars = str.split('') //['y', 'o', ...]
    
    for (let i = 0; i < arrayOfChars.length; i++) {
        if (typeof arrayOfChars[i] === String) {
            arrayOfChars[i].toLowerCase(); 
        }
        
        if (charObject.hasOwnProperty(arrayOfChars[i])) {
            charObject.arrayOfChars[i] += 1; 
        } else {
            charObject.arrayOfChars = 1; 
        }
    }
    return charObject; 
}

//Anagrams check, given two strings, write a function to determine if the second string is an anagram of the first. 
let firstWord = 'hello'; 
let secondWord = 'elloh'; 

function checkAnagram(word1, word2) {
    //create new objects to count the frequency of each word 
    //compare the count between the objects 
    //if the frequency are the same, return true, else false 

    let firstObject = {}; 
    let secondObject = {}; 
    let firstArray = word1.split(''); 
    let secondArray = word2.split(''); 

    for (let i = 0; i < firstArray.length; i++) {
        if (firstObject.hasOwnProperty(firstArray[i])) {
            firstObject.firstArray[i] += 1; 
        } else {
            firstObject.firstArray[i] = 1; 
        }
    }

    for (let i = 0; i < secondArray.length; i++) {
        if (secondObject.hasOwnProperty(secondArray[i])) {
            secondObject.secondArray[i] += 1; 
        } else {
            secondObject.secondArray[i] = 1; 
        }
    }

    
}