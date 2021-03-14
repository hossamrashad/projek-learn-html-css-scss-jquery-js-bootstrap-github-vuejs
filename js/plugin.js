/* global document, console, alert */
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
  var myInfo = "haitham";
  return myInfo;
}
document.getElementById("video16").innerHTML = myInfo();
