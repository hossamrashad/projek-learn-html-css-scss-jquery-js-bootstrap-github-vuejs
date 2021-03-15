/* global document, console, alert, prompt*/
/**
 *
 *  innerHTML   هو انو العنصار المختار يساوى الحاجة اللى انت بتكتبها
 *
 *
 *
 */
// some vers

var //some vers
  x = 10,
  s = 15,
  d = 20;
document.getElementById("video5").innerHTML = x;
if (x + s === 30) {
  console.log("good");
} else {
  console.log("bad");
}
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
if ((hasdiscount = true)) {
  var mainprice = 400;
} else {
  var mainprice = 450;
}
document.getElementById("video8").innerHTML = mainprice;
/**
 * array
 * fileName طريقة طباعة جميع العناصر اللى فى الاراى
 * fileName[0] طريقة طباعة عنصر محدد من الاراى
 */
var // array
  fileName = ["Hossam", "rashad", "ahmed"];
document.getElementById("video81").innerHTML = fileName;
document.getElementById("video82").innerHTML = fileName[0];
/**
 * object
 * info
 * info.lastName الطريقة الصحيصة للطباعة من الابجاكت
 */
var info = { firstnName: "hossam", lastName: "Rashad" };
document.getElementById("video83").innerHTML = info;
document.getElementById("video84").innerHTML = info.lastName;
/**
 *string النصوص
 */
var lorem8 = "Lorem ipsum 'dolor' sit .";
document.getElementById("video85").innerHTML = lorem8;
/**
 * number
 */
var age8 = 29;
document.getElementById("video86").innerHTML = age8;
console.log(typeof age8);
document.getElementById("video87").innerHTML = typeof age8;
/************************************ */
// video 9
//video 10
// output data to screen
/**
 * 1 alert
 * 2 document.write();
 * 3 innerHTML
 * 4 console
 */
/******************************* */
// video 11
/**
 * operators
 *  + - * /
 * %
 * ++
 * --
 */
/********************** */
// video 12
// if | else | else if
var ticketPrice = 2000;

if (ticketPrice < 1500) {
  document.getElementById("video12").innerHTML = 1500;
} else if (ticketPrice == 2000) {
  document.getElementById("video12").innerHTML = 2000;
} else {
  document.getElementById("video12").innerHTML = "i Don't Have many";
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
/*************************************** */
// video 14
/**
 * != لا تساوء
 * !== لا تساوى القيمة و لا تساوى الدات تيب
 * &&      =  and
 * ||      =  or
 */
/*********************** */
// video 15
// function
function sayHi15() {
  "use strict";
  alert("Hello Frome Function");
}
// sayHi15(); لو عاوز تشاغال الفانكشان تلقاى
/********************** */
// video 16
// return
function myInfo() {
  "use strict";
  var myInfo = "haitham",
    myAge16 = 29;
  return myInfo + " " + myAge16;
}
document.getElementById("video16").innerHTML = myInfo();
/**************************/
// video 17
// parameters
function myAgeInDays(myAge) {
  "use strict";
  return "your age in days " + myAge * 365;
}
document.getElementById("video17").innerHTML = myAgeInDays(10);
function myFillName(firstNamem, lmiddleNmae) {
  "use strict";
  return firstNamem + " " + lmiddleNmae;
}
document.getElementById("video171").innerHTML = myFillName("haitham", "rashad");
/***************************** */
// video 18
// function self invoke
// Math.random(); بطالع رقام عشواء
document.getElementById("video18").innerHTML = Math.random();
// self invoke علشان اشغال الفانكششان تلقائى
(function sayMyName() {
  "use strict";
  var name = "Hossam";
  //return name;
  console.log("welcome");
})();
function calck18(amount) {
  "use strict";
  var result = amount * 3.75;
  return result;
}
document.getElementById("video181").innerHTML = calck18(10);
// طريقة السلف انفوك فى الارارت
(function calck181() {
  " use strict ";
  var price18 = document.getElementById("video181").innerHTML;
  //alert(price18 * 12);
})();
/**
 * الفكرة انو يكون عندى حقل ادخال اخالى اللى يتكتب فية
 * يطلع فى داف و يكون القيمة مضروبة فى رقم
 * isNaN معناها لا تساوى رقام
 */
function dollar() {
  "use strict";
  var amount = document.getElementById("input18").value,
    result = amount * 3.5,
    video182 = document.getElementById("video182");
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
    video182.innerHTML = amount + " = " + result;
  }
}
/************************ */
// video 19
// switch case
/****************************** */
// video20
/************************************************************ */
// video21
/*************************************** */
// video22
// event onload | onclick | ondblclick
// window.onload = in Jquery window.ready();
// window.load = ساعت ما الصفحة تحامل
window.onload = function () {
  document.getElementById("video22").innerHTML = "window is load";
};
// window.onclick
window.onclick = function () {
  document.getElementById("video22").innerHTML = "window is click";
};
// window ondblclick
window.ondblclick = function () {
  document.getElementById("video22").innerHTML = "window is ondblclick";
};
/********************************** */
// video 23
// onkeydown | onkeypress | pnkayup
var input23 = document.getElementById("input23"),
  div23 = document.getElementById("video23");
input23.onkeyup = function () {
  "use strict";
  div23.innerHTML = input23.value;
};
/***************************** */
// video24
// onmouseover | onmouseout
var div24 = document.getElementById("video24");
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
