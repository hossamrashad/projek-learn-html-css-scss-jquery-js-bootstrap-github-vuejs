/*jslint plusplus: true, evil: true */
/* global document, console, alert, prompt*/
// jslint plusplus: true for error for ++
// evil: true for error document.write

/*
 *
 * document.write("<p>Hello from file</p>");
 * var firstName = "Hossam";
 * document.getElementById("test").innerHTML = firstName; // Simple Function
 * // Single Line Comment
 * /* Multi Line Comment Line 1
 * .innerHTML =
 *
 * ********************* Data Type ************************
 *
 * Boolean: true , false;
 * array ["Hossam", "rashad", "ahmed"];
 * object = {first: "hossam", lastName: "Rashad"};
 * string = "Lorem ipsum dolor sit.";
 * undefined
 * Null
 * NaN = not Anumber
 * symbol
 * ---- typeof ------ typeof var;
 *
 * --------------- Output To Screen ----------
 * 1 alert
 * 2 document.write();
 * 3 innerHTML
 * 4 console
 *
 *
 *  -------- operators --------
 *   + - * /
 *   %
 *   ++
 *   --
 *
 *
 * ------------------ Conditional Operators ----------
 * > اكبار من
 * < اصغر من
 * >= اكبار من او يساوى
 * <= اصغار من او تساوى
 * == يساوى القيمة
 * === يساوى القيمة و نوع الداتا تيب
 *
 *
 *
 * ----------- function -------------
 * function functionName() {
 *
 * "use strict";
 *
 * alert("Hossam Rashad");
 *
 * return Thing;
 *
 * }
 * functionName(); علشان تشغال الفنكشان طلقاي
 *
 * Math.random(); بطالع رقام عشواء
 *
 * event window onload
 * event button onclick | ondblclick
 * Event input  onkeyup | onkeypress | onkeydown | onchange
 * Event mouse  onmouseover | onmouseleave | onmousedown
 * window.onload = in Jquery $(document).ready();
 * window.load = ساعت ما الصفحة تحامل
 * window.onload = function(){}
 *
 *  ---------- Array ------------
 * var ArrayName = ["Hassan", "Soha", "Ahmed", "Zahra", "Hind"];
 *
 * if (Array.isArray(ArrayName)) {}
 * if (ArrayName.constructor === Array) {}
 *
 * عدد الحروف فى العنصار
 * ArrayName.length; بجيب عدد عناصر الاراى
 * ArrayName.length = 3 ; بطبع 3 عناصر من الاراى
 *
 * لو عاوز اخالى الاراى استرانج
 * toString(); toLocaleString();
 *
 * لو عاوز اطباع التاريخ
 * var date = new Date();
 * toString(); toLocaleDateString();
 *
 * لو عاوز اجمع الاراى و كمان اغير الكومة اللى هى افتراضى لحاجة تانية
 * join(" ");
 *
 * add In Array
 * ArrayName[4] = "abboud";
 * ArrayName[ArrayName.length] = "Hegazy";
 * ArrayName.push("hegazy");
 * فى اخار الاراى
 * ArrayName.unshift("Cayan");
 * ArrayName.splice(2, ArrayName.length, "Rashad");
 * ArrayName.splice(2, 0, "Rashad");
 *
 * Remove Items From Array
 * .splice(3, 1);
 * بيحزاف اخار عنصر فى الاراى
 * ArrayName.pop();
 * بيحزاف  اول  عنصر فى الاراى
 * ArrayName.shift();
 *
 * ترتيب الاراى
 * ArrayName.sort(); ترتيب ابجدى
 * ArrayName.reverse(); ترتيب معكوس
 *
 *
 * طريقة البحث فى الاراى
 * indexOf ('array-item-search') | indexOf('array-item-search', 5)
 * lastIndexOf ('array-item-search') | indexOf('array-item-search', 5)
 *
 *
 *
 *
 *
 *
 *
 */

document.write("<p>Hello from file</p>");

/**
 *
 *  innerHTML   هو انو العنصار المختار يساوى الحاجة اللى انت بتكتبها
 *
 *
 *
 */
// video 5 JavaScript Syntax

// some vers

var //some vers
  x = 15,
  s = 15,
  firstName = "Hossam";
document.getElementById("video-5").innerHTML = " var number = " + x;
document.getElementById("video-51").innerHTML = "var string = " + firstName;
if (x + s === 30) {
  document.getElementById("video-52").innerHTML =
    "if number 10 + 15  =  30 " + " yes it is = " + (x + s);
} else {
  document.getElementById("video-52").innerHTML =
    "if number 10 + 15  =  " + (x + s);
}
// video 7
/*
  Start With Letters, Underscore, $
  var = Javascript Variable Keyword
  myPrice = Variable Name
  ( = ) = Assignment Operator
  100 = Variable Value
*/

var mainPrice = 450,
  mySmallDiscount = 50,
  myMediumDiscount = 100,
  myBigDiscount = 250;

document.getElementById("video-7").innerHTML = mainPrice;
document.getElementById("video-71").innerHTML = mainPrice - mySmallDiscount; // 450 - 50 = 400
document.getElementById("video-72").innerHTML = mainPrice - myMediumDiscount; // 450 - 100 = 350
document.getElementById("video-73").innerHTML = mainPrice - myBigDiscount; // 450 - 250 = 200
// video 8
// data type
/** typeof بيعرافك نوع العنصر من انواع الدات تيب
 * Boolean: true , false;
 * array ["Hossam", "rashad", "ahmed"];
 * object = {firstnName: "hossam", lastName: "Rashad"};
 * string = "Lorem ipsum dolor sit amet.";
 * undefined
 * Null
 * NaN = not Anumber
 * symbol
 */
var // Boolean
  hasdiscount = true;
if (hasdiscount == true) {
  var mainprice = 400;
} else {
  var mainprice = 450;
}
document.getElementById("video-8").innerHTML = mainprice;
/**
 * array
 * fileName طريقة طباعة جميع العناصر اللى فى الاراى
 * fileName[0] طريقة طباعة عنصر محدد من الاراى
 */
