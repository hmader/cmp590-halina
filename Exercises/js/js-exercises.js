//--- Javascript Exercises ---//
//======================================================================
//----------------------------------------------------------------------
//-- 1.
console.log("Exercise 1");

function max(num1, num2) {
    if (num1 > num2) {
        console.log(num1);
        //return num1;
    } else {
        console.log(num2);
        //return num2;
    }
}

max(4, 6);

//======================================================================
//----------------------------------------------------------------------
//-- 2.
console.log("Exercise 2");

function maxOfThree(num1, num2, num3) {
    console.log(Math.max(num1, num2, num3));
}

maxOfThree(5, 4, 8);

//======================================================================
//----------------------------------------------------------------------
//-- 3.
console.log("Exercise 3");

function isVowel(char) {
    switch (char) {
    case "a":
        console.log("true");
        break;
    case "e":
        console.log("true");
        break;
    case "i":
        console.log("true");
        break;
    case "o":
        console.log("true");
        break;
    case "u":
        console.log("true");
        break;
    default:
        console.log("false");
        break;
    }
}

isVowel("l");

//======================================================================
//----------------------------------------------------------------------
//-- 4.
console.log("Exercise 4");

function translate(word) {

    var myString;
    var stringArray;

    stringArray = word.split(""); // puts word into array
    myString = stringArray[0]; // takes first letter and saves
    stringArray.shift(); // deletes first element in array
    stringArray.push(myString); // pushes the first letter to the end of array
    stringArray.push("ay"); // pushes piglatin rule
    myString = stringArray.join(""); // joins array into string
    console.log(myString);
}

translate("deer");

//======================================================================
//----------------------------------------------------------------------
//-- 5.
console.log("Exercise 5");

function sum(array) {
    var sum = 0;

    if (array.length > 1) {
        for (i = 0; i < array.length; i++) {
            sum += array[i];
        }
        console.log(sum);
    } else {
        console.log(array[0]);
    }
}

sum([7]);

//----------------------------------------------------------------------
//-- 5.
console.log("Exercise 5");

function multiply(array) {
    var product = 1;

    if (array.length > 1) {
        for (i = 0; i < array.length; i++) {
            product *= array[i];
        }
        console.log(product);
    } else {
        console.log(array[0]);
    }
}

multiply([9, 3]);

//======================================================================
//----------------------------------------------------------------------
//-- 6.
console.log("Exercise 6");

function reverse(string) {

    var reverse = string.split("");
    reverse = reverse.reverse();
    reverse = reverse.join("");
    /*
    var correct = string.split("");
    var reverse = [" "];

    for (i = correct.length - 1; i > 0; i--) {
        reverse.push(correct[i]);
    }
reverse.shift();
    reverse = reverse.join("");
    */

    console.log(reverse);
}

reverse("giggle");

//======================================================================
//----------------------------------------------------------------------
//-- 7.
console.log("Exercise 7");

function maxRando() {
    var maxRando = Math.max(Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1), Math.floor((Math.random() * 100) + 1));

    console.log(maxRando);
}

maxRando();

//======================================================================
//----------------------------------------------------------------------
//-- 8.
console.log("Exercise 8");

function longest(array) {

    var longest = array[0];

    if (array.length == 1) {
        console.log(array[0]);
    } else {

        for (i = 0; i < array.length; i++) {
            if (array[i].length > longest.length) {
                longest = array[i];
            }
        }
    }
    console.log(longest);
}

longest(["hello", "I", "am", "a", "purple", "fuzzy", "dog"]);

//======================================================================
//----------------------------------------------------------------------
//-- 9.
console.log("Exercise 9");

function filterLongWords(array, num) {

    var longOnes = [""];

    for (i = 0; i < array.length; i++) {
        if (array[i].length > num) {
            longOnes.push(array[i]);
        }
    }
    longOnes.shift();
    console.log(longOnes);
}

filterLongWords(["hello", "I", "am", "a", "purple", "fuzzy", "dog"], 3);

//======================================================================
//----------------------------------------------------------------------
//-- 10.
console.log("Exercise 10");

function charFreq(toCount) {
    console.log("string: '" + toCount + "'");
    // ASCII code range - #32 - #126
    //- create an arrray of length 94 - one for each printable character
    //- split the string toCount into an array of characters
    //- iterate through the array and increment array position in corresponding 
    // character - be sure to shift codes appropirately
    var charArray = [0];
    toCount = toCount.split("");

    for (i = 0; i < 93; i++) {
        charArray.push(0);
    }

    for (i = 0; i < toCount.length; i++) {
        charArray[(toCount[i].charCodeAt(0)) - 32] += 1;
    }



    //-- Just to print the string: 

    var printString = "counts:\n";

    for (i = 0; i < charArray.length; i++) {
        var char = String.fromCharCode((i + 32));
        var count = charArray[i];
        if (charArray[i] != 0) {
            printString += "'";
            printString += char;
            printString += "'";
            printString += " : ";
            printString += count;
            printString += "\n";
        }
    }
    console.log(printString);
    //---
}

charFreq("Hey there good lookin'");