/**
let, const

var
- معنه انو انو بتغاير 
- Function Scope
- تقدار تستخدام اسم الفاريبال اكتار من مرة بقيمة مختلفة 
- Can Be ReDeclare
-  غير معرف عند الوصول إلى متغير قبل التصريح عنه
- undefined when accessing a variable before it's declared
- إنشاء خصائص في كائن النافذة window
- create properties in the window object
let

- معنه انو مبيتغيرش لانو كل مان هو بتتعامل على حسب المكان اللى هو فية  
- Block Scope
- مينفعش تستخدام اسم الفاريبال اكتار من مرة 
- Can't Be ReDeclare
- المرجع خطأ عند الوصول إلى متغير قبل التصريح عنه
- referenceError when accessing a variable before it's declared
- إنشاء خصائص في كائن النافذة
- create properties in the window object
- لا يُنشئ خصائص في كائن النافذة window
- does not create properties in the window object

const
- معنه انو مبيتغيرش لانو كل مان هو بتتعامل على حسب المكان اللى هو فية  
- Block Scope
- مينفعش تستخدام اسم الفاريبال اكتار من مرة س
- Can't Be ReDeclare
- المرجع خطأ عند الوصول إلى متغير قبل التصريح عنه
- referenceError when accessing a variable before it's declared
- لا يُنشئ خصائص في كائن النافذة window 
- does not create properties in the window object
*/
// Video 2
// -- Function Scope
// -- Block Scope
function varTestVideo2() {
    let x = 1;

    if (true) {
        let x = 2;
        console.log("From If : " + x);
    }
    console.log("From function : " + x);
    return "Done";
}

console.log(varTestVideo2());
// - Can Be ReDeclare
// - Can't Be ReDeclare
var t = 3;
var t = 4;
console.log(t);

let y = 5;
// let y = 13;

console.log(y);

// -- undefined when accessing a variable before it's declared
console.log("u: " + u);
var u = 6;

// --referenceError when accessing a variable before it's declared
// console.log('o: ' + o);
// let o = 7;

// video 2 Arrow Function Syntax

// Normal Function
function NormalFunctionVideo3() {
    return 2;
}
console.log(NormalFunctionVideo3());

function NormalFunctionVideo3() {
    return 2;
}


// Video 11 staring methods includes repeat

// let haveIncludes = document.getElementById("video11includes").textContent;
// let outputIncludes = document.getElementById("output-includes");

// if (haveIncludes.includes("Rovan")) {
//     outputIncludes.innerHTML = "yes";
// } else {
//     outputIncludes.innerHTML = "no";
// }