// array = ["Hossam", "rashad", "ahmed"];
var fileName = ["Hossam", "rashad", "ahmed"];
document.getElementById("video-81").innerHTML = fileName;
document.getElementById("video-82").innerHTML = fileName[0];
/**
 * object= { firstnName: "hossam", lastName: "Rashad" };
 * info
 * info.lastName الطريقة الصحيصة للطباعة من الابجاكت
 */
var info = {
  firstnName: "hossam",
  lastName: "Rashad",
};
document.getElementById("video-83").innerHTML = info;
document.getElementById("video-84").innerHTML = info.lastName;
/**
 *string النصوص
 *string  "Lorem ipsum 'dolor' sit .";
 */
var lorem8 = "Lorem ipsum 'dolor' sit .";
document.getElementById("video-85").innerHTML = lorem8;
/**
 * number = 29;
 */
var age8 = 29;
document.getElementById("video-86").innerHTML = age8;
//console.log(typeof age8);
document.getElementById("video-87").innerHTML = typeof age8;
/************************************ */
// video 9 Concatenation
var video9Name = "Hossam",
  video9Age = 30,
  video9Country = "Egypt";

document.getElementById("video-9").innerHTML =
  "My Name Is: " +
  video9Name +
  "<br>" +
  "My Age Is: " +
  " <span style='color: blue;font-size: 50px;'>" +
  video9Age +
  "</span>" +
  "<br>" +
  "My Country Is: " +
  video9Country;
//video 10 Output To Screen
// output data to screen
/**
 * Output To Screen
 * 1 alert
 * 2 document.write();
 * 3 innerHTML
 * 4 console
 */

var video10Name = "Hossam",
  video10myAge = 30,
  video10Div = document.getElementById("video-10");

alert("Hello My Name Is " + video10Name + " And My Age Is " + video10myAge);

document.write(
  "Hello My Name Is " + video10Name + " And My Age Is " + video10myAge
);

video10Div.innerHTML =
  "Hello My Name Is " + video10Name + " And My Age Is " + video10myAge;

console.log(
  "Hello My Name Is " + video10Name + " And My Age Is " + video10myAge
);
/******************************* */
// video 11
/**
 * operators
 *  + - * /
 * %
 * ++
 * --
 */
// Addition +
var x = 100,
  y = 200,
  z = x + y; // z = 100 + 200 = 300

// Subtraction -
var x = 1000,
  y = 150,
  z = x - y; // z = 1000 - 150 = 850

// String And Number

var x = "Hossam",
  y = 150,
  z = x - y; // z = "Hossam" - 150 = NAN

// Divide /

var x = 1000,
  y = 150,
  z = x / y;

// Multiplication *

var x = 1000,
  y = 20,
  z = x * y; // z = 1000 * 20 = 20000

// Modulus %

var x = 20,
  y = 2,
  z = x % y; // z = 20 % 2 = 0

document.getElementById("video-11").innerHTML = z;

// Increment

var myCounter = 1;

document.getElementById("video-111").innerHTML = myCounter++;
/********************** */
// video 12

// if | else | else if
/*

============
== Syntax ==
============

if (Condition 1) {

} else if (Condition 2) {

} else {

   Other Than Condition 1 Or 2

}

*/

var ticketPrice = 2000; // Ticket Price Variable

if (ticketPrice < 1500) {
  // If The Ticket Cheaper Than 1500
  // Display Message That Its Cheap
  console.log("This Is Cheap");
  document.getElementById("video-12").innerHTML = "This Is Cheap";
} else if (ticketPrice == 2000) {
  // If Ticket Price Is 2000
  // Display Message That Its Good
  console.log("Yes Its Good Price");
  document.getElementById("video-12").innerHTML = "Yes Its Good Price";
} else {
  // Display Message That Its Expensive
  console.log("No Its Expensive");
  document.getElementById("video-12").innerHTML = "No Its Expensive";
}

// Test Prompt

var video12yourAge = prompt("Whats Your Age?");

if (video12yourAge < 18) {
  document.getElementById("video-121").innerHTML =
    "Sorry Ur Age Is " + video12yourAge + " U R Not Allowed Here";
} else {
  document.getElementById("video-121").innerHTML =
    "Sorry Ur Age Is " + video12yourAge + " U R Welcome Here";
}
var ticketPrice = 2000;

if (ticketPrice < 1500) {
  document.getElementById("video-122").innerHTML = 1500;
} else if (ticketPrice == 2000) {
  document.getElementById("video-122").innerHTML = 2000;
} else {
  document.getElementById("video-122").innerHTML = "i Don't Have many";
}
/*********************************** */
// video 13
/**
 * > اكبار من
 * < اصغر من
 * >= اكبار من او يساوى
 * <= اصغار من او تساوى
 * == يساوى القيمة
 * === يساوى القيمة و نوع الداتا تيب
 */
/*
  ( = ) Assignment Operator
  ( == ) Equal Comparison Operator
  ( === ) Identical Operator
*/

var video13myPrice = 40;

if (video13myPrice > 50) {
  alert("Sorry The Price Is " + video13myPrice + " And All I Have Is 50");
  document.getElementById("video-13").innerHTML =
    "Sorry The Price Is " + video13myPrice + " And All I Have Is 50";
} else {
  alert("Good The Price Is " + video13myPrice + " And I Have Is 50");
  document.getElementById("video-13").innerHTML =
    "Good The Price Is " + video13myPrice + " And I Have Is 50";
}

// Test ==

var video131myPrice = "50";

if (video131myPrice == 50) {
  alert("Good");
  document.getElementById("video-131").innerHTML = "good";
} else {
  alert("Bad");
  document.getElementById("video-131").innerHTML = "bad";
}

// Test ===

var video13hossam = "50"; // Data Type Is String

if (video13hossam === 50) {
  // Data Type Is Number

  alert("Good");
  document.getElementById("video-132").innerHTML = "good";
} else {
  alert("Bad");
  document.getElementById("video-132").innerHTML = "bad";
}
/*************************************** */
// video 14
/**
 * ( ! ) Not
 * ( != ) Not Equal
 * ( === ) Identical Operator
 * ( && ) And
 * ( || ) Or
 * ! لا
 * != لا تساوء
 * !== لا تساوى القيمة و لا تساوى الدات تيب
 * &&      =  and
 * ||      =  or
 */
// Not Equal

var video14age = "50"; // Data Type Is String

