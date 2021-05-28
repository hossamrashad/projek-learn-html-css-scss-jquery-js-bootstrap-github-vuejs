/*jslint plusplus: true, evil: true */
// jslint plusplus: true for error for ++
// evil: true for error document.write

/*global console , alert , prompt , $ , document, write, ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/

/*jslint browser: true */
/*global window */

// Dom = document object model
/**
 * document = نوع الملف و الديكيمنت هو المستند النصى اللى هو الصفحة الانترنات
 *
 * object الكان اللى هو العناصر اللى موجوده فى الصفحة
 *
 * model اللى هو التراظ اللى هو نوع الابجاكت
 */
// whats is do = programming interface for html & xml

/**
 *
 * .createElement("p");                  = انشاء عنصار
 *
 * .createTextNode(" Your Text ");       = انشاء تاكست
 *
 * .appendChild(vatName);                = ضيف فى العنصر
 *
 *
 * -------------------------------- اختيار العنصار -----------------
 *
 * document.getElementById(" IdName ");                 ==
 *
 * document.getElementsByTagName('div')[0];             ==   First div
 *
 * document.getElementsByClassName('elementClass')[0];  == First Class Not Compatible with IE 8
 *
 * document.querySelectorAll('div.class & div#id')[0];  == First class || id Not Compatible with IE 8
 *
 *
 * -------------- اختيار التيتال بتاع الصفحة و الصوار و الفارم ------------
 *
 * document.title               == اسم الكلام اللى مكتوب فى التيتال
 *
 * document.images[0];          = بجيب الصورا اللى فى الصفحة عن طريق انو يكون ابجاكت
 *
 * document.images[0].src;      = بجيب مسار اول صوراة عندى
 *
 *document.images[0].scr;       = بيجيب مسار الصورة او اى صفحة من صفات الصور اللى موجودة فى الصفحة
 *
 * document.forms.length;       = بيجيب عدد الفارم اللى فى صفحتى
 *
 * document.forms[0].valueName.value;
 *
 * document.body.
 *
 * document.links.
 *
 * .innerHTML        = بيجيب محتو العنصار و كمان لو عاوز تغير المحتو بتاع العنصر
 *
 * .textContent      = بيجيب محتو العنصار و كمان لو عاوز تغير المحتو بتاع العنصر
 *
 * Element.id = " ";
 *
 * Element.className = " ";
 *
 * Element.alt = " ";
 *
 * Element.src = " ";
 *
 * Element.title = " ";
 *
 * Element.getAttribute('id');
 *
 * Element.setAttribute('id' , 'idName');
 *
 * Element.hasAttribute(Attribute); هل العنصر فية الصفة دى
 *
 * Element.removeAttribute(Attribute);
 *
 * Element.classList; بيجيب كل الكلاسات اللى فى العنصر
 *
 * Element.contains('className'); بتاكد من انو العنصار فية كلاس كذا
 *
 * Element.item(0); بيجيب الكلاس الاولانى فى العنصر
 *
 * Element.classList.toggle("backcolor"); التبديل بين الكلاسات
 *
 * Element.classList.add("backcolor"); اضافة كلاس
 *
 * Element.classList.remove("backcolor"); ازالة كلاس
 *
 * Element.childElementCount; بيجيب عدد الابناء اللى فى العنصر 
 *
 * Element.children.length; بيجيب عدد الابناء اللى فى العنصر 
 * 
 * Element.children[0]; بيجيب عدد الابناء اللى فى العنصر 
 * 
 * Element.childNodes; بيجيب عدد الابناء اللى فى العنصر 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

var i;

var test = document.getElementById("test");

// video 1 مقدمة

var video1p = document.createElement("p"),
  video11text = document.createTextNode(
    "createElement createTextNode appendChild Hossam Rashad"
  );

video1p.appendChild(video11text);

document.body.appendChild(video1p);

// video 2 اختيار العنصر

/**
 * document.getElementById(" IdName ");                = اختيار العنصر بى الايدى
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

video21div.innerHTML = "getElementById TEXT FROM JAVASCRIPT";

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

document.createElement("hr");

for (i = 0; i < document.images.length; i = i + 1) {
  document.createElement("div").innerText = document.images[i].src;
}
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

// video 4

var video41div = document.getElementById("video41div"),
  video42div = document.getElementById("video42div"),
  video43div = document.getElementById("video43div"),
  video44div = document.getElementById("video44div"),
  video45div = document.getElementById("video45div"),
  video46div = document.getElementById("video46div");

// video41div.innerText = document.body.innerText;
function find() {
  "use strict";

  // var inputtest4 = document.getElementById("inputtest4").value;

  if (document.body.innerText.indexOf("hossam") > -1) {
    video44div.innerText = "yas";
  }
}

video46div.innerHTML = document.links.length + " عدد النكات اللى فى الصفحة ";

// video 5

var video51div = document.getElementById("video51div"),
  video52div = document.getElementById("video52div"),
  video53div = document.getElementById("video53div"),
  video54div = document.getElementById("video54div"),
  video55div = document.getElementById("video55div");

video51div.textContent = video51div.innerHTML;

console.log(video51div);

video51div.innerHTML = "yes";

// video 6
// change Element Attribute Value

var video61div = document.getElementById("video61div"),
  video62div = document.getElementById("video62div"),
  video63div = document.getElementById("video63div"),
  video64div = document.getElementById("video64div"),
  video65div = document.getElementById("video55div"),
  video6img = document.getElementById("video6img");

video61div.id = "backcolor";
video61div.textContent = "hossam";
video62div.className = "backcolor";

video6img.src = "//via.placeholder.com/100x100/333";

video6img.alt = video6img.src;

video6img.title = video6img.alt;

// video 7
// change Element Attribute Value

var video71div = document.getElementById("video71div"),
  video72div = document.getElementById("video72div"),
  video73div = document.getElementById("video73div"),
  video74div = document.getElementById("video74div"),
  video75div = document.getElementById("video75div"),
  video7img = document.getElementById("video7img"),
  video71img = document.getElementById("video71img");

video71div.textContent = video7img.getAttribute("id");

video72div.textContent = video7img.setAttribute(
  "src",
  "//via.placeholder.com/100x100/333"
);

video73div.setAttribute("name", "hossam");

video72div.textContent = video71img.setAttribute(
  "src",
  "//via.placeholder.com/100x100/333"
);

video71img.title = document.title;

// video 8

var video81div = document.getElementById("video81div"),
  video82div = document.getElementById("video82div"),
  video83div = document.getElementById("video83div"),
  video84div = document.getElementById("video84div"),
  video85div = document.getElementById("video85div"),
  video8img = document.getElementById("video8img"),
  video81img = document.getElementById("vide81img");

video81div.className = "backcolor";

video81div.textContent = "hossam";

if (video81div.hasAttribute(backcolor)) {
  video82div.textContent = " Yas";
  video82div.style.backgroundColor = "#3498db";
} else {
  video82div.textContent = " no";
  video82div.style.backgroundColor = "#3498db";
}

if (video83div.hasAttribute(backcolor)) {
  video85div.className = "";

  video84div.textContent = " Yas";

  video84div.style.backgroundColor = "#3498db";
} else {
  video84div.textContent = " no";

  video84div.style.backgroundColor = "#3498db";

  video85div.removeAttribute(backcolor);

  video85div.className = "";
}

// video 9

// ClassList | Length | Item | Contains
var video91div = document.getElementById("video91div"),
  video92div = document.getElementById("video92div"),
  video93div = document.getElementById("video93div"),
  video94div = document.getElementById("video94div"),
  video95div = document.getElementById("video95div");

video92div.textContent = video91div.classList.length;

video93div.textContent = video91div.classList.contains("one");

// video 10

// add | Remove |Toggle

var video101div = document.getElementById("video101div"),
  video102div = document.getElementById("video102div"),
  video103div = document.getElementById("video103div"),
  video104div = document.getElementById("video104div"),
  video105div = document.getElementById("video105div"),
  video10btn = document.getElementById("video10btn");

video10btn.onclick = function () {
  "use strict";
  video102div.textContent = "Rovan Hossam";

  video102div.classList.toggle("color3498db");
};

// video 11

// children | childrenNodes

var video111div = document.getElementById("video111div"),
  video112div = document.getElementById("video112div"),
  video113div = document.getElementById("video113div"),
  video114div = document.getElementById("video114div"),
  video115div = document.getElementById("video115div"),
  video11btn = document.getElementById("video11btn");

video11btn.onclick = function () {
  "use strict";
  // video111div.children.remove('active');
  video112div.classList.toggle("color3498db");
  console.log(video111div.children);
};
