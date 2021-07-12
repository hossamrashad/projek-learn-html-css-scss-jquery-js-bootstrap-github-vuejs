/*jslint plusplus: true, evil: true */
// jslint plusplus: true for error for ++
// evil: true for error document.write

/*global console , alert , prompt , confirm, $ , document, write, ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/

/*jslint browser: true */
/*global window */
// !
// ?
// **
// --
// ++
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
// &
// todo
// *
// explain
// =

// todo                                console
// todo console.dir(ElementName);
// todo console.log(ElementName);


// =                                   javascript Dom

// explain انشاء عنصر 
// 1 var ElementName = document.createElement("div");

// explain اضافة العنصر فى المكان اللى انت عاوزة 
// 2  var ElementName = document.body.appendChild(ElementName);

// explain  انشاء تاكست
// 3 document.createTextNode(" Your Text ");

// explain تغير الالتربيوت او انشاء لو مش موجود
// 4  Element.setAttribute('class', 'value');


// todo                                     if & elsewhere
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

/************************** */

var ElementName = document.querySelector("#Test");

if (ElementName.classList.contains("explain")) {
    ElementName.classList.remove("explain");
    console.log(ElementName.classList);
} else {
    ElementName.classList.add("explain");
    console.log(ElementName.classList);
}


var ElementNames = document.createElement("li");

ElementNames.textContent = "Rovan Hossam";
console.dir(ElementName);

// get ul id

var myList = document.getElementById("myList");

// array name 
var fruitList = ["Rovan", "Hossam", "Rashad"];

// 
for (let fruit of fruitList) {
    let newListItem = document.createElement("li");
    newListItem.textContent = fruit;
    myList.appendChild(newListItem);
}
/************************** */