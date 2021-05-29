/*jslint plusplus: true, evil: true */

// jslint plusplus: true for error for ++
// evil: true for error document.write

/*global console , alert , prompt , $ , document, write */

/*global ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/

/*jslint browser: true */
/*global window */

var myDiv = document.getElementById("main");

myDiv.onclick = function () {
  "use strict";

  document.documentElement.scrollTop += 100;

  console.log(document.documentElement.scrollTop);

  if (document.documentElement.scrollTop > 1000) {
    this.classList.add("active");
  }else{
    this.classList.remove("active");

  }
};
