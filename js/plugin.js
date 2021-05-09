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
 * event onload | onclick | ondblclick
 * window.onload = in Jquery $(docume nt).ready();
 * window.load = ساعت ما الصفحة تحامل
 * window.onload = function(){}
 *
 *Event input = onkeyup | onkeypress | onkeydown
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
var div24 = document.getElementById("video-24");
div24.onmouseover = function () {
  "use strict";
  div24.innerHTML = "mouse over";
};
div24.onmouseout = function () {
  "use strict";
  div24.innerHTML = "mouse out";
};
var inpout24 = document.getElementById("input24"),
  div241 = document.getElementById("video241");
currency = document.getElementById("currency");
currency.onchange = function () {
  "use strict";
  div241.innerHTML = inpout24.value * currency.value;
};
//
var divcolor22 = document.getElementById("divcolor242");
color24 = document.getElementById("color24");
color24.onchange = function () {
  "use strict";
  divcolor22.style.backgroundColor = color24.value;
  divcolor22.innerHTML = color24.value;
};
/****************************************** */
// video25
// array طريقة الطباعة الاراى كلها او عنصر من عناصر الاراى
var videoa25 = ["hossam", "rashad", "ahmed", "abboud"];
document.getElementById("video25").innerHTML = videoa25;
document.getElementById("video251").innerHTML = videoa25[0];
/******************** */
//video 26
// check if this array
var videoa26 = ["hossam", "rashad", "ahmed", "abboud"],
  sta26 = "hossam";
if (Array.isArray(videoa26)) {
  document.getElementById("video26").innerHTML = "yes it is array";
} else {
  document.getElementById("video26").innerHTML = "no  it net is array";
}
// طريقة تانية اشيك بيها على الاراى

if (sta26.constructor === Array) {
  document.getElementById("video261").innerHTML = "yes it is array";
} else {
  document.getElementById("video261").innerHTML = "no  it net is array";
}
/****************************************/
// video 27
// array get|set  || length
// length هو عدد العناصر اللى فى الاللمانت او عدد الاحراف اللى فى الاسترانج
var videoa27 = ["hossam", "rashad", "ahmed", "abboud"];
var div27 = document.getElementById("video27");
// get array
div27.innerHTML = videoa27;
console.log(videoa27);
// set array كدا انا خاليت عنصرين بس اللى فى الاراى
var videoa271 = ["hossam", "rashad", "ahmed", "abboud"];
var div271 = document.getElementById("video271");
videoa271.length = 2;
div271.innerHTML = videoa271;
console.log(videoa271);
/************************************ */
// video28
// convert array to string
var videoa28 = ["hossam", "rashad", "ahmed", "abboud"];
videoa28 = videoa28.toString();
document.getElementById("video28").innerHTML = videoa28 + " it is toString";
var mydate = new Date();
document.getElementById("video281").innerHTML = mydate;
var mydate2 = new Date();
mydate2 = mydate2.toString();
document.getElementById("video282").innerHTML = mydate2;
var mydate3 = new Date();
mydate3 = mydate3.toLocaleDateString();
document.getElementById("video283").innerHTML =
  mydate3 + " it is toLocaleDateString";
var videoa284 = ["hossam", "rashad", "ahmed", "abboud"];
// join بيجماع الاراى و الديفالت اللى بحطو بيناهم الكومة و لو عاوز تغير الكومة بى حاجة تانى بيكون بين القوسين
document.getElementById("video284").innerHTML = videoa284.join("+ ");
/******************************* */
//video29
// adding element to array
// ازاى تضيف عنصر اللى الاراى
var videoa29 = ["hossam", "rashad", "ahmed", "abboud"];
// بيضيف العنصر فى اخار الاراى
videoa29[4] = "abboud";
document.getElementById("video29").innerHTML = videoa29;
// بيضيف العنصر فى اخار الاراى
videoa29.push("hegazy");
document.getElementById("video291").innerHTML = videoa29;
// بيضيف العنصار فى اوال الاراى
videoa29.unshift("Cayan");
document.getElementById("video291").innerHTML = videoa29;
/**
 * arayy.splice(index, how many do you will remove , item)
 * لو انت مش عاوز تشيل خالى مكان الهاو منى صفر
 */
videoa29.splice(7, 0, "mairam");
document.getElementById("video292").innerHTML = videoa29;
/****************************************** */
// video30
/* pop المفروض انو بيحزاف اخار حاجة من الاراى بس معاية هو ظاهر اخر حاجة بس و خفاء الباقى
 */