if (video14age != 50) {
  // Data Type Is Number

  alert("Good");
  document.getElementById("video-14").innerHTML = "!= Good Not Equal";
} else {
  alert("Bad");
  document.getElementById("video-14").innerHTML = "!= bad Not Equal";
}

// Not Identical

var video141age = "32"; // Data Type Is String

if (video141age !== 32) {
  // Data Type Is Number

  alert("Good");
  document.getElementById("video-141").innerHTML = "!==  Identical";
} else {
  alert("Bad");
  document.getElementById("video-141").innerHTML = "!== Not Identical";
}

// Advanced Example

var video142name = "Hossam",
  video142age = "32";

if (video142age == 32) {
  alert("Good Age");
  document.getElementById("video-142").innerHTML = "Good Age";
} else if (video142name == "Hossam") {
  alert("Good Name");
  document.getElementById("video-142").innerHTML = "Good Name";
} else {
  alert("Bad");
  document.getElementById("video-142").innerHTML = "bad Name & age";
}

// Second Example

var video143name = "hossam",
  video143age = "32",
  video143address = "KSA";

if (video143age == 32 && video143name == "hossam" && video143address == "KSA") {
  alert("Good");
  document.getElementById("video-143").innerHTML = "Good";
} else {
  alert("Bad");
  document.getElementById("video-143").innerHTML = "Bad";
}

// Second Example With Comments And Edits

var video144name = "hossam",
  video144age = 32,
  video144address = "KSA";

if (
  video144age === 32 && // If The Age Value = 32 And Data Type Is Number Then True
  video144name == "hossam" && // If The Name Value Is Osama And Data Type Is String Then True
  video144address == "KSA" // If The Address Value Is KSA And Data Type Is String Then True
) {
  alert("Good Your Name Is " + name);
  document.getElementById("video-144").innerHTML = "Good Your Name Is " + name;
} else {
  alert("Bad");
  document.getElementById("video-144").innerHTML = "Bad Your Name Is " + name;
}

// Testing || Or

// Second Example With Comments And Edits

var video145name = "Ahmed",
  video145age = 33,
  video145address = "Egypt";

if (
  video145age === 32 ||
  video145name === "Hassan" ||
  video145address === "Egypt"
) {
  alert("Good");
  document.getElementById("video-145").innerHTML = "good";
} else {
  alert("Bad");
  document.getElementById("video-145").innerHTML = "bad";
}
/*********************** */
// video 15
// function
/*
  function = Function Keyword in JavaScript
  sayHi = Function Name
*/
function sayHi15() {
  "use strict";

  alert("Hello From Function");

  document.getElementById("video-15").innerHTML = "Hello From Function";
}
// First Example

function sayHi151() {
  "use strict";

  var video151myName = "Hossam";

  if (video151myName === "Hossam") {
    alert("Hello " + video151myName + " From Inside The Function");

    document.getElementById("video-151").innerHTML = "Hello From Function";
  }
}

sayHi151();

// Second Example

function sayHi152() {
  "use strict";

  var video152myName = "Sayed";

  if (video152myName === "Osama") {
    alert("Hello " + video152myName + " You Are Welcome");
  } else {
    alert("Hello " + video152myName + " You Are Not Welcome");
  }
}
sayHi152();

// document.getElementById("video-15").innerHTML = sayHi15();
// sayHi15(); لو عاوز تشاغال الفانكشان تلقاى

/********************** */
// video 16
// return
function video16myInfo() {
  "use strict";

  var myInfo = "haitham",
    myAge16 = 29;

  return myInfo + " " + myAge16;
}
document.getElementById("video-16").innerHTML = video16myInfo();
// First Example

function video161() {
  "use strict";

  var video161name = "Hossam",
    video161age = 30;

  return video161age + 20;
}
var video161var = video161();

document.getElementById("video-161").innerHTML = video161var;

// Second Example => Your Age In Days

function video162myAgeInDays() {
  "use strict";

  var video162myAge = 32;

  return video162myAge * 365;
}

var daysCalc = video162myAgeInDays();

document.getElementById("video-162").innerHTML =
  "Your Age In Days = " + video162myAgeInDays() + " Days.";

// Third Example => Your Age In Hours

function myAgeInHours() {
  "use strict";

  var myAge = 32;

  return myAge * 365 * 24;
}

var hoursCalc = myAgeInHours();

document.getElementById("video-163").innerHTML =
  "Ur Age In Hours = " + hoursCalc + " Hours.";

/**************************/
// video 17
// parameters

function video17myAgeInDays(video17myAge) {
  "use strict";

  return "your age in days " + video17myAge * 365;
}

document.getElementById("video-17").innerHTML = video17myAgeInDays(10);

function video171myFillName(firstNamem, lmiddleNmae) {
  "use strict";

  return firstNamem + " " + lmiddleNmae;
}

document.getElementById("video-171").innerHTML = video171myFillName(
  "haitham",
  "rashad"
);

/***************************** */
// video 18

// function self invoke

// Math.random(); بطالع رقام عشواء

document.getElementById("video-18").innerHTML = Math.random();

// self invoke علشان اشغال الفانكششان تلقائى

(function video181myFunc() {
  "use strict";

  alert("FUNCTION self invoke");
})();

/**
 * الفكرة انو يكون عندى حقل ادخال اخالى اللى يتكتب فية
 * يطلع فى داف و يكون القيمة مضروبة فى رقم
 * isNaN معناها لا تساوى رقام
 */
function dollar() {
  "use strict";
  var amount = document.getElementById("video-182-input-dollar").value,
    result = amount * 3.5,
    video182 = document.getElementById("video-182");
  // الحقل مينفعش يكون فاضى
  if (amount === "") {
    video182.innerHTML = "the input it is empty";
    // مينفعش يكون كلام
  } else if (isNaN(amount)) {
    video182.innerHTML = "the input for number only";
    // مينفعش يكون سفر
  } else if (amount === "0") {
    // غير كدا احساب القيمة
    video182.innerHTML = "can't calck 0";
    // القيمة مينفعش تكون بالسالب
  } else if (amount < 0) {
    video182.innerHTML = " the value must not be negative number";
  } else {
    video182.innerHTML = amount + " * 3.75 " + " = " + result;
  }
}
// First Example

