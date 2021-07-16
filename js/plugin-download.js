/******************************* */
var jqueryToAdd = document.createElement("script");

jqueryToAdd.src =
    "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js";

document.getElementsByTagName("head")[0].appendChild(jqueryToAdd);

document.querySelector("#Button").addEventListener("click", function() {
    const img = document.querySelector(".unsizedImage");
    document.querySelector("#unsizedOutput").textContent = `
        Width = ${img.naturalWidth},
        Height = ${img.naturalHeight}`;
});

/*************************************************** */

var parentAll = document.querySelector(".parent-all");
var singleItem = document.querySelectorAll("div.single-item");

/********* Create Element *********** */
var createDivBox = document.createElement("div");
var createImg = document.createElement("img");
var createA = document.createElement("a");
var createDiv = document.createElement("div");

/********* Append Element *********** */
parentAll.appendChild(createDivBox);
createDivBox.appendChild(createImg);
createDivBox.appendChild(createDiv);
createDivBox.appendChild(createA);

/********* Add Class Element *********** */
createDivBox.setAttribute("class", "single-item");
createImg.setAttribute("class", "single-img");
createDiv.setAttribute("class", "disc-img");
createA.setAttribute("class", "download");

/********* Add Text To Element *********** */
createDiv.textContent = "this is div";
createA.textContent = "Download";

/********* for *********** */

// for (i = 0; i < document.images.length; i++) {
//     createImg.src = document.images[i].src;
//     createA.href = document.images[i].src;
//     createA.href = document.images[i].src;
//     createA.setAttribute("download", document.images[i].src);
// }

// for (i = 0; i < document.images.length; i++) {
//     /********* Create Element *********** */
//     var createA = document.createElement("a");
//     var createImg = document.createElement("img");
//     var createDiv = document.createElement("div");

//     /********* Append Element *********** */
//     $(singleItem).append(createImg);
//     $(singleItem).append(createDiv);
//     $(singleItem).append(createA);

//     /********* Add Class Element *********** */
//     createDiv.setAttribute("class", "disc-img");
//     createA.setAttribute("class", "download");

//     /********* Add Text To Element *********** */
//     createDiv.textContent = "this is div";
//     createA.textContent = "Download";

//     createImg.src = document.images[i].src;
// }

/**************************** */

var parentAll = document.querySelector("div.tow");
var imgLength = document.images.length;
var imgSrc = document.images.src;

for (i = 0; i < imgLength; i++) {
    console.log(document.images[i].src);

    let newListItem = document.createElement("a");
    newListItem.textContent = "download";
    newListItem.href = document.images[i].src;
    parentAll.appendChild(newListItem);

    newListItem.setAttribute("download", document.images[i].src);
    newListItem.setAttribute("style", "display: inline-block");

    let newListItem1 = document.createElement("img");
    newListItem1.title = document.images[i].src;
    newListItem1.src = document.images[i].src;
    parentAll.appendChild(newListItem1);
}