var videoa30 = ["hossam", "rashad", "ahmed"];
videoa30 = videoa30.pop();
document.getElementById("video30").innerHTML = videoa30;
// shift بيحزاف اول عنصر من الاراى
var videoa301 = ["hossam", "rashad", "ahmed"];
videoa301 = videoa301.shift();
document.getElementById("video301").innerHTML = videoa301;
/*********************************************** */
// video31
// sort | reverse
// sort بيراتب الاحلااف بى الابجدية و الارقام بى الاصغار الى الاكبار
//reverse بيعكاس الابجديات
var videoa31 = ["hossam", "rashad", "ahmed"];
document.getElementById("video31").innerHTML = videoa31.sort();
document.getElementById("video311").innerHTML = videoa31.reverse();
/******************************************/
// video32
// combine | slice
//slice(start, end) هو انو دكا بيقطاع من عند عنصار انت بتحددهولو
// slice بيقبال القيم بى السالب لو عاوز تبدا من تحت
//concat بيضيف الارى الجديدة فى الاخار
var videoa32 = ["hossam", "rashad", "ahmed"];
document.getElementById("video32").innerHTML = videoa32.slice(1);
var girl = "cayan";
document.getElementById("video321").innerHTML = videoa32.concat(girl);
/****************************************** */
// video33
// search in array
// indexOf بتبحث عن كلمة فى الاراى
// lastIndexOf بيبحس من الاخار الى الاوال
// .indexOf("cayan" , 5); كدا انت بتبدا البحث من عند مكان محح فى الاراى
var videoa33 = [
  "cayan",
  "hossam",
  "rashad",
  "ahmed",
  "abboud",
  "abboud",
  "hegazy",
];
document.getElementById("video33").innerHTML = videoa33.indexOf("cayan");
/*************************************** */
// video34
// مراجعة على الاراى
var videoa34 = ["hossam", "rashad", "ahmed"];
if (Array.isArray(videoa34)) {
  document.getElementById("video341").innerHTML = videoa34 + "yes it is array";
} else {
  document.getElementById("video341").innerHTML =
    videoa34 + "no it is not array";
}
// lingth
var array34 = ["hossam", "rashad", "ahmed"];
// get array
document.getElementById("video342").innerHTML = array34.length + " عدد الاراى ";
// set array
array34.length = 1;
document.getElementById("video343").innerHTML =
  array34.length + " عدد الاراى بعد ما خاليتع عنصر واحد ";
// تحويل الاراى الى استرانج
var array341 = ["hossam", "rashad", "ahmed"];
array341.toString();
document.getElementById("video344").innerHTML = array341.join(" ");
// طريقة انو انا اضيف عنصر على الاراى
array341[array341.length] = "mairem";
document.getElementById("video345").innerHTML = array341.join(" ");
array341.push("love");
document.getElementById("video346").innerHTML = array341.join(" ");
array341.unshift("cayan");
document.getElementById("video347").innerHTML = array341.join(" ");
array341.splice(0, 0, "my girl");
document.getElementById("video347").innerHTML = array341.join(" ");
// طريقة ازالة عنصر من الاراى
array341.splice(6, 1, "my girl");
document.getElementById("video348").innerHTML = array341.join(" ");
array341.pop();
document.getElementById("video349").innerHTML = array341.join(" ");
array341.shift();
document.getElementById("video3510").innerHTML = array341.join(" ");
// ترتيب الاراى
array341.sort();
document.getElementById("video3511").innerHTML = array341.join(" ");
array341.reverse();
document.getElementById("video3512").innerHTML = array341.join(" ");
// طريقة انو انت تختار ايه اللى يظهار شريحة من الاراى اللى تظهار
var array342 = ["cayan", "hossam", "rashad", "ahmed"];
array342.slice(1, 2);
document.getElementById("video3513").innerHTML = array342;
// طريقة دامج اكتار من اراى مع بعض
var array343 = ["cayan", "hossam", "rashad", "ahmed"];
var array344 = ["كيان", "حسام", "رشاد", "احمد"];
document.getElementById("video3514").innerHTML = array343
  .concat(array344)
  .join(" ");
// طريقة البحث
var array345 = ["cayan", "hossam", "rashad", "ahmed"];
document.getElementById("video3515").innerHTML = array345.indexOf(/rashad/i);
document.getElementById("video3516").innerHTML = array345.lastIndexOf(
  /rashad/i
);
/********************** */
// video 35
// string
var string35 = "Lorem Ipsum Dolor Sit Amet   Elit. Quisquam, Dolor";
document.getElementById("video35").innerHTML = string35;
// عشان اجيب نوع الدات
document.getElementById("video351").innerHTML = typeof string35;
// toString
var string35toString = string35.toString();
document.getElementById("video352").innerHTML = string35toString;
document.getElementById("video353").innerHTML = typeof string35;
/***-************************ */
// video 36
// string methods indexOf || lastIndexOf || search
// search الباحث فى الاسترانج
var string36 = "Lorem Ipsum Dolor Sit Amet Elit. Quisquam, Dolor";
document.getElementById("video36").innerHTML = string35.search("Amet");
// طريقة البحث بى الرجيلار اكسبراشان اللى هو من غير ما تكون الحروف حساسة
document.getElementById("video361").innerHTML = string35.search(/elit/i);
/************************ */
// video37
// split || slice || || substr || extract
// split(separator, limit) output = Object
// الاسبلات اللى هو انو انت تخرج جزاء من الاسترانج
var string37 = "Lorem Ipsum Dolor Sit Amet Elit. Quisquam, Dolor";
document.getElementById("video37").innerHTML = string37.split() + " = split";
//split بتغاير الاسترانج الى ابجاكت
document.getElementById("video371").innerHTML =
  typeof string37.split() + " نوع الدات اللى بتخرجو الاسبلات";
