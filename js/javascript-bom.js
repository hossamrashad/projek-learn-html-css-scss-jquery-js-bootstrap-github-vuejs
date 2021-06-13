/*jslint plusplus: true, evil: true */
// jslint plusplus: true for error for ++
// evil: true for error document.write

/*global console , alert , prompt , confirm, $ , document, write, ADSAFE, report, jslint, bitwise, node*/

/*property charAt, slicexs*/

/*jslint browser: true */
/*global window */

/** What Is Bom
 *
 *  - Browser Object Model
 *
 *  What can i do with bom
 *
 *  - js bom talks to the browser
 *
 *  - doing actions not related to page
 *
 *  --- change URL
 *
 *  --- Background requests
 *
 *  --- Alert, Confirm, Prompt
 *
 *  --- Window Move, Window open, window close
 *
 *  --- change text in the status ber
 *
 * - bom information
 *
 *  -- bom has no standard
 *
 *  -- All Modern Browsers implement similar bom
 *
 *  ---- window
 *
 *  ---- screen
 *
 *  ---- location
 *
 *  ---- History
 *
 *  ---- navigation
 *
 *  ---- timing
 *
 *  ---- cookies
 *
 * -- collection of objects control the browser
 *
 * -- default object of browser is window
 *
 * -- all global js objects are member of window object
 *
 *
 * ****************** video 2 ****************
 *
 * window
 *
 * -- window object is the browser window
 *
 * -- window object supported by all browsers
 *
 * -- window object has properties & methods not supported in all browsers
 *
 * -- window is the default object of browser
 *
 * -- all global is object are members of window object
 *
 * كل عناصر الجافا اسكرابت عنصر من الوندو زاى
 * window.console.log(window.document.title); || Array || console || print()
 *
 *  ++++++ window.innerHeight  || بيجيب مساحة الوندو من غير الكنسال لاج
 *
 *  ++++++ window.outerHeight  || بيجيب مساحة الوندو ملهوش دعوة بالاكنسال بيجيب المساحة الفعلية للشاشة
 *
 * print();                    || بيطبع الصفحة
 *
 * setTimeout(functionName, 4000); || هو انو يستنا فى تنفيز الفنكشان عدد معين من الثوانى
 *
 * clearTimeout(setTimeoutName);  || بيواقان السات تايم
 *
 * setInterval(functionName, 4000); ||  هو تنفيز الفنكشان كل  عدد معين من الثوانى
 *
 * clearInterval(setIntervalName); || بيوقاف السات انتارف
 *
 * window.open("url", "_blank" ,"width=1000", "true")
 *
 * url مسار الصفحة
 *
 * true ||  اللى هو المكان اللى انت جاى منو يظهار فى الهيستراى
 *
 * --- scrollBy || scrollTo
 *
 * window.scrollBy(200, 200); || كل ما تدوس على الزورار ينزال رقم انت مديهولو
 *
 * window.scrollTo(200, 0); || بيروح عند مكان معين فى الصفحة
 *
 *
 * window.stop(); بيوقاف تحميل العناصر اللى فى الصفحة و يجيب الصفحة على اللى اتحمال قابل ما توقف التحميل
 *
 *
 * window.stop(); || بيقفال الصفحات اللى انت فتحتها من الجاف اسكربت عن طريق الجاف اسكربت يعنى انت عملت زورار لفتح و انداو ممكن تعمال زورار تقفل بيه الصفحات الللى انت فتحتها بالجافا اسكربت
 *
 * window.focus(); || هو انو الصفحة اللى انت فتحتاه بى الجافا اسكرابت بتخالى انو هى الفعالة مش الصفحة الاساسية اللى انت شغال عليها
 *
 *
 * window.innerHeight; || بيجيب مساحة الونداو من غير ارتفاع الشريط الادوات و الكنسال
 *
 * window.outerHeight; || بيجيب مساحة الواندو بى الشريط الادوات اللى فوق و تحت
 *
 *
 * window.pageXOffset; || هو الاسكرول بى العرض
 *
 * window.pageYOffset; || هو الاسكرول بى الطول
 *
 * scrollX; || هو الاسكرول بى العرض
 *
 * scrollY; || هو الاسكرول بى الطول
 *
 * window.location.href; || بيجيب مسار الصفحة اللى انت فيها
 *
 * window.location.reload(); || بيعمال ريلود للصفحة
 *
 * window.location.pathname; || اسم المسار الصفحة اللى شغال عليها
 *
 * window.location.host; || بيجيب اسم  الاستضافة اللى انت فاتح منها الموقع
 *
 * window.location.hash; || هو الايداى اللى انت بدوس على لنك بيوديك على داف فية ايدى
 *
 * window.location.hostname || بيجيب اسم الاستضافة
 *
 * window.location.pathname; || اسم الصفحة
 *
 * window.location.search || اللى هو بعد علامة الاستفهام فى البي اتش بى
 *
 * window.protocol; || اللى هو نوع الصفخة اتش تى تى بى
 *
 *
 * window.location.assign("https://www.google.com"); || بيسيب المكان اللى انت جاى منو فى الهيستراى علشان تدوس باك يرجعك على الصفحة اللى انت جاى منها
 *
 * window.location.replace("https://www.google.com"); || بيوديك على المسار اللى انت مديهولو بس بيمسح الهيسترى اللى انتى جاى منو
 *
 * window.history.length; || علشان اجيب عدد صفحات اللى فى الهيستارى اللى انا فتحته قبل و بعد الصفحة اللى انا فيها
 *
 * window.history.back; || علشان ارجع للصفحة اللى قبل الصفحة اللى انا فيها
 *
 * window.history.forward; || علشان افتاح الصفحة اللى بعد الصفحة اللى انا فيها
 *
 * window.history.go(-3); || بيقبال مسار صفحة او ارقام الرقم بيكون بيودى لادام على اد الرقام و الرقم السالب بيرجع لورة
 *
 *
 * window.screen.width; || بيجيب عرض الشاشة 
 *
 * window.screen.height; || بيجيب طول الشاشة 
 *
 *
 * cookies هو حفظ الاعدادات اللى فى الصفحة على جهازاك 
 *
 * document.cookie; بيجيب الكوكاز اللى على جهازك
 *
 *
 *
 *
 *
 *
 *
 *
 */

