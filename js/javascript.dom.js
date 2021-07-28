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
 *
 */
// whats is do = programming interface for html & xml

/**
 *
 * ++ document.createElement("div");                  = انشاء عنصار
 *
 * -- document.createTextNode(" Your Text ");       = انشاء تاكست
 *
 * * .appendChild(varName);                = ضيف فى العنصر و بيضيفو فى الاخر
 *
 *
 * -------------------------------- اختيار العنصار -----------------
 *
 * ? document.getElementById("IdName ");                 ==
 *
 * todo document.getElementsByTagName('div')[0];             ==   First div
 *
 * 1 document.getElementsByClassName('elementClass')[0];  == First Class Not Compatible with IE 8
 *
 * 2 document.querySelectorAll('div.class & div#id')[0];  == First class || id Not Compatible with IE 8
 *
 * 3 Document.QuerySelector("#ElementName");
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
 * Element.children[0]. ....; بيجيب الابن اللى فى العنصر
 *
 * Element.childNodes.length; بيجيب عدد الابناء اللى فى العنصر
 *
 * Element.firstElementChild. ...;  بيجيب اول عنصر فى الابن
 *
 * Element.firstChild. ...;  بيجيب اول الابن
 *
 * Element.lastElementChild. ...;  بيجيب اخار عنصر فى الابن
 *
 * Element.lastChild. ...;  بيجيب اخار الابن
 *
 * VarName.insertBefore(ElementCreate, Parent.childNodes[3]);
 * طريقة اضافة عنصر فى المكان اللى انت عاوزة من الاب اللى انت عاوز يظهار فية جوة الابنا العنصار اللى انت  انشاتو بتختار المكان اللى هيظهار فية
 *
 *
 * ------------- ازالة عنصر معين من مكانو ------ ------
 *
 * Element.removeChild(ElementParent.childNodes[3]);
 *
 *
 * ---------------- نوع العنصار ----------------
 * Element.childNodes[0].nodeName; نوع العنصار
 *
 * Element.childNodes[0].tagName; نوع العنصار و لازم يكون عنصار مش تكاست
 *
 * Element.childNodes[0].nodeValue; قيمة العنصار
 *
 * Element.childNodes[0].nodeType; نوع العنصار
 *
 * -- nodeType = Element = 1
 * -- nodeType = text = 3
 * -- nodeType = attribute = 2
 * -- nodeType = comment = 8
 *
 * ---------------------- طريقة استنساخ عنصر كامل و وضعو فى عنصار ---------
 *
 * التراو لانو ياخد العنصار بالاطفال اللى جواه و الفلس بياخد الالتربيوت من غير التكاست او العنصار اللى جواه
 * Element.childNodes[1].cloneNode(true);
 *
 * ----------------------------- الوصول الى الاب بتاع العنصر ---------------
 * Element.parentNode;
 *
 * Element.parentElement;
 *
 * ------------------- الوصول الى الاشقاء بتوع العنصار -------------------
 *
 * Element.nextSibling.
 *
 * Element.nextElementSibling.
 *
 * Element.previousSibling.
 *
 * Element.previousElementSibling.
 *
 * ---------------------- طريقة انو انا اعمل فوكاس على عنصار ----------
 *
 * Element.focus();
 *
 * Element.blur();
 *
 *
 * --------------- التعامل مع العرض و الطول ----------
 *
 * clientHeight || clientWidth
 *
 * clientHeight = Viewable Area || المكان اللى ينفاع تشوفو
 * clientHeight = include padding || بتحساب الباداً بتاع العنصار
 * clientHeight = no border || مبتحسبش البوردار
 * clientHeight = no margin || مبتحسبش المارجان
 * clientHeight = no scroll || مبتحسبش الاسكراول
 *
 * ----
 * scrollHeight || scrollWidth
 *
 * All Area Include Invisible Area || بيجيب المساحة المخفية
 *
 * Include padding || بيجيب البادانج بيحسبو
 *
 * clientHeight = no border || مبتحسبش البوردار
 *
 * clientHeight = no margin || مبتحسبش المارجان
 *
 * clientHeight = no scroll || مبتحسبش الاسكراول
 * 
 * 
 * offsetHeight || offsetWidth
// clientHeight = Viewable Area || المكان اللى ينفاع تشوفو
// clientHeight = include padding || بتحساب الباداً بتاع العنصار
// clientHeight = include border || بيحسب البوردار
// clientHeight = no margin || مبتحسبش المارجان
// clientHeight = include scroll || بيحسب الاسكراول
 * 
 * 
 * Element.clientTop; بيحساب الابردار بتاع العنصار من فوق و من على الشمال و في حالة الديركشان عربى بيحساب حجم الاسكرال للعنصار و حجم الاسكرال بيكون 17 بيكسال 
 * Element.clientLeft; بيحساب الابردار بتاع العنصار من فوق و من على الشمال و في حالة الديركشان عربى بيحساب حجم الاسكرال للعنصار و حجم الاسكرال بيكون 17 بيكسال 
 * 
 * 
 * 
 * ----------------------- style -----------------
 * 
 * Element.style.color = '#3498db';
 * 
 * ------------------ document----------------------
 * 
 * document.inputEncoding + ' نوع الترميز بتاع الصفحة';
 * 
 * document.lastModified + 'بتجيب اخار تعديل عملتو فى الصفحة ';
 * 
 * document.URL; بيجيب مسار الصفحة 
 * 
 * 
 * 
 * ------- creat element || creat text node || create comment -----------
 * 
 * Element =  document.createElement("div"),
 * Element = document.createTextNode("text nod"),
 * Element = document.createComment("start comment"),
 * Element = .appendChild(Element);
 * 
 * ----------------- طريقة اضافه ارتربيوت للعنصار ---------
 * 
 * varName.document.createAttribute("class");
 * 
 * varName.value = "backcolor";
 * 
 * Element.setAttributeNode(varName);
 * 
 * 
 *  ----------- مهمة --------------------
 * 
 * دى اللى بتخالى الزورار يظهار الاسكرال تو تاوب
 * 
 * document.documentElement.scrollTop > 1000
 * 
 * -- form -- 
 * Element.onfocus
 * 
 * Element.onblur
 * 
 * Element.onsubmit
 * 
 * Element.onkeydown
 * 
 * Element.onkeyup
 * 
 * Element.onkeypress
 * 
 * 
 * 
 *  -- mouse -- 
 * Element.onclick
 * 
 * Element.ondblclick
 * 
 * Element.oncontextmenu
 * 
 * Element.onmouseenter
 * 
 * Element.onmouseleave
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

        // document.write(document.images[i].src + "<br>");
    }
})();

document.createElement("hr");

for (i = 0; i < document.images.length; i = i + 1) {
    document.createElement("div").innerText = document.images[i].src;
}
var string = "images/portfolio-1.jpg";

var image = (document.images.src = "images/portfolio-1.jpg");

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

// console.log(video51div);

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

video6img.src = "images/portfolio-1.jpg";

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
    "images/portfolio-1.jpg"
);

video73div.setAttribute("name", "hossam");

video72div.textContent = video71img.setAttribute(
    "src",
    "images/portfolio-1.jpg"
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

video10btn.onclick = function() {
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

video11btn.onclick = function() {
    "use strict";
    video112div.textContent = video111div.childNodes.className;
    console.log(video111div.childNodes.textContent);
};

// video 12

// First/last child | First/last Element child

var video121div = document.getElementById("video121div"),
    video122div = document.getElementById("video122div"),
    video123div = document.getElementById("video123div"),
    video124div = document.getElementById("video124div"),
    video125div = document.getElementById("video125div");

video122div.textContent = video121div.lastElementChild;

// console.log(video121div.lastChild);

// video 13

// Append child

var video131div = document.getElementById("video131div"),
    video132div = document.getElementById("video132div"),
    video133div = document.getElementById("video133div"),
    video134div = document.getElementById("video134div"),
    video135div = document.getElementById("video135div");
// انشاء العنصر 
var video13createElement = document.createElement("div"),
    // انشاء التكست 
    video13text = document.createTextNode("Rovan Hossam");
// اضافة التكست للعنصر اللى انشاتة 
video13createElement.appendChild(video13text);
// اضافة علاس للعنصر 
video13createElement.className = "active";
// اضافة العنصر الابنفى الاب 
video131div.appendChild(video13createElement);

// video 14

// insert Before

var video141div = document.getElementById("video141div"),
    video142div = document.getElementById("video142div"),
    video143div = document.getElementById("video143div"),
    video144div = document.getElementById("video144div"),
    video145div = document.getElementById("video145div");

var video14createElement = document.createElement("div"),
    video14text = document.createTextNode("Rovan Hossam");

video14createElement.appendChild(video14text);

video14createElement.className = "active";

video141div.insertBefore(video14createElement, video141div.childNodes[60]);

// video 15

// remove child

var video151div = document.getElementById("video151div"),
    video152div = document.getElementById("video152div"),
    video153div = document.getElementById("video153div"),
    video154div = document.getElementById("video154div"),
    video155div = document.getElementById("video155div");

video151div.removeChild(video151div.childNodes[3]);

// video 15

// node[Name, Value, Type]

var video161div = document.getElementById("video161div"),
    video162div = document.getElementById("video162div"),
    video163div = document.getElementById("video163div"),
    video164div = document.getElementById("video164div"),
    video165div = document.getElementById("video165div");

// video162div.textContent = video161div.childNodes[0].nodeName;
// video162div.textContent = video161div.childNodes[1].tagName;
// video162div.textContent = video161div.childNodes[0].nodeValue;
video162div.textContent = video161div.childNodes[0].nodeType;
// nodeType = Element = 1
// nodeType = text = 3
// nodeType = attribute = 2
// nodeType = comment = 8

// video 17 ||||| ConeNode

var video171div = document.getElementById("video171div"),
    video172div = document.getElementById("video172div"),
    video173div = document.getElementById("video173div"),
    video174div = document.getElementById("video174div"),
    video175div = document.getElementById("video175div");

var video17copy = video171div.childNodes[1].cloneNode(true);

video172div.appendChild(video17copy);

// video 18 ||||| ParentNode, ParentElement

var video181div = document.getElementById("video181div"),
    video182div = document.getElementById("video182div"),
    video183div = document.getElementById("video183div"),
    video184div = document.getElementById("video184div"),
    video185div = document.getElementById("video185div"),
    video18btn = document.getElementById("video18btn");

video182div.textContent = video18btn.parentNode.id;
video183div.textContent = video18btn.parentElement.id;

video18btn.onclick = function() {
    "use strict";
    this.parentNode.style.display = "None";
};

// video 19 |||||  next sibling, next element sibling

var video191div = document.getElementById("video191div"),
    video192div = document.getElementById("video192div"),
    video193div = document.getElementById("video193div"),
    video194div = document.getElementById("video194div"),
    video195div = document.getElementById("video195div");

video191div.childNodes[2].previousElementSibling.className = "backcolor";

video192div.textContent = video191div.childNodes.textContent;

// video 20 |||||  Focus اكون دايس على العنصار , Blur ابعد من على العنصار

var video201div = document.getElementById("video201div"),
    video202div = document.getElementById("video202div"),
    video203div = document.getElementById("video203div"),
    video204div = document.getElementById("video204div"),
    video205div = document.getElementById("video205div"),
    video20form = document.getElementById("video20form"),
    video20input = document.getElementById("video20input");

window.onload = function() {
    "use strict";
    video20input.focus();
};

// video 21 |||||  click

var video21div = document.getElementById("video21div"),
    video21btn = document.getElementById("video21btn");

video21btn.onclick = function() {
    "use strict";

    this.parentElement.style.display = "None";
};

window.onload = function() {
    "use strivt";
    // كدا انا شغالت الكلاك ساعت ما الصفحة تحمل
    // video21btn.click();
    // طريقة انو انا اخلى الزورار يستانى قابل ما اخلية يشتغال
    setTimeout(function() {
        video21btn.click();
    }, 2200);
};

// video 22 addEventListener

// video 23 clientHeight || clientWidth

// clientHeight = Viewable Area || المكان اللى ينفاع تشوفو
// clientHeight = include padding || بتحساب الباداً بتاع العنصار
// clientHeight = no border || مبتحسبش البوردار
// clientHeight = no margin || مبتحسبش المارجان
// clientHeight = no scroll || مبتحسبش الاسكراول

var video231div = document.getElementById("video231div"),
    video232div = document.getElementById("video232div"),
    video233div = document.getElementById("video233div"),
    video234div = document.getElementById("video234div"),
    video235div = document.getElementById("video235div");

video232div.textContent = video231div.clientHeight + "px";

// video 24 scrollHeight || scrollWidth
/*
  All Area Include Invisible Area || بيجيب المساحة المخفية 

  Include padding || بيجيب البادانج بيحسبو

  clientHeight = no border || مبتحسبش البوردار
  clientHeight = no margin || مبتحسبش المارجان
  clientHeight = no scroll || مبتحسبش الاسكراول


  */