/************************ */
// video-19
// switch case
/****************************** */
// video-20

/************************************************************ */
// video21
/*************************************** */
// video22
// event onload | onclick | ondblclick
// window.onload = in Jquery window.ready();
// window.load = ساعت ما الصفحة تحامل
window.onload = function () {
  document.getElementById("video-22").innerHTML = "   <h1>window is load</h1>";
};
// window.onclick
window.onclick = function () {
  document.getElementById("video-221").innerHTML = "<h1>window is click</h1>";
};
// window ondblclick
window.ondblclick = function () {
  document.getElementById("video-222").innerHTML =
    "<h1>window is ondblclick</h1>";
};
function changeMeClick() {
  document.getElementById("video-223").innerHTML = "<h1>window is click</h1>";
}
// window ondblclick
function changeMeDblClick() {
  document.getElementById("video-224").innerHTML =
    "<h1>window is ondblclick</h1>";
}
/********************************** */
// video 23
// onkeydown | onkeypress | pnkayup
var input23 = document.getElementById("video-23-input"),
  button23 = document.getElementById("video-23-button"),
  div23 = document.getElementById("video-23-div"),
  div231 = document.getElementById("video-231-div"),
  div232 = document.getElementById("video-232-div"),
  div233 = document.getElementById("video-233-div");

input23.onkeyup = function () {
  "use strict";
  div231.innerHTML = "onkeyup " + input23.value * 3.75;
};
input23.onkeypress = function () {
  "use strict";
  div232.innerHTML = "onkeypress " + input23.value * 3.75;
};
input23.onkeydown = function () {
  "use strict";
  div233.innerHTML = "onkeydown " + input23.value * 3.75;
};

/***************************** */
// video24
// onmouseover | onmouseout

var video24input = document.getElementById("video24input"),
  video24div = document.getElementById("video24div"),
  video241div = document.getElementById("video241div"),
  video242div = document.getElementById("video242div"),
  video24button = document.getElementById("video24button"),
  video24currency = document.getElementById("video24currency");

video24div.onmouseover = function () {
  video24div.innerHTML = " on mouse over";
};
video24div.onmouseleave = function () {
  video24div.innerHTML = " on mouse leave";
};

video24input.onchange = function () {
  "use strict";
  video241div.innerHTML = video24input.value * 3;
};
video24currency.onchange = function () {
  "use strict";
  video242div.innerHTML =
    "worth " + video241input.value * video24currency.value + " Egyptian pound";
};
/****************************************** */
// video25
// array طريقة الطباعة الاراى كلها او عنصر من عناصر الاراى
/*
        Syntax
        var arrayName = ["Element1", "Element2", "Element3"]
      */
var video25div = document.getElementById("video25div"),
  video252div = document.getElementById("video252div"),
  video253div = document.getElementById("video253div"),
  video254div = document.getElementById("video254div"),
  video255div = document.getElementById("video255div"),
  video256div = document.getElementById("video256div"),
  video257div = document.getElementById("video257div");

// Example One

var friendOne = "Hassan",
  friendTwo = "Soha",
  friendThree = "Ahmed",
  friendFour = "Zahra",
  friendFive = "Hind";
var friends = new Array();

friends[0] = "Hassan";
friends[1] = "Soha";
friends[2] = "Ahmed";
friends[3] = "Zahra";
friends[4] = "Hind";

video25div.innerHTML = friends;
// Example Two

var friends252 = new Array("Hassan", "Soha", "Ahmed", "Zahra", "Hind");
video252div.innerHTML = friends252;

var friends253 = new Array("Hassan", "Soha", "Ahmed", "Zahra", "Hind"); // Formatted Code
video253div.innerHTML = friends253;

var friends254 = []; // Literal Way => Empty Array

// Fill The Array

friends254[0] = "Hassan";
friends254[1] = "Soha";
friends254[2] = "Ahmed";
video254div.innerHTML = friends254;

// The Good Syntax

var friends255 = ["Hassan", "Soha", "Ahmed", "Zahra", "Hind"];
video255div.innerHTML = friends255;

var friends256 = [
  // Formatted Code
  "Hassan",
  "Soha",
  "Ahmed",
  "Zahra",
  "Hind",
];
video256div.innerHTML = friends256;

var friends257 = [
  // Formatted Code
  "Hassan",
  "Soha",
  "Ahmed",
  "Zahra",
  "Hind",
];
video257div.innerHTML = friends257[0];
/******************** */
//video 26
// check if this array
var arrayname26 = ["Hossam", "Rashad", "Ahmed"],
  arrayname261 = ["Hossam", "Rashad", "  "],
  video26div = document.getElementById("video26div");
if (Array.isArray(arrayname26)) {
  video26div.innerHTML = arrayname26;
}
// طريقة تانية اشيك بيها على الاراى
if (arrayname261.constructor === Array) {
  video261div.innerHTML = arrayname261;
}

/****************************************/
// video 27
// array get|set  || length
// length هو عدد العناصر اللى فى الاللمانت او عدد الاحراف اللى فى الاسترانج
var video27array = ["hossam", "rashad", "ahmed", "abboud"],
  video27div = document.getElementById("video27div"),
  video271div = document.getElementById("video271div");
// get array
video27div.innerHTML = video27array;
video271div.innerHTML =
  video27array.length + " عدد العناصر اللى فى الاراى" + "<h2>get array</h2>";

// set array كدا انا خاليت عنصرين بس اللى فى الاراى
var video271array = ["hossam", "rashad", "ahmed", "abboud"],
  video272div = document.getElementById("video272div");
video271array.length = 2;
video272div.innerHTML = video271array + " <h2 class='lead'>set array </h2> ";
/************************************ */
// video28
// convert array to string
var video28array = ["hossam ", "rashad ", "ahmed ", "abboud "];
document.getElementById("video28div").innerHTML = video28array + " it is Array";
video28array = video28array.toString();
document.getElementById("video281div").innerHTML =
  video28array + " it is toString";
video28array = video28array.toLocaleString();
document.getElementById("video282div").innerHTML =
  video28array + " it is toLocaleString";
