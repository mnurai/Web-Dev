"use strict"
alert("I am JS")
alert("Hello")
alert("World") // a comment
/*
a comment too
 */
// try hotkeys
/*
try
hotkeys*/
let message;
message = "practice";
alert (message);
let admin
let name = "John"
admin = name;
alert(admin);
let earth;
let username;
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

let name = "Ilya";

alert( `hello ${1}` );

alert( `hello ${"name"}` );

alert( `hello ${name}` );

let name = prompt("What is your name?");
alert( name );

let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1

if( a == 1 ){
    alert ("it is 1");
    alert("same")
}

let year = 2026
let cond = (year == 2026) ? "true" : "false";

let age = prompt('age?', 18);
let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello!' :
        (age < 100) ? 'Greetings!' :
            'What an unusual age!';
alert( message );

let value = prompt("whats the name of JS",'')
if (value == "ECMAScript"){
    alert("right")
}
else{
    alert("You don't know? ECMAScript!");
}

let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
    alert( 'The office is closed.' );
}

let i = 0;
while (i < 3) {
    alert( i );
    i++;
}

outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {

        let input = prompt(`Value at coords (${i},${j})`, '');
        if (!input) break outer;
    }
}

alert('Done!');

let a = 2 + 2;

switch (a) {
    case 3:
        alert( 'Too small' );
        break;
    case 4:
        alert( 'Exactly!' );
        break;
    case 5:
        alert( 'Too big' );
        break;
    default:
        alert( "I don't know such values" );
}

let a = 3;

switch (a) {
    case 4:
        alert('Right!');
        break;

    case 3:
    case 5:
        alert('Wrong!');
        alert("Why don't you take a math class?");
        break;

    default:
        alert('The result is strange. Really.');
}
let userName = 'John';

function showMessage() {
    userName = "Bob";

    let message = 'Hello, ' + userName;
    alert(message);
}

alert( userName );

showMessage();

alert( userName );

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
} else {
    alert( pow(x, n) );
}

function sayHi() {
    alert( "Hello" );
}

let func = sayHi;

func();
sayHi();

let sum = (a, b) => a + b;
alert( sum(1, 2) );