var video241div = document.getElementById("video241div"),
    video242div = document.getElementById("video242div"),
    video243div = document.getElementById("video243div"),
    video244div = document.getElementById("video244div"),
    video245div = document.getElementById("video245div");

video242div.textContent = video241div.clientHeight + "px";
video243div.textContent = video241div.scrollHeight + "px";

// video 25 offsetHeight || offsetWidth

// clientHeight = Viewable Area || المكان اللى ينفاع تشوفو
// clientHeight = include padding || بتحساب الباداً بتاع العنصار
// clientHeight = include border || بيحسب البوردار
// clientHeight = no margin || مبتحسبش المارجان
// clientHeight = include scroll || بيحسب الاسكراول

var video251div = document.getElementById("video251div"),
    video252div = document.getElementById("video252div"),
    video253div = document.getElementById("video253div"),
    video254div = document.getElementById("video254div"),
    video255div = document.getElementById("video255div");

video252div.textContent = video251div.clientHeight + "px";
video253div.textContent = video251div.scrollHeight + "px";

// video 27

var video271div = document.getElementById("video271div"),
    video272div = document.getElementById("video272div"),
    video273div = document.getElementById("video273div"),
    video274div = document.getElementById("video274div"),
    video275div = document.getElementById("video275div");

video271div.onclick = function() {
    "use strict";
    document.documentElement.scrollLeft += 100;
    // console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 1000) {
        this.classList.add("video271divactive");
    } else {
        this.classList.remove("video271divactive");
    }
};