var video28date = new Date();
document.getElementById("video283div").innerHTML = video28date;
var video281date = new Date();
video281date = video281date.toString();
document.getElementById("video284div").innerHTML = video281date;
var video285date = new Date();
video2851date = video285date.toLocaleDateString();
document.getElementById("video285div").innerHTML =
  video2851date + " it is toLocaleDateString";
var video28array1 = ["hossam", "rashad", "ahmed", "abboud"];
document.getElementById("video286div").innerHTML = video28array1;
// join بيجماع الاراى و الديفالت اللى بحطو بيناهم الكومة و لو عاوز تغير الكومة بى حاجة تانى بيكون بين القوسين
document.getElementById("video287div").innerHTML = video28array1.join(" ");
/******************************* */
//video29
// adding element to array
// ازاى تضيف عنصر اللى الاراى
var video29array = ["hossam", "rashad", "ahmed", "abboud"],
  video29div = document.getElementById("video29div"),
  video291div = document.getElementById("video291div"),
  video292div = document.getElementById("video292div"),
  video293div = document.getElementById("video293div"),
  video294div = document.getElementById("video294div"),
  video295div = document.getElementById("video295div"),
  video296div = document.getElementById("video296div");
// بيضيف العنصر فى اخار الاراى
video29array[4] = "abboud";
video29div.innerHTML = video29array;
// بيضيف العنصر فى اخار الاراى
video29array[video29array.length] = "Hegazy";
video291div.innerHTML = video29array;
// بيضيف العنصر فى اخار الاراى
video29array.push("hegazy");
video292div.innerHTML = video29array;
// بيضيف العنصار فى اوال الاراى
video29array.unshift("Cayan");
video293div.innerHTML = video29array;
// لو عاوز اضيف عنصر و اشيل اباقى
video29array.splice(2, video29array.length, "Rashad");
video294div.innerHTML = video29array;
//
video29array.splice(2, 0, "Rashad");
video295div.innerHTML = video29array;
/**
 * arayy.splice(index, how many do you will remove , item)
 * لو انت مش عاوز تشيل خالى مكان الهاو منى صفر
 */
// videoa29.splice(7, 0, "mairam");
// document.getElementById("video292").innerHTML = videoa29;
/****************************************** */
// video30
/* pop المفروض انو بيحزاف اخار حاجة من الاراى بس معاية هو ظاهر اخر حاجة بس و خفاء الباقى
 */
var video30array = ["hossam", "Rashad", " Ahmed", "Abboud"],
  video30div = document.getElementById("video30div"),
  video301div = document.getElementById("video301div"),
  video302div = document.getElementById("video302div"),
  video303div = document.getElementById("video303div"),
  video304div = document.getElementById("video304div"),
  video305div = document.getElementById("video305div");

video30array.splice(3, 1);
video301div.innerHTML = video30array;
// بيحزاف اخار عنصر فى الاراى
video30array.pop();
video302div.innerHTML = video30array;

// بيحزاف  اول  عنصر فى الاراى
video30array.shift();
video303div.innerHTML = video30array;
/*********************************************** */
// video31
// sort | reverse
// sort بيراتب الاحلااف بى الابجدية و الارقام بى الاصغار الى الاكبار
//reverse بيعكاس الابجديات
var video31array = ["hossam", "rashad", "ahmed"];
document.getElementById("video31div").innerHTML =
  "Array Sort = " + video31array.sort();
document.getElementById("video311div").innerHTML =
  "Array  Reverse" + video31array.reverse();
/******************************************/
// video32
// combine | slice
//slice(start, end) هو انو دكا بيقطاع من عند عنصار انت بتحددهولو
// slice بيقبال القيم بى السالب لو عاوز تبدا من تحت
//concat بيضيف الارى الجديدة فى الاخار
var video32array = ["hossam", "rashad", "ahmed", "Abboud"],
  video32div = document.getElementById("video32div"),
  video321div = document.getElementById("video321div"),
  video322div = document.getElementById("video322div");
video32div.innerHTML = video32array.slice(1, 4);
video321div.innerHTML = video32array.slice(-3);
var girl = "cayan",
  girl2 = "cayan";
video322div.innerHTML = video32array.concat(girl, girl2);
/****************************************** */
// video33
// search in array
// indexOf بتبحث عن كلمة فى الاراى
// lastIndexOf بيبحس من الاخار الى الاوال
// .indexOf("cayan" , 5); كدا انت بتبدا البحث من عند مكان محح فى الاراى
var video33array = [
    "cayan",
    "hossam",
    "rashad",
    "ahmed",
    "abboud",
    "abboud",
    "hegazy",
  ],
  video33div = document.getElementById("video33div"),
  video331div = document.getElementById("video331div"),
  video332div = document.getElementById("video332div"),
  video333div = document.getElementById("video333div");
video33div.innerHTML = "indexOf (name) " + video33array.indexOf("cayan");
video331div.innerHTML =
  "indexOf ('name', 2) " + video33array.indexOf("hegazy", 2);
video332div.innerHTML =
  " lastIndexOf('name') " + video33array.lastIndexOf("hossam");
video333div.innerHTML =
  " lastIndexOf('name', 3) " + video33array.lastIndexOf("ahmed", 3);
/*************************************** */
// video34
// مراجعة على الاراى
var video34array = ["hossam", "rashad", "ahmed"],
  video34div = document.getElementById("video34div"),
  video341div = document.getElementById("video341div"),
  video342div = document.getElementById("video342div"),
  video343div = document.getElementById("video343div"),
  video344div = document.getElementById("video344div"),
  video345div = document.getElementById("video345div"),
  video346div = document.getElementById("video346div"),
  video347div = document.getElementById("video347div"),
  video348div = document.getElementById("video348div"),
  video349div = document.getElementById("video349div"),
  video3410div = document.getElementById("video3410div"),
  video3411div = document.getElementById("video3411div"),
  video3412div = document.getElementById("video3412div"),
  video3413div = document.getElementById("video3413div"),
  video3414div = document.getElementById("video3414div"),
  video3415div = document.getElementById("video3415div"),
  video3416div = document.getElementById("video3416div");

if (Array.isArray(video34array)) {
  video34div.innerHTML = video34array + " | yes it is array";
} else {
  video34div.innerHTML = video34array + "no it is not array";
}

// length
var video34array1 = ["hossam", "rashad", "ahmed"];

