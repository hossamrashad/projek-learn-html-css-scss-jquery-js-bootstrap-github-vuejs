/*jslint plusplus: true, evil: true */

// jslint plusplus: true for error for ++
// evil: true for error document.write


/*global window */




/*global console*/
/*global alert*/
/*global prompt*/
/*global $*/
/*global document, write*/


var years;

// var  video461div = document.getElementById("video461div"),
// video462div = document.getElementById("video462div"),
// video463div = document.getElementById("video463div"),
// video464div = document.getElementById("video464div"),
// video465div = document.getElementById("video465div"),
// video466div = document.getElementById("video466div"),
// video467div = document.getElementById("video467div"),
// video468div = document.getElementById("video468div"),
// video469div = document.getElementById("video469div"),
// video4610div = document.getElementById("video4610div");
// First Example
/*
var i;

for (i = 0; i <= 10; i++) {
  console.log(i);
  video461div.innerHTML = i;
}
*/
// Second Example

// var i = 0;

/*for (;i<= 10; i++) {
  console.log(i);
  video462div.innerHTML = i;
}
*/
// Third Example

// var i = 0;

/*for (;;i ++){
  if (i > 10) break;

  console.log(i);
  video463div.innerHTML = i;
}*/
// var i = 0;

/*for (;;) {
  if (i > 10) break;
  video464div.innerHTML = i;

  console.log(i);
  i++;
}
*/

function selectYears(Start, End) {
  "use strict";
  document.write("<select>");
  for (years = Start; years <= End; years++) {
    document.write("<option value=\"" + years + "\">" + years + "</option>");
    console.log(years);
  }
  document.write("</select>");
}
selectYears(1950, 2021); // Hossam

