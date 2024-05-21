//  2. Do the below programs in arrow functions

//  a. Print odd numbers in an array. 

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 10, 12, 13, 14, 15, 16, 17, 18, 19];

let odd = () => {
    let odd = arr.filter(num => num % 2 == 1);
    console.log(odd);
}
odd(); // Output: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

// b. Convert all the strings to title caps in a string array.

const stringArray = ["neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit"];

const titleCapsArray = stringArray.map((str) => {
    return str.replace(/\b\w+/g, function (word) {
        const [firstChar, ...restChar] = word;
        return firstChar.toUpperCase() + restChar.join('').toLowerCase();
    });
});
console.log(titleCapsArray); // Output: ['Neque Porro Quisquam Est Qui Dolorem Ipsum Quia Dolor Sit Amet, Consectetur, Adipisci Velit']

// c. Sum of all numbers in an array. 

let input = [2, 5, 8, 7, 6, 9, 3, 4, 6];

let sum = () => {
    let j = 0;
    for (var i = 0; i < input.length; i++) {
        j = j + input[i];
    } console.log(j);
}
sum(); // Output: 50

// d. Return all the prime numbers in an array.

let num = [22, 55, 41, 16, 8, 7, 23, 45, 6, 91, 17];

const findPrimeNumbers = (arr) => {
    const isPrime = (num) => {
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
    const num = arr.filter((num) => {
        return isPrime(num);
    });
    return num;
};
const result = findPrimeNumbers(num);
console.log(result); // Output: [41, 7, 23, 17]

// e. Return all the palindromes in an array.

const inputArray = ['mom', 'hello', 'madam', 'world', 'noon', 'moon'];

const Palindromes = (arr) => {
    return arr.filter((str) => {
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    });
};
const output = Palindromes(inputArray);
console.log(output); //Output: ['mom', 'madam', 'noon']
