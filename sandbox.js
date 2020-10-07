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

