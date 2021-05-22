/*jslint plusplus: true, evil: true */
// jslint plusplus: true for error for ++
// evil: true for error document.write

/*global console , alert , prompt , $ , document, write, ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/

/*jslint browser: true */
/*global window */

// Dom = document object model

// whats is do = programming interface for html & xml

/**
 *
 * createElement        = انشاء عنصار
 *
 * createTextNode       = انشاء تاكست
 *
 * appendChild          = ضيف فى العنصر
 *
 *
 * -------------------------------- اختيار العنصار -----------------
 *
 * document.getElementById(" ");                        ==
 *
 * document.getElementsByTagName('div');                ==
 *
 * document.getElementsByClassName('elementClass');     == Not Compatible with IE 8
 *
 * document.querySelectorAll('div.class & div#id');     == Not Compatible with IE 8
 *
 *
 * -------------- اختيار التيتال بتاع الصفحة و الصوار و الفارم ------------
 *
 * document.title                               == اسم الكلام اللى مكتوب فى التيتال
 *
 * document.images;              = بجيب الصورا اللى فى الصفحة عن طريق انو يكون ابجاكت
 *
 * document.images[0].src;       = بجيب مسار اول صوراة عندى
 *
 *document.images[0].scr;        = بيجيب مسار الصورة او اى صفحة من صفات الصور اللى موجودة فى الصفحة
 *
 * document.forms.length;       = بيجيب عدد الفارم اللى فى صفحتى
 * document.forms[0].valueName.value;
 *
 *
 *
 *
 *
 *
 *
 *
 */

var i;

// video 1 مقدمة

var video1p = document.createElement("p"),
  video11text = document.createTextNode("Hossam Rashad");

video1p.appendChild(video11text);

document.body.appendChild(video1p);

// video 2 اختيار العنصر

/**
 * document.getElementById(" ");                = اختيار العنصر بى الايدى
 *
 *
 *  document.getElementsByTagName('div');       = بيجيب جميع العناصر اللى جوة الصفحة و ليها وسم داف
 *
 * element[3].innerHTML                         = عاشان تختار العنصار بى رقمو فى الصفحة
 *
 *
 *
 *
 *
 *
 *
 */

var video21div = document.getElementById("video21div");

video21div.innerHTML = "TEXT FROM JAVASCRIPT";

var video22div = document.getElementsByTagName("div");

video22div[3].innerHTML =
  video22div.length +
  " getElementsByTagName " +
  " بيجيب جميع العناصر اللى جوة الصفحة و ليها وسم داف ";

var video23div = document.getElementsByClassName("video2class");

video23div[3].innerHTML = " getElementsByClassName";

var video24div = document.querySelectorAll("div.video2class");

video24div[4].innerHTML = " querySelectorAll";

/********************************************* */

// video 3

var video31div = document.getElementById("video31div"),
  video32div = document.getElementById("video32div"),
  video33div = document.getElementById("video33div"),
  video34div = document.getElementById("video34div"),
  video35div = document.getElementById("video35div"),
  video38div = document.getElementById("video38div"),
  video39div = document.getElementById("video39div");

video31div.innerHTML = "<h1>" + document.title + "</h1>";

video32div.innerHTML = "<h1>" + document.images[0].src + "</h1>";

(function self() {
  "use strict";

  for (i = 0; i < document.images.length; i = i + 1) {
    video33div.innerText = document.images[i].src;

    video34div.innerHTML = document.images[i].src + "<br>";

    document.write(document.images[i].src + "<br>");
  }
})();

var string = "//via.placeholder.com/100x100/333";

var image = (document.images.src = "//via.placeholder.com/100x100/333");

function video3image() {
  "use strict";

  document.images[0].src = image;
  document.images[1].src = image;
  document.images[2].src = image;
}

video38div.innerText = document.forms.length + " عدد الفارم اللى فى الصفحة ";

video39div.innerText = document.forms[0].test2.type;

/****************************************** */

// video 6

var video41div = document.getElementById("video41div"),
  video42div = document.getElementById("video42div"),
  video43div = document.getElementById("video43div"),
  video44div = document.getElementById("video44div"),
  video45div = document.getElementById("video45div");

// video41div.innerText = document.body.innerText;
function find() {
  "use strict";

  // var inputtest4 = document.getElementById("inputtest4").value;

  if (document.body.innerText.indexOf("hossam") > -1) {
    video44div.innerText  = "yas";
  }
}