window.onload = function() {
    "use strict";

    // console.log(document.documentElement.scrollTop);

    if (document.documentElement.scrollTop > video272div.offsetHeight) {
        setTimeout(function() {
            video272div.classList.add("video272divactive");
        }, 2000);
    }
};

// video 28 client left || client top
// هو بيحساب الاحجم البوردار و الاسكرال و كمان علشان تشوف الاسكرال لازم تغير الديركشان الى عربى علشان يحسبو و حجم الاسكرال بيكون 17 بيكسال

var video28divcustom = document.getElementById("video28divcustom"),
    video281div = document.getElementById("video281div"),
    video282div = document.getElementById("video282div");

video281div.textContent = video28divcustom.clientTop;
video282div.textContent = video28divcustom.clientLeft;

// video 29 style

var video291div = document.getElementById("video291div"),
    video292div = document.getElementById("vido292div"),
    video293div = document.getElementById("vido293div"),
    video294div = document.getElementById("vido294div"),
    video295div = document.getElementById("vido295div");

video291div.style.backgroundColor = "#ff0000";
video291div.style.color = "#00f";
video291div.style.height = "30px";

var video301div = document.getElementById("video301div"),
    video302div = document.getElementById("video302div"),
    video303div = document.getElementById("video303div"),
    video304div = document.getElementById("video304div"),
    video305div = document.getElementById("video305div");

