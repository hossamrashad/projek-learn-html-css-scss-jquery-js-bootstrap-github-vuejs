/*jslint plusplus: true, evil: true */

// jslint plusplus: true for error for ++
// evil: true for error document.write

/*global console , alert , prompt , $ , document, write */

/*global ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/
var jqueryToAdd = document.createElement("script");

jqueryToAdd.src =
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";

document.getElementsByTagName("head")[0].appendChild(jqueryToAdd);
/*jslint browser: true */
/*global window */
// ==

/*

  For Loop Syntax

  for ( Initialization; Condition; Final Expression ) {

    // Statement

  }
  التهيئة: تم تنفيذه قبل الحلقة مرة واحدة
  Initialization: Executed Before The Loop Once
  الشرط: حدد الشرط لتشغيل الحلقة
  Condition: Define The Condition To Run The Loop
  التعبير النهائي: يتم تنفيذه في كل مرة يتم فيها تشغيل الكود
  Final Expression: Executed EveryTime The Code Run

*/
// Example Simple

// ============================================
/*
  = بيحول الرقم الى استرانج
  toString()
  = بيخرجلك الراقم زاى اللى مكتوب فى علم الحاسوب 
  toExponential()
  = بيخراج العلامة الاس 
  toFixed()
  = بيخرج الرقم و بيشيل الاسترانج اللى بعدو 
  parseInt()
*/
let number = 99.5;

console.log(number);

let numberToString = parseInt("99.55px");

console.log(typeof numberToString);

console.log(numberToString);