// get array
video341div.innerHTML = video34array1.length + " عدد الاراى ";

// set array
video34array1.length = 1;
video342div.innerHTML =
  video34array1.length + " عدد الاراى بعد ما خاليتع عنصر واحد ";

// تحويل الاراى الى استرانج
var video34array2 = ["hossam", "rashad", "ahmed"];
video34array2.toString();
video343div.innerHTML = video34array2.join(" ") + " toString ";

// طريقة انو انا اضيف عنصر على الاراى
var video34array3 = ["hossam", "rashad", "ahmed"];
video34array3[video34array3.length] = "mairem";
video344div.innerHTML = video34array3.join(" ") + " ||| Add item to array";

video34array3.push("love");
video345div.innerHTML = video34array3.join(" ") + " || add  push to end";

video34array3.unshift("cayan");
video346div.innerHTML = video34array3.join(" ") + " || add unshift to Start";

video34array3.splice(0, 0, "my girl");
video347div.innerHTML = video34array3.join(" ") + " || add splice to any where";

// طريقة ازالة عنصر من الاراى
video34array3.splice(0, 1, "my girl");
video348div.innerHTML =
  video34array3.join(" ") + " || remove splice to any where";

video34array3.pop();
video349div.innerHTML = video34array3.join(" ") + " || remove pop to End";

video34array3.shift();
video3410div.innerHTML = video34array3 + " || remove pop to Start";
// ترتيب الاراى
video34array3.sort();
video3411div.innerHTML = video34array3.join(" ") + " || sort array 1 2 3";
video34array3.reverse();
video3412div.innerHTML = video34array3.join(" ") + " || sort array  3 2 1";

// طريقة انو انت تختار ايه اللى يظهار شريحة من الاراى اللى تظهار
var video34array4 = ["cayan", "hossam", "rashad", "ahmed"];
video34array4.slice(1, 2);
video3413div.innerHTML = video34array4 + " || appear array  ";

// طريقة دامج اكتار من اراى مع بعض
var video34array5 = ["cayan", "hossam", "rashad", "ahmed"];
var video34array6 = ["كيان", "حسام", "رشاد", "احمد"];
video3414div.innerHTML =
  video34array5.concat(video34array6).join(" ") + " || add array to array";

// طريقة البحث
var video34array7 = ["cayan", "hossam", "rashad", "ahmed"];
video3415div.innerHTML = video34array7.indexOf("hossam");
video3416div.innerHTML = video34array7.lastIndexOf("cayan");
/********************** */
// video 35
// string
var video35string = "Lorem Ipsum Dolor Sit Amet   Elit. Quisquam, Dolor",
  video35number = 100,
  video35div = document.getElementById("video35div"),
  video351div = document.getElementById("video351div"),
  video352div = document.getElementById("video352div"),
  video353div = document.getElementById("video353div"),
  video354div = document.getElementById("video354div"),
  video355div = document.getElementById("video355div"),
  video356div = document.getElementById("video356div"),
  video357div = document.getElementById("video357div"),
  video358div = document.getElementById("video358div"),
  video359div = document.getElementById("video359div"),
  video3510div = document.getElementById("video3105div");
video35div.innerHTML = video35string;
// عشان اجيب نوع الدات
video351div.innerHTML = typeof video35string;
// toString
var video3535toString = video35string.toString();
video352div.innerHTML = video3535toString;
video353div.innerHTML = typeof video3535toString;
// عدد الحروف اللى فى الاسترانج
video354div.innerHTML = video35string.length;
// علشان احول الرقام الى استرانج
video356div.innerHTML = video35number;
video357div.innerHTML = typeof video35number;
var video35numberrtostring = video35number.toString();
video358div.innerHTML = video35numberrtostring;
video359div.innerHTML = typeof video35numberrtostring;
/***-************************ */
// video 36
// string methods indexOf || lastIndexOf || search
// search الباحث فى الاسترانج
var video36string = "Lorem Ipsum Dolor Sit Amet Elit. Quisquam, Dolor",
  video36div = document.getElementById("video36div"),
  video361div = document.getElementById("video361div"),
  video362div = document.getElementById("video362div"),
  video363div = document.getElementById("video363div"),
  video364div = document.getElementById("video364div"),
  video365div = document.getElementById("video365div"),
  video366div = document.getElementById("video366div"),
  video367div = document.getElementById("video367div"),
  video368div = document.getElementById("video368div"),
  video369div = document.getElementById("video369div"),
  video3610div = document.getElementById("video3610div");

video36div.innerHTML =
  "indexOf( ' name item in array ') = " + video36string.indexOf("Amet");

video361div.innerHTML =
  "indexOf( ' name item in array', 2 ) = " + video36string.indexOf("Amet", 5);

video362div.innerHTML =
  "lastIndexOf( ' name item in array ') = " + video36string.lastIndexOf("Amet");

video363div.innerHTML =
  "lastIndexOf( ' name item in array', 2 ) = " +
  video36string.lastIndexOf("Amet", 60);

video364div.innerHTML =
  "search( ' name item in array' ) = " + video36string.search("Amet");

// طريقة البحث بى الرجيلار اكسبراشان اللى هو من غير ما تكون الحروف حساسة
video365div.innerHTML =
  "search( ' name item in array' ) = " + video36string.search(/amet/i);
/************************ */
// video37
// split || slice || || substr || extract
// split(separator, limit) output = Object
// الاسبلات اللى هو انو انت تخرج جزاء من الاسترانج
var video37string = "Lorem Ipsum Dolor Sit Amet Elit. Quisquam, Dolor ",
  video37div = document.getElementById("video37div"),
  video371div = document.getElementById("video371div"),
  video372div = document.getElementById("video372div"),
  video373div = document.getElementById("video373div"),
  video374div = document.getElementById("video374div"),
  video375div = document.getElementById("video375div"),
  video376div = document.getElementById("video376div"),
  video377div = document.getElementById("video377div"),
  video378div = document.getElementById("video378div"),
  video379div = document.getElementById("video379div"),
  video3710div = document.getElementById("video3710div"),
  video3711div = document.getElementById("video3711div"),
  video3712div = document.getElementById("video3712div"),
  video37split = video37string.split();

video37div.innerHTML = video37string + " + " + typeof video37string;

