// number of years I've been alive
const myAge = 42
// years 1 & 2 in dog years
var earlyYears = 2
earlyYears = earlyYears *= 10.5
// number of years I've been alive less years 1 & 2
var laterYears = myAge - 2
// years 3 onward in dog years
laterYears = laterYears *= 4
// my total age in dog years
var myAgeInDogYears = earlyYears + laterYears
// making my name have only lowercase letters
var myName = ('Kristen'.toLowerCase()); 
// writing a complete sentence and inserting the variable info
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`); 