// video 1

var video11div = document.getElementById("video11div"),
  video12div = document.getElementById("video12div"),
  video13div = document.getElementById("video13div"),
  video14div = document.getElementById("video14div"),
  video15div = document.getElementById("video15div");

video11div.textContent =
  window.innerHeight +
  " = innerHeight   بيجيب مساحة الوندو ملهوش دعوة بالاكنسال بيجيب المساحة الفعلية للشاشة ";

video12div.textContent =
  window.outerHeight + " = outerHeight  بيجيب مساحة الوندو من غير الكنسال لاج ";

video13div.textContent =
  window.innerWidth +
  " = innerWidth   بيجيب مساحة الوندو ملهوش دعوة بالاكنسال بيجيب المساحة الفعلية للشاشة ";

video14div.textContent =
  window.outerWidth + " = outerWidth  بيجيب مساحة الوندو من غير الكنسال لاج ";

// video 3

var video31div = document.getElementById("video31div"),
  video32div = document.getElementById("video32div"),
  video33div = document.getElementById("video33div"),
  video34div = document.getElementById("video34div"),
  video35div = document.getElementById("video35div");

// طريقة انو انت تعمال سطر جديد فى الارارت

//  alert("hossam \nrashad");

// confirm

// هو التراو الفاس اوكى اللى هو موافق و بتساوى تراو || كانسال اللى هى فولس

// var video31div = confirm("do you want to open google");

if (video31div === true) {
  // لو عاوز تفتاح صفحة جوجال لو داست اكية
  video32div.textContent = window.location.href = "https://www.google.com";
} else {
  video32div.textContent = "https://www.google.com";
}

// prompt

// بيكون فية الاسوال و بعدين فى حقل الادخال بيكون زاى البليس هولدار

// prompt("what is your nam", " example : hossam");

// video 4 || setTime out , clear timeout

/* setTimeout(function, Milliseconds, pram1, param2, param3) */

// setTimeout هو تنفيز الفنكشان بعد عدد معين من الثوانى

var video41div = document.getElementById("video41div"),
  video42div = document.getElementById("video42div"),
  video43div = document.getElementById("video43div"),
  video44div = document.getElementById("video44div"),
  video45div = document.getElementById("video45div"),
  video4btn = document.getElementById("video4btn");

setTimeout(function () {
  "use strict";

  video41div.textContent = " Rovan Hossam Rashad";
}, 3000);

// طريقة تانية لكتابة الست تيم اوت

function video42test() {
  "use strict";

  video42div.textContent = " Rovan Hossam Rashad";
}