video301div.textContent = document.inputEncoding + " نوع الترميز بتاع الصفحة";

video302div.textContent =
    document.lastModified + "بتجيب اخار تعديل عملتو فى الصفحة ";

// جابلى الصفحة كلها فى الكنسال
// console.log(document.lastElementChild);

video303div.textContent = document.URL;

// vide31 creat element || creat text node || create comment

var video311div = document.getElementById("video311div"),
    video311createlement = document.createElement("div"),
    video311text = document.createTextNode("text nod"),
    video311commentstart = document.createComment("start comment"),
    video311commentend = document.createComment("end comment");

video311createlement.appendChild(video311commentstart);

video311createlement.appendChild(video311text);

video311div.appendChild(video311createlement);

video311createlement.appendChild(video311commentend);

// video 32 create attribute

var video321div = document.getElementById("video321div"),
    video32attribute = document.createAttribute("class");

video32attribute.value = "backcolor";

video321div.setAttributeNode(video32attribute);

// video33 event how to write

var video331div = document.getElementById("video331div"),
    video333div = document.getElementById("video333div"),
    video33btn = document.getElementById("video33btn"),
    video331btn = document.getElementById("video331btn");

video331btn.onclick = function changecolor1() {
    "use strict";

    video331div.style.color = "#f00";
};
// video331btn.onclick = changecolor1();

