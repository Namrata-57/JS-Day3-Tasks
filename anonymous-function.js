// 1. Do the below programs in anonymous function & IIFE 

//  a. Print odd numbers in an array. 

let arr=[0,1,2,3,4,5];
let output_array = [];

let odd = function() {
    for(var i =0; i < arr.length; i++){
        if(arr[i]%2 ===1){ 
            output_array.push(arr[i]);
          }
    }
    console.log(output_array);
};
odd();

// b. Convert all the strings to title caps in a string array.

let Array = ["convert all the strings to title caps in a string array"];

let titleCase = Array.map(function (str){
    return str.replace(/\b\w+/g, function (caps){
    return caps.charAt(0).toUpperCase() + caps.substr(1).toLowerCase();
    })
})
console.log(titleCase);

// c. Sum of all numbers in an array. 

let input = [222,5,81,72,656,90,346];

let sum = function() {
let j = 0;
for(var i = 0; i < input.length; i++){
    j = j + input[i];
} console.log(j);
}
sum();

// d. Return all the prime numbers in an array.
 
let num = [22,55,41,16,8,7,23,45,6,91];

const findPrimeNumbers = function(arr){
    const isPrime = function(num){
        if (num < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };
    const num = arr.filter(function(num){
        return isPrime(num);
    });
    return num;
};
const result = findPrimeNumbers(num);
console.log(result);

// e. Return all the palindromes in an array.

const inputArray = ['level', 'greet', 'might', 'refer'];

const Palindromes = function(arr) {
    return arr.filter(function(str) {
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    });
};
const output = Palindromes(inputArray);
console.log(output);

//f. Return median of two sorted arrays of the same size. 
    
const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

const median = function(arr1, arr2) {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const n = mergedArray.length;
    const mid = n / 2;

    if (n % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[Math.floor(mid)];
    }
};
const medianOutput = median(arr1, arr2);
console.log(medianOutput);

//g. Remove duplicatesfrom an array.
 
const inputArr = ['A', 'B', 'C', 'D', 'E', 'F', 'A', 'B', 'E'];

const Duplicate = function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
};
const output1 = Duplicate(inputArr);
console.log(output1);

 // h. Rotate an array by k times. 

const reversedArray = [1,2,3,4,5];

reverse = function(arr, start, end){
  while(start < end){
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }};

var rotate = function(reversedArray, k){
  reverse(reversedArray, 0 , reversedArray.length-1);
  reverse(reversedArray, 0, k-1);
  reverse(reversedArray, k, reversedArray.length-1);
}

rotate(reversedArray, 2);
console.log(reversedArray); 
