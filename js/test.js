/*jslint plusplus: true, evil: true */

// jslint plusplus: true for error for ++
// evil: true for error document write

/*global console , alert , prompt , $ , document, write */

/*global ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/

/*jslint browser: true */
/*global window */

var video271div = document.getElementById("video271div"),
  video272div = document.getElementById("video272div"),
  video273div = document.getElementById("video273div"),
  video274div = document.getElementById("video274div"),
  video275div = document.getElementById("video275div");

video271div.onclick = function () {
  "use strict";
  document.body.scrollTop += 100;
  console.log(document.body.scrollTop);
  if (document.body.scrollTop > 1000) {
    this.classList.add("video271divactive");
  }
};

  