// لو سبت القوسين فاضين بيحط كومة بين كل حرف و التانى
document.getElementById("video372").innerHTML = string37.split("");
document.getElementById("video373").innerHTML = string37.split(" ");
// 5 اللى هو عدد العناصر اللى هخرجها
document.getElementById("video374").innerHTML =
  string37.split(" ", 5) + " عدد العناصر اللى هيخرجها السبرايتوار";
// slice(start, end) output = string
// تخراج من الاسترانج شريحة
document.getElementById("video375").innerHTML = string37.slice();
document.getElementById("video376").innerHTML =
  typeof string37.slice() + " نوع الدات اللى بيخرجها الاسليس";
//
document.getElementById("video377").innerHTML =
  string37.slice(2, 18) + "عدد العناصر اللى هيخرجها الاسليس";
//
// substr(start, length)
document.getElementById("video378").innerHTML = string37.substr();
document.getElementById("video379").innerHTML = string37.substr(5, 20);
// substr(start, end)
document.getElementById("video3710").innerHTML = string37.substring();
document.getElementById("video3711").innerHTML = string37.substring(5, 20);
/*******************************************/
// video 38
// اليزنى كود
/**
 * charAt(index )
 * charCodeAt
 * replace(value , new value)
 */
var string38 = "Lorem Ipsum Dolor Sit Amet Elit. Quisquam, Dolor";
//
document.getElementById("video38").innerHTML =
  string38.charAt() + " = charAt =  بيعرافك الحرف رقم كام";
// charCodeAt اللى هو راقم الزراير فى الكيبارد
document.getElementById("video381").innerHTML =
  string38.charCodeAt() + " = charCodeAt = رقم الحرف فى الكيبارد";
// الربليس بتغاير من حاجة الى حاجة تانى
// gi اللى هى فى جميع الانحا و الاى اللى هو لو الحروف كبتال او اسمول
document.getElementById("video382").innerHTML = string38.replace(
  /Lorem/gi,
  "hossam" +
    " /Lorem/gi gi الجاى اللى هو الجلوبال الاى اللى هو الحروف غير حسسة "
);
/********************************* */
// video 39
/*
  String.fromCharCode( Num1, Num2, Num3, Num4 )
  concat(String, String, String, String)
*/

// fromCharCode بتكتاب الكلام بى الراقا

var string39 = String.fromCharCode(72, 111, 115, 115, 109);
document.getElementById("video39").innerHTML = string39;

// concat الكونكات بتجماع بين اكتار من فاريبال و التانى مع بعض
var string391 = "Lorem Ipsum Dolor Sit Amet Elit. Quisquam, Dolor";
var string392 = "Lorem Ipsum Dolor Sit Amet Elit. Quisquam, Dolor";
document.getElementById("video391").innerHTML = string391.concat(string392);
/******************************* */
// toLowerCase() بيحاوال الاحراف الى اصموال

var string40 = "I Love Js",
  mySmallString = string40.toLowerCase();
document.getElementById("video40").innerHTML = string40.toLowerCase();
document.getElementById("video401").innerHTML = mySmallString;
//toUpperCase() بيحاول الاحراف الى كابتال
var string401 = "I Love Js",
  mySmallString = string401.toUpperCase();
document.getElementById("video402").innerHTML = string401.toUpperCase();
document.getElementById("video403").innerHTML = mySmallString;
/*********************************** */
// video 41
// trim() بيشيل المسافات اللى فى بداية الاسترانج و فى نهاية
var string41 =
  "                        Lorem Ipsum Dolor Sit Amet Elit. Quisquam, Dolor";
document.getElementById("video41").innerHTML = string41;
// Link

var string411 = "Google";

document.getElementById("video41").innerHTML =
  string411 +
  " Go To Google By This Link => " +
  string411.link("http://www.google.com");
/************************************ */
//Before Chain

var myNumber42 = 120,
  myString42 = myNumber42.toString();

document.getElementById("video42").innerHTML = myNumber42;
document.getElementById("video421").innerHTML = myString42;
var myNewNumber42 = myString42.replace(2, 3);

document.getElementById("video422").innerHTML = myNewNumber42;

var myLastNumber42 = myNewNumber42.split("");

document.getElementById("video423").innerHTML = myLastNumber42;

// After Chain

var myNumber421 = 120,
  myString421 = myNumber421.toString().replace(0, 3).split("");

document.getElementById("video424").innerHTML = myNumber421;
document.getElementById("video425").innerHTML = myString421;
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

// Search

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

var myString4316 = "      I Love Programming Languages  ",
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