setTimeout(video42test, 4000);

// clear time out

function video43test() {
  "use strict";

  video43div.textContent = " Rovan Hossam Rashad";
}

var video43time = setTimeout(video43test, 5000);

video4btn.onclick = function () {
  "use strict";

  clearTimeout(video43time);
};

// video 5 || setInterval  , clear setInterval

/* setInterval(function, Milliseconds, pram1, param2, param3) */

// setInterval هو تنفيز الفنكشان كل  عدد معين من الثوانى

var video51div = document.getElementById("video51div"),
  video52div = document.getElementById("video52div"),
  video53div = document.getElementById("video53div"),
  video54div = document.getElementById("video54div"),
  video55div = document.getElementById("video55div"),
  video5btn = document.getElementById("video5btn");

setInterval(function () {
  "use strict";

  video51div.textContent = " Rovan Hossam Rashad";
}, 3000);

// طريقة تانية لكتابة الست تيم اوت

function video52test() {
  "use strict";

  video52div.textContent = " Rovan Hossam Rashad";
}

setInterval(video52test, 4000);

// clear setInterval

function video53test() {
  "use strict";

  video53div.textContent = " Rovan Hossam Rashad";
}

var video53time = setInterval(video53test, 5000);

video5btn.onclick = function () {
  "use strict";

  clearInterval(video53time);
};

// العداد

function countDown() {
  "use strict";

  if (video54div.textContent <= 0) {
    // video54div.textContent = window.location.href = "https://www.google.com";

    video54div.textContent = " Done";

    clearInterval(myTime);
  } else {
    video54div.textContent = video54div.textContent - 1;
  }
}

var myTime = setInterval(countDown, 1000);

// video 6 || window open || الاعلانات

/* window.open(url, name oe attribute, specification, history replace)*/

// url مسار الصفحة || about:blank

// name oe attribute || اندار اسكول الديفولت و انو انت تفتح الصفحة فى نفس المكان

// specification ||  مواصفات الصفحة طوال وعرض و خواص تانية

// history replace || اللى هو المكان اللى انت جاى منو يظهار فى الهيستراى

var video61div = document.getElementById("video61div"),
  video62div = document.getElementById("video62div"),
  video63div = document.getElementById("video63div"),
  video64div = document.getElementById("video64div"),
  video65div = document.getElementById("video65div"),
  video6btn = document.getElementById("video6btn"),
  video61btn = document.getElementById("video61btn");

video6btn.onclick = function () {
  "use strict";
  // لو مكتبتش المسار اللى هيروح فية بيفتح صفحة فاضية جديدة
  window.open("", "", "", "");
};

video61btn.onclick = function () {
  "use strict";
  window.open(
    "https://www.google.com",
    "_blank",
    "width=1000,height=1080,menubar=no,status=no",
    "true"
  );
};

// video 7 scrollBy , scrollTo

// scrollBy(x, y)  x = width || y = height

// scrollTo(x, y)  x = width || y = height

var video71div = document.getElementById("video71div"),
  video72div = document.getElementById("video72div"),
  video73div = document.getElementById("video73div"),
  video74div = document.getElementById("video74div"),
  video75div = document.getElementById("video75div"),
  video7btn = document.getElementById("video7btn"),
  video71btn = document.getElementById("video71btn");

video7btn.onclick = function () {
  "use strict";
  setTimeout(function () {
    "use strict";

    // code

    window.scrollBy(200, 200);
    window.console.log(window.scrollX);
    window.console.log(window.scrollY);
  }, 200);
};

video71btn.onclick = function () {
  "use strict";
  setTimeout(function () {
    "use strict";

    // code

    window.scrollTo(200, 0);
    window.console.log(window.scrollX);
    window.console.log(window.scrollY);
  }, 200);
};

// video 8 || stop || close || focus

var video81div = document.getElementById("video81div"),
  video82div = document.getElementById("video82div"),
  video83div = document.getElementById("video83div"),
  video84div = document.getElementById("video84div"),
  video85div = document.getElementById("video85div"),
  video8btn = document.getElementById("video8btn"),
  video81btn = document.getElementById("video81btn");

// window.stop();

// window.close();

// window.focus();

// video 9 || [inner,outer] Height , [inner,outer] Width

var video91div = document.getElementById("video91div"),
  video92div = document.getElementById("video92div"),
  video93div = document.getElementById("video93div"),
  video94div = document.getElementById("video94div"),
  video95div = document.getElementById("video95div"),
  video9btn = document.getElementById("video9btn"),
  video91btn = document.getElementById("video91btn");

