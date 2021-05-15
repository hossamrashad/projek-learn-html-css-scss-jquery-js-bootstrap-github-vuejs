/*jslint plusplus: true, evil: true */

// jslint plusplus: true for error for ++
// evil: true for error document.write

/*global console , alert , prompt , $ , document, write */

/*global ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/

/*jslint browser: true */
/*global window */


var elementString = document.getElementById("elementString"),
elementtrim = document.getElementById("elementtrim"),
stringNormal = "hossam rashad ahmed",
stringTrim = "          hossam rashad ahmed",
stringUpper = "HOSSAM RASHAD AHMED  ",
stringUpperfirst = "Hossam Rashad Ahmed";

test1 = document.getElementById("test1"),
test2 = document.getElementById("test2"),
test3 = document.getElementById("test3"),
test4 = document.getElementById("test4"),
test5 = document.getElementById("test5"),
elementFunc = document.getElementById("elementFunc"),
funcToUpperCase = document.getElementById("funcToUpperCase"),
funcToTrim = document.getElementById("funcToTrim");

test1.innerHTML = stringNormal;

function functotrim(){
  "use strict";

var returnStringTrim = stringTrim.trim();

console.log(returnStringTrim);

return returnStringTrim;

}

test2.innerHTML = functotrim() && functoUpperCase();


/********************/

function functoUpperCase(){

  "use strict";

var returnstringUpperfirst = stringNormal.toUpperCase();

return returnstringUpperfirst;

}

test3.innerHTML = functoUpperCase();