function changecolor() {
    "use strict";

    video331div.style.color = "#3498db";
}

function changecolor2() {
    "use strict";

    video331div.style.color = "#138496";
}
video332btn.onclick = changecolor2;

// video 34 event | onload | onscroll | onresize

var video341div = document.getElementById("video341div"),
    video342div = document.getElementById("video342div"),
    video343div = document.getElementById("video343div"),
    video344div = document.getElementById("video344div"),
    video345div = document.getElementById("video345div");

window.onload = function() {
    "use strict";
    video341div.style.backgroundColor = "#3498db";
    video341div.style.height = "100px";
    video341div.style.width = "100px";
};

window.onscroll = function() {
    "use strict";
    // بيحساب جميع المسافه اللى بيعملها الاسكرال
    console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop > 9755) {
        video342div.textContent = "yes";
        video341div.textContent = "rovan";
    } else {
        video342div.textContent = " ";
        video341div.textContent = "hossam ";

    }
};

window.onresize = function() {
    "use strict";

    if (document.width >= 1200) {
        video343div.textContent = "window = 1200px ";
    } else {
        video343div.textContent = "window != 1200px ";
    }
};

// video 35 onfocus | onblur | onsubmit

var video351div = document.getElementById("video351div"),
    video352div = document.getElementById("video352div"),
    video35form = document.getElementById("video35form"),
    video35input = document.getElementById("video35input"),
    video35submit = document.getElementById("video35submit");

video35input.onfocus = function() {
    "use strict";

    video352div.textContent = "focus Message";
};

video35input.onblur = function() {
    "use strict";

    // video352div.textContent = " ";

    if (video35input.value == "") {
        video352div.textContent = " it is embty ";
    } else if (video35input.value.length < 10) {
        video352div.textContent = " it is < 10 ";
    }
};

video35input.onsubmit = function(e) {
    e.preventDefault();
};

// video 36 onclick || on mouse enter

var video361div = document.getElementById("video361div"),
    video362div = document.getElementById("video362div"),
    video363div = document.getElementById("video363div"),
    video364div = document.getElementById("video364div"),
    video365div = document.getElementById("video365div");

video361div.textContent = " click";

video361div.onclick = function() {
    "use strict";
    video362div.textContent = "you are click";
};

video361div.ondblclick = function() {
    "use strict";
    video362div.textContent = "you are dblclick";
};
// مينفعش تدوس كلاك يمين على العنصار 
video361div.oncontextmenu = function(e) {

    "use strict";

    e.preventDefault();

    video362div.textContent = "you are oncontextmenu";
};

video361div.onmouseenter = function() {

    "use strict";


    video362div.textContent = "you are onmouseenter";
};
video361div.onmouseleave = function() {

    "use strict";

    video362div.textContent = "you are onmouseleave";
};

video361div.onkeypress = function() {

    "use strict";

    video362div.textContent = "you are onmousedown";
};