video9btn.onclick = function () {
  "use strict";
  video91div.textContent = window.innerHeight + " = innerHeight";
};
video91btn.onclick = function () {
  "use strict";
  video92div.textContent = window.outerHeight + " = outerHeight";
};
// video 10 page X offset || page Y offset

var video101div = document.getElementById("video101div"),
  video102div = document.getElementById("video102div"),
  video103div = document.getElementById("video103div"),
  video104div = document.getElementById("video104div"),
  video105div = document.getElementById("video105div"),
  video10btn = document.getElementById("video10btn"),
  video101btn = document.getElementById("video101btn");

video10btn.onclick = function () {
  "use strict";
  video101div.textContent = window.pageXOffset + " = pageXOffset = width";
};

video101btn.onclick = function () {
  "use strict";
  video102div.textContent = window.pageYOffset + " = pageYOffset = height";
  video103div.textContent = "hossam Rashad";
  video103div.style.backgroundColor = "red";
  video103div.style.color = "#fff";
};

(function functionName() {
  "use strict";

  if (window.pageYOffset >= 200) {
    // cod one
    video104div.textContent = "hossam ";
    video104div.style.backgroundColor = "red";
    video104div.style.color = "#fff";
  } else {
    // cod tow
    video104div.textContent = " Rashad";
    video104div.style.backgroundColor = "#333";
    video104div.style.color = "#fff";
  }
})();
video105div.textContent = scrollY;

// video 11  location => href

/**
 * location
 * - abslute url
 * - page within th current web page
 * - hash id within the page
 * - protocl [ftp, mail, file]
 */
var video111div = document.getElementById("video111div"),
  video112div = document.getElementById("video112div"),
  video113div = document.getElementById("video113div"),
  video114div = document.getElementById("video114div"),
  video115div = document.getElementById("video115div"),
  video11btn = document.getElementById("video11btn"),
  video111btn = document.getElementById("video111btn"),
  video112btn = document.getElementById("video112btn"),
  video113btn = document.getElementById("video113btn"),
  video114btn = document.getElementById("video114btn"),
  video115btn = document.getElementById("video115btn");

video111div.textContent = window.location.href;
video111btn.onclick = function () {
  "use strict";
  // كدا انا غيارت مسار الصفحة اللى انا فيها الى صفحة تانية
  window.location.href = "https://www.google.com.eg/";
};

video112btn.onclick = function () {
  "use strict";
  // كدا انا غيارت مسار الصفحة اللى انا فيها الى صفحة تانية
  window.location.href = "tast.html";
};
video113btn.onclick = function () {
  "use strict";
  // كدا انا غيارت مسار الصفحة اللى انا فيها الى صفحة تانية
  window.location.href = "#video14div";
};
video114btn.onclick = function () {
  "use strict";
  // كدا انا غيارت مسار الصفحة اللى انا فيها الى صفحة تانية
  window.location.href = "mailto:bibo2010508@ayhoo.com";
};
video115btn.onclick = function () {
  "use strict";
  // كدا انا غيارت مسار الصفحة اللى انا فيها الى صفحة تانية
  window.location.href = "ftp:E:/FrameWork/new-framework/show.html";
};
// video 12

var video121div = document.getElementById("video121div"),
  video122div = document.getElementById("video122div"),
  video123div = document.getElementById("video123div"),
  video124div = document.getElementById("video124div"),
  video125div = document.getElementById("video125div"),
  video12btn = document.getElementById("video12btn"),
  video121btn = document.getElementById("video121btn");
video12btn.onclick = function () {
  "use strict";
  video121div.textContent = window.location.host;
};

video121btn.onclick = function () {
  "use strict";
  video122div.textContent = window.location.hash;
};
// video 13 =>  protocol || search || pathName

/**
 * protocol:
 * - http = hyperText transfer protocol
 *
 * - https = hyperText transfer protocol secured
 *
 * - file
 *
 * - mailto
 *
 * - ftp = file transfer protocol
 */

var video131div = document.getElementById("video131div"),
  video132div = document.getElementById("video132div"),
  video133div = document.getElementById("video133div"),
  video134div = document.getElementById("video134div"),
  video135div = document.getElementById("video135div"),
  video13btn = document.getElementById("video13btn"),
  video131btn = document.getElementById("video131btn");
video131div.textContent = window.location.protocol + " protocol";

