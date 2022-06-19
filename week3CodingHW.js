// Avery Doyle week3 coding assignement
// Question 1a

var ages = [3, 9, 23, 64, 2, 8, 28, 93];
firstAndLastSub = ages[ages.length - 1] - ages[0];
console.log(firstAndLastSub);
// 90


// Question 1b

ages.push(43);
firstAndLastSub = ages[ages.length - 1] - ages[0];
console.log(firstAndLastSub);
// 40


// Question 1c

var sum = 0;
for(var number of ages){
    sum += number;
}
average = sum / ages.length;
console.log(average);
// 30.333333333333332


// Question 2a 

var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
// console.log(names);
var average = 0

for(let i = 0;i < names.length; i++){
    console.log(average += names[i].length);
}
average/=names.length;
console.log(average);
// 3.8333333333333335

// Question 2b 
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
console.log(names.join(' '));

// Question 5

var nameLengths = [];
for(let i = 0;i < names.length; i++){
   nameLengths[ (names[i].length)];
   nameLengths.push(names[i].length);
}
console.log(nameLengths);
// (6) [3, 5, 3, 5, 4, 3]


// Question 6 

var sum = 0;
for(let i = 0;i < nameLengths.length; i++){
    sum += nameLengths[i];
}
console.log(sum);
// 23


// Question 7 need help!!!!!!!!Write a function that takes two parameters, 
// word and n, as arguments and returns the word concatenated to itself n number of times. 
// (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function wordConCat(word, n){
    console.log(word * n);
}
wordConCat('yes', 3);

// Question 8
function fullName(firstName, lastName){
    console.log(firstName + ' ' + lastName);
}
fullName('Avery', 'Doyle');
// Avery Doyle

// Question 9

function trueArray(array){
    for (let i = 0; i < ages.length; i++) {
        sumAges += ages[i];
    }if ((sumAges/=ages.length) < 100) {
        console.log("true")
    }
}
var ages = [7, 11, 41, 42];
let sumAges = 0;
let averageAges = 0;
trueArray(ages);
// true


// Question 10 

function finalAvgFunction(array){
   let finalAverage = array.reduce((a,b) => a + b, 0) / array.length;
    console.log(finalAverage);
}

finalArray = [3, 5, 93, 53, 16, 7, 35]
finalAvgFunction(finalArray);
// 30.285714285714285


// Question 11 

function compareFunction(array1, array2){
    let array1Avg = array1.reduce((a,b) => a + b, 0) / array1.length;
    console.log(array1Avg);
    let array2Avg = array2.reduce((a,b) => a + b, 0) / array2.length;
    console.log(array2Avg);
        if (array1Avg > array2Avg){
        console.log("true");
    }
}

aAA = [0, 15, 67, 109]
bBB = [5, 6, 7, 8, 9]
compareFunction(aAA,bBB);
// 47.75
// 7
// true


// Question 12 

function willBuyDrink(boolean, number){
    if((boolean === true) && (number > 10.5)){
        console.log("true");
    } 
}   

let isHotOutside = true;
let moneyInPocket = 12

willBuyDrink(isHotOutside, moneyInPocket);
// true

// Question 13 Create a function of your own that solves a problem. 
// In comments, write what the function does and why you created it.