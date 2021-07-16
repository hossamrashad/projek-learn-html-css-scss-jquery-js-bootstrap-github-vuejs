/*jslint plusplus: true, evil: true */
// jslint plusplus: true for error for ++
// evil: true for error document.write

/*global console , alert , prompt , confirm, $ , document, write, ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/

/*jslint browser: true */
/*global window */
// todo
// explain
// =
// !
// ?
// *
// --
// ++
// &
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// todo                                console
// todo console.dir(ElementName);

// explain طباعة الداتا اللى فى العنصر و علشان تجيب نوع داتا بعينو بتكتب اسم الداتا
// -- div(id="Test" data-name="Hossam" data-parent="Rashad")
// ++ var ElementName = document.querySelector("#Test");
// todo console.log(ElementName.dataset);
// todo console.log(ElementName.dataset.name);

// explain طريقة عمال فى الكنسال جروب
// todo console.group("Person Data");
// todo console.log("Name: Hossam");
// todo console.log("Age: 30");
// todo console.groupEnd();

// explain طريقة كتاب استرانج فى الكنسال بى الالوان
// todo console.log("I am regular and %cI'm Hossam Rashad", "color: red; font-weight: bold;");

// explain
// todo console.time("addHeadings");
// todo for (let i = 0; i < 10000; i++) {
// todo  document.body.insertAdjacentHTML("beforeend", "<h5>Heading</h5>");
// todo }
// todo console.timeEnd("addHeadings");

// =                                   javascript Dom

// todo Get Element اختيار العنصار

// explain اختيار العنصر & اسم الايدى للعنصر
// var Element = document.getElementById('IdName');
// explain اختيار العنصر بى التاج
// var Element = document.getElementsByTagName('TagName');
// explain اختيار العنصر من خلال الكلاس
// var Element = document.getElementsByClassName('ClassName');
// explain اختيار العنصار من خلال الكويرى سلاكتار ان كان كلاس او ايدي 
// var Element = document.querySelectorAll('div.ClassName');
// explain اختيار العنصر من خلال الكويرى سلاكتار ان كان كلاس او ايدي 
// var Element = document.querySelector('div.ClassName');
// explain get 
// var title = document.title;
// explain set 
// document.title = ElementName.textContent;


// explain انشاء عنصر
// 1 var ElementName = document.createElement("div");

// explain اضافة العنصر فى المكان اللى انت عاوزة
// 2  var ElementName = document.body.appendChild(ElementName);

// explain  انشاء تاكست
// 3 document.createTextNode(" Your Text ");

// explain تغير الالتربيوت او انشاء لو مش موجود
// 4  Element.setAttribute('class', 'value');

// explain بيجيب جميع خواص العنصار
/**
 * ++ Element.getBoundingClientRect();
 * -- bottom: بيكون المسافات بين العنصار من فوق فى مساحة الصفحة لاخر العنصر من تحت
 * -- height: ارتفاع العنصار
 * -- left: المارجان اللى فى العنصار
 * -- right: بيحساب عرض العنصار و كمان بيضيف المارجان اللى على اليمين
 * -- top: المسافات اللى بين العنصار و اول الصفحة
 * -- width: عرض العنصر
 * -- x: اللى هو المارجان
 * -- y: المسافات اللى بين العنصار و اول الصفحة
 */

// explain الاوتار تاكست اللى هو العنصر زاى مهو مكتوب فى صفحة html
// 5 get outerHTML
// 6 outSide.textContent = child.outerHTML;

// 7 set outerHTML
// 8 child.outerHTML = "<div class='child'>Element Outer Html  change</div>";

// todo                                     if & else
/*

explain التاكاد من وجود الكلاس 

var ElementName = document.querySelector("#HossamRashad");

++ الكلاس مش موجود  

if (ElementName.classList.contains("explain")) {
    ElementName.classList.remove("explain");
    console.log(ElementName.classList);
} else {
    ElementName.classList.add("explain");
    console.log(ElementName.classList);
}

* *************************************************
*/

// todo                                     For Loop

/**
 * 
// -- get ul id

//  ++ var myList = document.getElementById("myList");

// -- array name 

//  ++ var fruitList = ["Rovan", "Hossam", "Rashad"];

// ** for loop 

for (let fruit of fruitList) {
    let newListItem = document.createElement("li");
    newListItem.textContent = fruit;
    myList.appendChild(newListItem);
}

 */

// if nav have class "fixed-top"
$(function() {
    var nav = document.querySelector(".fixed-top");

    if (nav.classList.contains("fixed-top")) {
        var nextElementNav = nav.nextElementSibling;
        nextElementNav.style.marginTop = nav.clientHeight + "px";
        // console.log(nav.classList);
    }
});

/************************** */

var body = document.getElementsByTagName("body");

var parent = document.querySelector("div.parent");
var child = document.querySelector("div.child");
var outSide = document.querySelector("div.outSide");

var outerExplainOne = document.querySelector(".outerExplainOne");
var outerExplainTow = document.querySelector(".outerExplainTow");

var Last = document.querySelector("#Last");
var Test = document.querySelector("#Test");
var TestOne = document.querySelector("#TestOne");
var TestTow = document.querySelector("#TestTow");
var ulList = document.querySelector("#ulList");
var liFirst = document.querySelector("#ulList > li:first-of-type");
var addLi = document.createElement("li");

/************************** */