// video 14 replace || assign || reload

var video141div = document.getElementById("video141div"),
  video142div = document.getElementById("video142div"),
  video143div = document.getElementById("video143div"),
  video144div = document.getElementById("video144div"),
  video145div = document.getElementById("video145div"),
  video14btn = document.getElementById("video14btn"),
  video141btn = document.getElementById("video141btn");

video14btn.onclick = function () {
  "use strict";
  window.location.assign("https://www.google.com");
};

video141btn.onclick = function () {
  "use strict";
  window.location.replace("https://www.google.com");
};

// video 15 || back || forward || go

var video151div = document.getElementById("video151div"),
  video152div = document.getElementById("video152div"),
  video153div = document.getElementById("video153div"),
  video154div = document.getElementById("video154div"),
  video155div = document.getElementById("video155div"),
  video15btn = document.getElementById("video15btn"),
  video151btn = document.getElementById("video151btn");

video15div.textContent = window.history.length;

// video 16  navigator

var video161div = document.getElementById("video161div"),
  video162div = document.getElementById("video162div"),
  video163div = document.getElementById("video163div"),
  video164div = document.getElementById("video164div"),
  video165div = document.getElementById("video165div"),
  video166div = document.getElementById("video166div"),
  video167div = document.getElementById("video167div"),
  video168div = document.getElementById("video168div"),
  video16btn = document.getElementById("video16btn"),
  video161btn = document.getElementById("video161btn");

video161div.textContent = window.navigator.appCodeName + " || appCodeName";
video162div.textContent = window.navigator.appName + "  || appName";
// الاصدار
video163div.textContent = window.navigator.appVersion + " || appVersion";
video164div.textContent = window.navigator.platform + "  || platform";
video165div.textContent = window.navigator.cookieEnabled + "  || cookieEnabled";
video166div.textContent = window.navigator.language + "  || language";
video167div.textContent = window.navigator.onLine + " || onLine";
video168div.textContent = window.navigator.product + " || product";

// video 17 window screen

var video171div = document.getElementById("video171div"),
  video172div = document.getElementById("video172div"),
  video173div = document.getElementById("video173div"),
  video174div = document.getElementById("video174div"),
  video175div = document.getElementById("video175div"),
  video17btn = document.getElementById("video17btn"),
  video171btn = document.getElementById("video171btn");

  video171div.textContent = window.screen.height + " طول الشاشة";
  video172div.textContent = window.screen.width + " عرض الشاشة ";
  video173div.textContent = window.screen.availHeight + " طول الشاشة المتاح";
  video174div.textContent = window.screen.availWidth + "  عرض الشاشة المتاح  ";
  video175div.textContent = window.screen.colorDepth + "  درجة الالوان   ";
  // video175div.textContent = window.screen.colorDepth + "  درجة الالوان   ";
  video175div.textContent = window.screen.pixelDepth + "  درجة الالوان   ";


// video 18 cookies
// cookies هو حفظ الاعدادات اللى فى الصفحة على جهازاك 
/* 
document.cookie("name=value; expires=date; path=");
path= لو مكتبتش فية حاجة بيطبق الكوكاز على الصفحة اللى انت فتحها بس 
*/
var video181div = document.getElementById("video181div"),
  video182div = document.getElementById("video182div"),
  video183div = document.getElementById("video183div"),
  video184div = document.getElementById("video184div"),
  video185div = document.getElementById("video185div"),
  video18btn = document.getElementById("video18btn"),
  video181btn = document.getElementById("video181btn");
  video181div.textContent = document.cookie;
// video 19

var video191div = document.getElementById("video191div"),
  video192div = document.getElementById("video192div"),
  video193div = document.getElementById("video193div"),
  video194div = document.getElementById("video194div"),
  video195div = document.getElementById("video195div"),
  video19btn = document.getElementById("video19btn"),
  video191btn = document.getElementById("video191btn");
// انشاء الكوكاز
//document.cookie = "mainFont=Cairo";

// document.cookie = "mainFont=Cairo; expires=Sun Jun 20 2021 12:00:00 GMT+0200; path=/";

// تعديل على الكوكاز

// document.cookie = "mainFont=Droid; expires=Sun Jun 20 2021 12:00:00 GMT+0200; path=/";

// طريقة حزف الكوكاز بتغير الديت لتاريخ قديم

// document.cookie = "mainFont=Droid; expires=Sun Jun 1 2021 12:00:00 GMT+0200; path=/";