video371div.innerHTML =
  video37string.split() + " = split + " + typeof video37split;
//split بتغاير الاسترانج الى اوبجاكت
video372div.innerHTML = typeof video37split + " نوع الدات اللى بتخرجو الاسبلات";

// لو سبت القوسين فاضين بيحط كومة بين كل حرف و التانى
video373div.innerHTML = video37string.split("");
video374div.innerHTML = video37string.split(" ");

// 5 اللى هو عدد العناصر اللى هخرجها
video375div.innerHTML =
  video37string.split(" ", 5) + " عدد العناصر اللى هيخرجها السبرايتوار";

// slice(start, end) output = string
// تخراج من الاسترانج شريحة
video376div.innerHTML = video37string.slice();
video377div.innerHTML =
  typeof video37string.slice() + " نوع الدات اللى بيخرجها الاسليس";
//
video378div.innerHTML =
  video37string.slice(2, 18) + "عدد العناصر اللى هيخرجها الاسليس";
//
// substr(start, length)
video379div.innerHTML = video37string.substr() + " =  substr ()";
video3710div.innerHTML = video37string.substr(5, 12) + " =  substr (5 , 12)";

// substr(start, end)
video3711div.innerHTML = video37string.substring();
video3712div.innerHTML = video37string.substring(5, 20);

/*******************************************/
// video-38
// اليزنى كود
/**
 * charAt(index )
 * charCodeAt
 * replace(value , new value)
 */
var video38string =
    "Lorem Ipsum Dolor Sit Amet Elit Ipsum. Quisquam, Dolor Ipsum",
  video38div = document.getElementById("video38div"),
  video381div = document.getElementById("video381div"),
  video382div = document.getElementById("video382div"),
  video383div = document.getElementById("video383div"),
  video384div = document.getElementById("video384div"),
  video385div = document.getElementById("video385div"),
  video386div = document.getElementById("video386div"),
  video387div = document.getElementById("video387div"),
  video388div = document.getElementById("video388div"),
  video389div = document.getElementById("video389div"),
  video3810div = document.getElementById("video3810div");
video38div.innerHTML = video38string;
// charAt
// بيجيب الحرف من الرقم بتاعو فى الاسترانج
video381div.innerHTML =
  video38string.charAt() + " = charAt =  بيعرافك الحرف رقم كام";

video382div.innerHTML =
  video38string.charAt(2) + " = charAt(2) =  بيعرافك الحرف رقم كام";

// طريقة انو انت تجيب اخار حرف بى الانجاث
video383div.innerHTML =
  video38string.charAt(video38string.length - 1) +
  " = charAt =  بيعرافك الحرف رقم كام";

// charCodeAt اللى هو راقم الزراير فى الكيبارد
video384div.innerHTML =
  video38string.charCodeAt() + " = charCodeAt = رقم الحرف فى الكيبارد";

// الربليس بتغاير من حاجة الى حاجة تانى
// gi اللى هى فى جميع الانحا و الاى اللى هو لو الحروف كبتال او اسمول
video385div.innerHTML = video38string.replace("Ipsum", "hossam");

video386div.innerHTML =
  " /Lorem/gi gi الجاى اللى هو الجلوبال الاى اللى هو الحروف غير حساسه ";

video387div.innerHTML = video38string.replace(/Ipsum/gi, "hossam");

/********************************* */
// video 39
/*
  String.fromCharCode( Num1, Num2, Num3, Num4 )
  concat(String, String, String, String)
*/

// fromCharCode بتكتاب الكلام بى الراقا
var video39string = String.fromCharCode(72, 111, 115, 115, 109),
  video391div = document.getElementById("video391div"),
  video391div = document.getElementById("video391div"),
  video391div = document.getElementById("video391div"),
  video391div = document.getElementById("video391div"),
  video391div = document.getElementById("video391div"),
  video39string1 = "HOssam Rashad",
  video39string2 = " HOssam Rashad";
// طباعة الاسترانج عن طريق الارقام الحروف
video391div.innerHTML = video39string;
// الدمج بين الاسترانج و التانى
// concat الكونكات بتجماع بين اكتار من فاريبال و التانى مع بعض

video392div.innerHTML = video39string1.concat(video39string2);

/******************************* */
// video-40

var video40string = "I Love Js",
  video40SmallString = video40string.toLowerCase(),
  video40largestring = video40string.toUpperCase(),
  video401div = document.getElementById("video401div"),
  video402div = document.getElementById("video402div"),
  video403div = document.getElementById("video403div"),
  video404div = document.getElementById("video404div"),
  video405div = document.getElementById("video405div");

// toLowerCase() بيحاوال الاحراف الى اصموال
video401div.innerHTML = video40string;

video402div.innerHTML = video40SmallString + " = toLowerCase ";

//toUpperCase() بيحاول الاحراف الى كابتال

video403div.innerHTML = video40largestring + " = toUpperCase";
/*********************************** */
// video 41
// trim() بيشيل المسافات اللى فى بداية الاسترانج و فى نهاية
var video41string = "       Lorem Ipsum Dolor Sit Amet Elit. Quisquam, Dolor",
  video41trim = video41string.trim(),
  video411div = document.getElementById("video411div"),
  video412div = document.getElementById("video412div"),
  video413div = document.getElementById("video413div"),
  video414div = document.getElementById("video414div"),
  video415div = document.getElementById("video415div");

video411div.innerHTML = video41string;

video412div.innerHTML = video41trim;

// Link

var video412string = "Google";

video413div.innerHTML =
  video412string +
  " Go To Google By This Link => " +
  video412string.link("http://www.google.com");
/************************************ */
//Before Chain
// video-42

var video42number = 120,
  video42numbertostring = video42number.toString(),
  video42replace = video42numbertostring.replace(2, 3),
  video421div = document.getElementById("video421div"),
  video422div = document.getElementById("video422div"),
  video423div = document.getElementById("video423div"),
  video424div = document.getElementById("video424div"),
  video425div = document.getElementById("video425div");

video421div.innerHTML = video42number + " =  Number";

video422div.innerHTML = video42numbertostring + " = toString";

video423div.innerHTML = video42replace + " = replace(2, 3)";

video424div.innerHTML = video42replace.split("") + " = split('')";

