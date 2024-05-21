// 1. Do the below programs in anonymous function & IIFE 

// a. Print odd numbers in an array. 

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let output_array = [];

let odd = function () {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) {
            output_array.push(arr[i]);
        }
    }
    console.log(output_array);
}();  // Output: [1, 3, 5, 7, 9]

// b. Convert all the strings to title caps in a string array.

let str = ["lorem ipsum is simply dummy text of the printing and typesetting industry."];

const titleCaps = (function (strings) {
    return strings.map(function (sentence) {
        return sentence.replace(/\b\w+/g, function (word) {
            const [firstChar, ...restChar] = word;
            return firstChar.toUpperCase() + restChar.join('').toLowerCase();
        });
    });
})(str);

console.log(titleCaps); // Output: ['Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry.']

// c. Sum of all numbers in an array. 

let input = [22, 55, 38, 47, 64, 95, 35, 44, 69];

let sum = function () {
    let j = 0;
    for (var i = 0; i < input.length; i++) {
        j = j + input[i];
    } console.log(j);
}(); // Output: 469

// d. Return all the prime numbers in an array.

let num = [22, 55, 41, 16, 8, 7, 23, 45, 6, 91];

const findPrimeNumbers = (function (arr) {
    const isPrime = function (num) {
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
    const output_number = arr.filter(function (num) {
        return isPrime(num);
    });
    return output_number;
})(num);
console.log(findPrimeNumbers);  // Output: [41, 7, 23]

// e. Return all the palindromes in an array.

const inputArray = ['peep', 'wow', 'mattress', 'keep', 'civic'];

const Palindromes = function (arr) {
    return arr.filter(function (str) {
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    });
}(inputArray);
console.log(Palindromes); //Output: ['peep', 'wow', 'civic']

//f. Return median of two sorted arrays of the same size. 

const arr1 = [11, 22, 33, 44];
const arr2 = [55, 66, 77, 88];

const median = function (arr1, arr2) {
    const mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    const n = mergedArray.length;
    const mid = n / 2;

    if (n % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[Math.floor(mid)];
    }
}(arr1, arr2);
console.log(median); // Output: 49.5

//g. Remove duplicates from an array.

const inputArr = [1, 2, 3, 4, 55, 44, 22, 1, 4, 56, 55, 44, 32, 1, 55];

const Duplicate = function (arr) {
    return arr.filter(function (item, index) {
        return arr.indexOf(item) === index;
    });
}(inputArr);
console.log(Duplicate); //Output: [1, 2, 3, 4, 55, 44, 22, 56, 32]

// h. Rotate an array by k times. 

const reversedArray = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

reverse = function (arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
};

var rotate = function (reversedArray, k) {
    reverse(reversedArray, 0, reversedArray.length - 1);
    reverse(reversedArray, 0, k - 1);
    reverse(reversedArray, k, reversedArray.length - 1);
}(reversedArray, 5)

console.log(reversedArray); //Output: [16, 17, 18, 19, 20, 11, 12, 13, 14, 15]

