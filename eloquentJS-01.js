//Eloquent Javascript
//02 Program Structure ==================================
/*
let num = Number(prompt("Pick a number"));

if (num < 10) {
    console.log(num, " seems Small");
} else if (num < 100) {
    console.log(" seems Medium");
} else {
    console.log(" seems Large");
}
*/
let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result);
// → 1024

/*
let yourName;
do {
    yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);
*/
result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
    result = result * 2;
}
console.log(result);
// → 1024

for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}
// → 21
//When continue is encountered in a loop body, control jumps out of the body and continues with the loop’s next iteration.
/*
switch (prompt("What is the weather like?")) {
    case "rainy":
        console.log("Remember to bring an umbrella.");
        break;
    case "sunny":
        console.log("Dress lightly.");
    case "cloudy":
        console.log("Go outside.");
        break;
    default:
        console.log("Unknown weather type!");
        break;
}
*/
//ex2.1
/*
var str1 = "";
for (let i = 0; i < 7; i++) {
    //str1 += "#";
    console.log(str1 += "#");
}
var str1 = "";
for (let i = 0; str1.length < 7; i++) {
    str1 += "#";
    console.log(str1.length,str1);
}
*/

/****** fajna wersja, niemoja
 * for (let line = "#"; line.length < 8; line += "#")
    console.log(line);
*/

//ex2.2
/*
for (let i = 0; i < 100; i++) {
    if ((i % 5 == 0) && (i % 3 == 0)) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);    
}*/

/****** fajna wersja, moja
for (let i = 1; i <= 100; i++) {
    console.log(i % 3 == 0 ? i % 5 == 0 ? "FizzBuzz" : "Fizz" : i % 5 == 0 ?"Buzz":i);
}
**********************************************/

//ex2.3
/****** fajna wersja, niemoja
let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
        if ((x + y) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}
console.log(board);
**********************************************/


//03 Functions ==================================

const power = function (base, exponent) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
};
console.log(power(3, 2));

let x = 10;
if (true) {
    let y = 20;
    var z = 30;
    console.log(x + y + z);
    // → 60
}
// y is not visible here
console.log(x + z);
// → 40

const halve = function (n) {
    return n / 2;
};
let n = 10;
console.log(halve(100));
// → 50
console.log(n);
// → 10

function square(x) {
    return x * x;
}



const hummus = function (factor) {
    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};
console.log(hummus(3));

/*
let launchMissiles = function () {
    missileSystem.launch("now");
};
if (safeMode) {
    launchMissiles = function () { }; //do nothing
}
*/

//************** Three ways


console.log(halve2(4))

//Definition:
const halve1 = function (n) {
    return n / 2;
};

console.log(halve1(2), halve2(4))

//Declaration:
function halve2(n) {
    return n / 2;
}

//Arrow:
const halve3 = (n) => {
    return n / 2;
};

console.log(halve1(2), halve2(4), halve3(6))
//***********************

function minus(a, b) {
    if (b === undefined) return -a;
    else return a - b;
}
console.log(minus(10));
// → -10
console.log(minus(10, 5));
// → 5

function power1(base, exponent = 2) {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result *= base;
    }
    return result;
}
console.log(power1(4));
// → 16
console.log(power1(2, 6));
// → 64

function wrapValue(n) {
    let local = n;
    return () => local;
}
let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
// → 1
console.log(wrap2());
// → 2

function multiplier(factor) {
    return number => number * factor;
}
let twice = multiplier(2);
console.log(twice(5));
// → 10

//recursion
function power2(base, exponent) {
    if (exponent == 0) {
        return 1;
    } else {
        return base * power2(base, exponent - 1);
    }
}
console.log(power2(2, 3));
// → 8

function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ||
                find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}
console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)

//Growing functions
function printZeroPaddedWithLabel(number, label) {
    let stringNumber = String(number);
    while (stringNumber.length < 3) {
        stringNumber = "0" + stringNumber;
    }
    console.log(`${stringNumber} ${label}`)
}
//printZeroPaddedWithLabel(6, "świnek");
function zeroPad(number, width) {
    let string = String(number);
    while (string.length < width) {
        string = "0" + string;
    }
    return string;
}

function printFarmInventory(cows, chickens, pigs) {
    let pad = String(Math.max(cows, chickens, pigs));
    console.log(`${zeroPad(cows, pad.length)} Cows`);
    console.log(`${zeroPad(chickens, pad.length)} Chickens`);
    console.log(`${zeroPad(pigs, pad.length)} Pigs`);
}
printFarmInventory(7, 160000, 3000);

//EXERCISES
//3.1 Minimum of 2
const min = (a, b) => Math.min(a, b);
console.log(min(0, 10));
// → 0
console.log(min(0, -10));


//3.2.Recursion
function isEven(a) {
    //let a = Math.abs(a1);
    //console.log("deb:", a, a1)
    if (a == 0) return true;
    else if (a == 1) return false;
    else if (a < 0) return isEven(-a);
    else return isEven(a - 2);
}

console.log(isEven(2));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

//3.3.Bean counting
var f1 = "abcd";
console.log(f1[2]);
//Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.
function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            counted += 1;
        }
    }
    return counted;
}
function countBs(string) {
    return countChar(string, "B");
}
function countCs(string) {
    return countChar(string, "C");
}
console.log("BBC", ": ", countBs("BBC"), countCs("BBC"));
console.log("BBCCCCCB", ": ", countBs("BBCCCCCB"), countCs("BBCCCCCB"));