video425div.innerHTML = video42number.toString().replace(2, 4).split("");
/************************************* */
//vidro 43
// Length

var myString43 = 'I Love \\"Programming\\" Languages';
document.getElementById("video43").innerHTML = myString43;

// Convert

var myString431 = 120,
  myNewString431 = String(myString431);

document.getElementById("video431").innerHTML =
  myString431 + " " + typeof myString431;
document.getElementById("video432").innerHTML =
  myNewString431 + " " + typeof myNewString431;

// Index Of

var myString432 = "I Love Programming Languages",
  mySearch432 = myString432.indexOf("L", 10);

document.getElementById("video433").innerHTML = mySearch432;
// Last Index Of

var myString434 = "I Love Programming Languages",
  mySearch434 = myString434.lastIndexOf("L", 10);

document.getElementById("video434").innerHTML = mySearch434;

// Search

var myString435 = "I Love Programming Languages",
  mySearch435 = myString435.search("P");

document.getElementById("video435").innerHTML = mySearch435;

// split

var myString436 = "I Love Programming Languages",
  mySplit436 = myString436.split(" ");

document.getElementById("video436").innerHTML = mySplit436;

// Slice

var myString437 = "I Love Programming Languages",
  mySplit437 = myString437.slice(2, 7);

document.getElementById("video437").innerHTML =
  mySplit437 + "<b>slice(2, 7)</b>";
// Substr

var myString438 = "I Love Programming Languages",
  mySplit438 = myString438.substr(2, 10);

document.getElementById("video438").innerHTML = mySplit438 + " <b>substr</b>";

// Substring

var myString439 = "I Love Programming Languages",
  mySplit439 = myString439.substring(2, 10);

document.getElementById("video439").innerHTML =
  mySplit439 + " <b>substring</b>";

// Char Code At

var myString4310 = "I Love Programming Languages",
  mySplit4310 = myString4310.charAt(4);

document.getElementById("video4310").innerHTML =
  mySplit4310 + "<b> charAt(4)</b>";

// Char Code At

var myString4311 = "I Love Programming Languages",
  mySplit4311 = myString4311.charCodeAt(4);

document.getElementById("video4311").innerHTML =
  mySplit4311 + "<b> charCodeAt(4)</b>";
// Replace

var myString4312 = "I Love Programming Languages",
  mySplit4312 = myString4312.replace("L", "X");

document.getElementById("video4312").innerHTML =
  mySplit4312 + " <b>replace('l' , 'x')</b>";

var myString4313 = "I Love Programming Languages",
  mySplit4313 = myString4313.replace(/L/gi, "X");

document.getElementById("video4313").innerHTML = mySplit4313;
// Concat + Chain

var myString4314 = "I Love Programming Languages",
  mySplit4314 = myString4314.concat(" Too Much").toLowerCase().split(" ", 3);

document.getElementById("video4314").innerHTML = mySplit4314;

// Trim

var myString4315 = "      I Love Programming Languages  ",
  mySplit4315 = myString4315.trim();

document.getElementById("video4315").innerHTML = mySplit4315;
// Link

var myString4316 = "      google  ",
  mySplit4316 = myString4316.link("http://www.google.com");

document.getElementById("video4316").innerHTML = mySplit4316;
/**************************************************** */
/*
 for بتتعامل مع الاراى
  For Loop Syntax 

  for ( Initialization; Condition; Final Expression ) {

    // Statement

  }

  Initialization: Executed Before The Loop Once
  Condition: Define The Condition To Run The Loop
  Final Expression: Executed Everytime The Code Run

*/
// First Example

var i;

for (i = 0; i <= 10; i++) {
  console.log(i);
  document.getElementById("video44").innerHTML = i;
}
var friends44 = ["Ahmed", "Sayed", "Mahmoud", "Kamel", "Salah", "Gamal"];

var fori;

for (fori = 0; fori <= friends44.length; fori++) {
  console.log(friends44[fori]);
  document.getElementById("video441").innerHTML = friends44[fori];
}
document.getElementById("video442").innerHTML = friends44 + "<br>" + friends44;
/**************************************** */
// video 45
// for in بتتعامل مع الابجاكت
/*
  For ... In Loop Syntax

  for (Property in Object) {

    if ( Object.hasOwnProperty(Variable) ) {

      // Statement

    }

  }

*/
var myCar45 = {
  colour: "White",
  type: "Sedan",
  price: "50.000",
  model: "2015",
};
var prop45;

for (prop45 in myCar45) {
  console.log(prop45 + ": " + myCar45[prop45]);
  document.getElementById("video45").innerHTML =
    prop45 + ": " + myCar45[prop45];
}
document.getElementById("video451").innerHTML = prop45 + ": " + myCar45[prop45];
//
var myCar452 = {
  colour: "White",
  type: "Sedan",
  price: "50.000",
  model: "2015",
};
var prop452;
for (prop452 in myCar452) {
  if (myCar452.hasOwnProperty(prop452)) {
    console.log(prop452 + ": " + myCar452[prop452]);
    document.getElementById("video452").innerHTML =
      prop452 + ": " + myCar452[prop452];
  }
}
/*********************************** */
// for advinced
var foradvinced;

for (foradvinced = 0; foradvinced <= 10; foradvinced++) {
  console.log(foradvinced);
  document.getElementById("video46").innerHTML = foradvinced;
}

// Second Example

var foradvinced2 = 0;

for (; foradvinced2 <= 10; foradvinced2++) {
  console.log(foradvinced2);
  document.getElementById("video461").innerHTML = foradvinced2;
}
// Third Example

var foradvinced3 = 0;

for (; ; foradvinced3++) {
  if (foradvinced3 > 10) break;

  console.log(foradvinced3);
  document.getElementById("video462").innerHTML = foradvinced3;
}

// Generate Years Function

function generateYears(Start, End) {
  "use strict";

  var years;

  document.write("<select>");

  for (years = Start; years <= End; years++) {
    document.write('<option value="' + years + '">' + years + "</option>");
  }

  document.write("</select>");
}

document.getElementsByTagName("video463").innerHTML = generateYears(1900, 2015); // Mahmoud
generateYears(1900, 2015);
generateYears(1950, 2010); // Ahmed

generateYears(2000, 2012); // Osama
