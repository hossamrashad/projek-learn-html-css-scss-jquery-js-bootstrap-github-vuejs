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

// = Destructuring Array

const food = ["Burger", "Pizza", "Chicken", "Meat", "Rice"];

const [one, , , four] = food;

console.log(`The Food I Love Is: ${one}, ${four}`);