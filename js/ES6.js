/**
let, const

var
- معنه انو انو بتغاير 
- Function Scope
- تقدار تستخدام اسم الفاريبال اكتار من مرة بقيمة مختلفة 
- Can Be ReDeclare
-  غير معرف عند الوصول إلى متغير قبل التصريح عنه
- undefined when accessing a variable before it's declared
- انشاء خصائص في كائن النافذة window
- create properties in the window object

let
- معنه انو مبيتغيرش لانو كل مان هو بتتعامل على حسب المكان اللى هو فية  
- Block Scope
- مينفعش تستخدام اسم الفاريبال اكتار من مرة 
- Can't Be ReDeclare
- المرجع خطأ عند الوصول إلى متغير قبل التصريح عنه
- referenceError when accessing a variable before it's declared
- انشاء خصائص في كائن النافذة
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

// const { set } = require("lodash");

// - Can Be ReDeclare
// - Can't Be ReDeclare

// -- undefined when accessing a variable before it's declared

// --referenceError when accessing a variable before it's declared

// Video 11 staring methods includes repeat

// let haveIncludes = document.getElementById("video11includes").textContent;
// let outputIncludes = document.getElementById("output-includes");

// if (haveIncludes.includes("Rovan")) {
//     outputIncludes.innerHTML = "yes";
// } else {
//     outputIncludes.innerHTML = "no";
// }

/*
  New String Methods
  startsWith => string.startsWith(Search String, Position = 0)
  endsWith => string.endsWith(Search String, End Position = string.length)
*/

// = Set هى شبيها بى الاراى وهى عباره عن ابجاكت بتخزن فية البينات
// = ملهوش كية زاى الابجاكت مبيقرارش القيمة مرتين
// = السات متقدارش تخرج نوع واحد من العناصر اللى جواه لازم تخرج جميع العناصر اللى جوه الست
// =

let mySet = new Set("Hossam");

// = نوع البينات اللى بيخرجها الست

console.log(" نوع البينات اللى بيخرجها الست " + typeof mySet);

let myArray1 = ["Hossam", "Rashad"];

for (let i = 0; i < myArray1.length; i++) {
    console.log(myArray1[i]);
}

// = تحويل السات الى اراي

console.log(" تحويل السات الى اراي " + [...mySet]);

let SetToArray = [...mySet];

console.log(SetToArray);

// =  عدد العناصر اللى فى السات

console.log("عدد العناصر اللى فى السات " + mySet.size);

// = اضافة الى السات

mySet.add("Rashad");

console.log(mySet);

// = حزف من السات

mySet.delete("s");

console.log(mySet);

// = اشيك فن وجود عنصار فى السات و النتيجة يا ترو يا فالس

console.log(mySet.has("o"));

// = بتفاضى جميع العناصر اللى جوة السات 

mySet.clear();

console.log(mySet);

// console.log(myArray);