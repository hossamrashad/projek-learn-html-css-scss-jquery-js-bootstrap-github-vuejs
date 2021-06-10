/*jslint plusplus: true, evil: true */
// jslint plusplus: true for error for ++
// evil: true for error document.write

/*global console , alert , prompt , confirm, $ , document, write, ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/

/*jslint browser: true */
/*global window */

/** What Is Bom
 *
 *  - Browser Object Model
 *
 *  What can i do with bom
 *
 *  - js bom talks to the browser
 *
 *  - doing actions not related to page
 *
 *  --- change URL
 *
 *  --- Background requests
 *
 *  --- Alert, Confirm, Prompt
 *
 *  --- Window Move, Window open, window close
 *
 *  --- change text in the status ber
 *
 * - bom information
 *
 *  -- bom has no standard
 *
 *  -- All Modern Browsers implement similar bom
 *
 *  ---- window
 *
 *  ---- screen
 *
 *  ---- location
 *
 *  ---- History
 *
 *  ---- navigation
 *
 *  ---- timing
 *
 *  ---- cookies
 *
 * -- collection of objects control the browser
 *
 * -- default object of browser is window
 *
 * -- all global js objects are member of window object
 *
 *
 * ****************** video 2 ****************
 *
 * window
 *
 * -- window object is the browser window
 *
 * -- window object supported by all browsers
 *
 * -- window object has properties & methods not supported in all browsers
 *
 * -- window is the default object of browser
 *
 * -- all global is object are members of window object
 *
 * كل عناصر الجافا اسكرابت عنصر من الوندو زاى
 * window.console.log(window.document.title); || Array || console || print()
 *
 *  ++++++ window.innerHeight  || بيجيب مساحة الوندو من غير الكنسال لاج
 *
 *  ++++++ window.outerHeight  || بيجيب مساحة الوندو ملهوش دعوة بالاكنسال بيجيب المساحة الفعلية للشاشة
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

// video 1

var video11div = document.getElementById("video11div"),
  video12div = document.getElementById("video12div"),
  video13div = document.getElementById("video13div"),
  video14div = document.getElementById("video14div"),
  video15div = document.getElementById("video15div");

video11div.textContent =
  window.innerHeight +
  " = innerHeight   بيجيب مساحة الوندو ملهوش دعوة بالاكنسال بيجيب المساحة الفعلية للشاشة ";

video12div.textContent =
  window.outerHeight + " = outerHeight  بيجيب مساحة الوندو من غير الكنسال لاج ";

video13div.textContent =
  window.innerWidth +
  " = innerWidth   بيجيب مساحة الوندو ملهوش دعوة بالاكنسال بيجيب المساحة الفعلية للشاشة ";

video14div.textContent =
  window.outerWidth + " = outerWidth  بيجيب مساحة الوندو من غير الكنسال لاج ";

// video 3

var video31div = document.getElementById("video31div"),
  video32div = document.getElementById("video32div"),
  video33div = document.getElementById("video33div"),
  video34div = document.getElementById("video34div"),
  video35div = document.getElementById("video35div");

// طريقة انو انت تعمال سطر جديد فى الارارت

//  alert("hossam \nrashad");

// confirm

// هو التراو الفاس اوكى اللى هو موافق و بتساوى تراو || كانسال اللى هى فولس

// var video31div = confirm("do you want to open google");

if (video31div === true) {
  // لو عاوز تفتاح صفحة جوجال لو داست اكية
  video32div.textContent = window.location.href = "https://www.google.com";
} else {
  video32div.textContent = "https://www.google.com";
}

// prompt

// بيكون فية الاسوال و بعدين فى حقل الادخال بيكون زاى البليس هولدار

// prompt("what is your nam", " example : hossam");

