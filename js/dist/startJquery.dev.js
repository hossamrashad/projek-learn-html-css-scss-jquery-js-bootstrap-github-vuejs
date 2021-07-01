"use strict";

/* global document, console, alert, prompt, $*/

/*
 * short code document.ready || $(function () {  });
 *
 * Events                    || 1- click 2- dblclick 3- mouseenter 4- mouseleave 5- hover
 *
 * effect                    || hide ||show ||toggle
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/**
 * $ بتعابر على الجي كويرى
 * $ = JQuery
 * window.onload      =     javascript
 * document.ready     =     jquery
 *
 * compressed  هش هتعادالى على الجى كويرى
 * uncompressed  مش مدغوطو و هتعدل عليها 
 */

/* تقدار تستخدام الفنكشان كدا بس الفرق انو دى مش بتستنى الصفحة تحامل
وداه الشورط كود
$(function () {
  "use strict";
  $("#jqvidero2 p").hide();
});
*/
// الشرط كواد للدكيمانت رادى
$(function () {// My Code Here
}); // Events = 1 - click 2 - dblclick

$(document).ready(function () {
  "use strict";

  $("#jqvidero2 .jqpvideo2").hide();
}); // طريقة انو انت تكتاب خواص السي اس اس

$(document).ready(function () {
  "use strict";

  $("#jqvidero2 .jqvideo21").css("color", "#F00");
});
/****************************** */
// video3
// event click|| dblclick || mouseenter || mouseLeave || hover

$(document).ready(function () {
  "use strict";

  $("#jqbtnvideo3").click(function () {
    // this راجاع على العنصار اللى انا مختارو
    $(this).css("backgroundColor", "#F00");
    $("#jqpvideo3").hide();
  });
});
$(document).ready(function () {
  "use strict";

  $("#jqbtnvideo31").dblclick(function () {
    $(this).css("backgroundColor", "#080");
    $("#jqpvideo31").hide();
  });
});
$(document).ready(function () {
  "use strict";

  $("#jqbtnvideo32").mouseenter(function () {
    $(this).css("backgroundColor", "#080");
    $("#jqpvideo32").hide();
  });
});
$(document).ready(function () {
  $("#jqbtnvideo33").mouseleave(function () {
    $(this).css("backgroundColor", "#3498db");
    $("#jqpvideo33").css("color", "#3498db");
  });
});
$(document).ready(function () {
  $("#jqbtnvideo34").hover(function () {
    // mouse enter
    $(this).css("backgroundColor", "#3498db");
    $("#jqpvideo34").css("color", "#3498db");
  }, function () {
    // mouse live
    $(this).css("backgroundColor", "#f00");
    $("#jqpvideo34").css("color", "#f00");
  });
});
/*****************************************/
// video4
// effect hide ||show ||toggle
// بيخالى العنصر دسبالى نان

$(document).ready(function () {
  "use strict"; // hide(speed, callbackFunction(){})
  // القيمة الافتراضية 400 ميل ثانية
  // speed = slow | fast
  // بيخفى العنصار

  $("#jqbtnvideo4").click(function () {
    $("#jqpvideo4").hide(2000, function () {
      $(jqbtnvideo4).css("backgroundColor", "#f00");
    });
  }); // show(speed, callbackFunction(){})
  // بيظهار العنصار المختفى

  $("#jqbtnvideo41").click(function () {
    $("#jqpvideo41").show();
  }); // toggle(speed, callbackFunction(){})
  // التاجالى بيعكاس العنصر فى الظهور و الاختفاء

  $("#jqbtnvideo42").click(function () {
    $("#jqpvideo42").toggle();
  });
});
/****************************** */
//video5
// effect fadeIn

$(document).ready(function () {
  "use strict"; // fadeIn بيظهار العنصار من الاختفاء و بييكون مختفى بى الاباستى
  // fadeIn(speed, callbackFunction(){})

  $("#jqbtnvideo5").click(function () {
    $("#jqpvideo5").fadeIn();
  }); //fadeOut بيخفى العنصار
  // fadeOut(speed, callbackFunction(){})

  $("#jqbtnvideo51").click(function () {
    $("#jqpvideo51").fadeOut();
  }); // fadeToggle لو العنصار ظاهر بيختفى و لو مختفى بيظهار
  // fadeToggle(speed, callbackFunction(){})

  $("#jqbtnvideo52").click(function () {
    $("#jqpvideo52").fadeToggle(2000);
  }); // fadeTo هو انو بتشتاغال على الاباستى بى نسبة معينة
  // fadeTo(speed, opacity, callbackFunction(){})

  $("#jqbtnvideo53").click(function () {
    $("#jqpvideo53").fadeTo(2000, 0.3);
  });
});
/******************************************* */
// video6
// effect slideDown | slideUp | slideToggle

$(document).ready(function () {
  "use strict";

  $("#jqbtnvideo6").click(function () {
    $("#jqpvideo6").slideUp();
  }); //

  $("#jqbtnvideo61").click(function () {
    $("#jqpvideo61").slideDown();
  });
  $("#jqbtnvideo62").click(function () {
    $("#jqpvideo62").slideToggle();
  });
});
/************************************************ */
// video7 animate
// animate({css}, speed, callbackFunction)

$(document).ready(function () {
  "use strict";

  $("#jqpvideo7").animate({
    //width: "60%",
    //width: "+=50px",
    //width: "hide", toggle
    width: "60%",
    left: "100px",
    height: "100px",
    borderRadius: "30px",
    textAlign: "center",
    lineHeight: "100px"
  }, 200);
  $("#jqpvideo7").animate({
    width: "50%",
    left: "0px",
    height: "150px",
    borderRadius: "10px"
  }, 200);
});
$(document).ready(function () {
  "use strict";

  $("#jqpvideo71").animate({
    width: "60%",
    left: "20%",
    margin: "20px",
    height: "100px",
    borderRadius: "30px",
    textAlign: "center",
    lineHeight: "100px"
  }, 200);
});
/************************ */
// video 8
// stop animate بيواقف الانميشان
// stop(true) بيواقف جميع الانميشان
// stop(true, true) الترو التانية بتوديك لااخر الانميشان الالول

$(document).ready(function () {
  $("#buttonstop").click(function () {
    $("#divstop").stop();
  });
});
/********************************************* */
// video 9
// chain هو سلسلة مجموعة افاكت على العنصار المختار

$(document).ready(function () {
  "use strict";

  var divvideo9 = $("#jqdivvideo9");
  divvideo9.css({
    backgroundColor: "#f00"
  }).slideUp().slideDown(200).fadeIn(200).hide(200).show(200).animate({
    width: "800px",
    height: "200px"
  });
});
/************************************ */
// video 10
// text اللى هو التاكاست اللى فى العنصار المختار
// html بيخارج المحتو كا تاج اتش تى ال ام
// val و داه خاصة بى حقول الادخال
// attr وهو صفات العنصار

$(document).ready(function () {
  "use strict";

  var div = $("#jqdivvideo10").text();
  $("#jqpvideo10").text(div);
  var div1 = $("#jqdivvideo101").html();
  $("#jqpvideo101").text(div1);
});
$(document).ready(function () {
  "use strict";

  $("#jqbtn101").click(function () {
    $("#jqpvideo102").text($("#jqinpout101").val());
  }); // الطرية دى بطالع قيمة الاراتربيوت بتاع العنصر فى مكان تانى

  $("#jqbtn102").click(function () {
    $("#jqinpout102").val($("#jqlink102").attr("class"));
  });
  $("#jqbtn103").click(function () {
    //$("#jqlink103").attr("class", "btn btn-info");
    // لو عاوز تغاير اكتار من صفة
    $("#jqlink103").attr({
      "class": "btn btn-info",
      href: "https://www.youtube.com/"
    });
  });
});
/************************ */
// video11
// append appendTo || prepend
// append  بتضيف العنصر فى اخر العنصار المختار
//prepend بتيجى فى اوال العنصار
//before بتضيف العنصار قبل العنصار النختار برة منو
//after بيحاط العنصار بعد العنصار المختار بس بره منو
//

$(document).ready(function () {
  "use strict"; //before
  //prepend

  $(".jqdivvideo11").after("<p>hello </p>");
  $("<p>hello </p>").appendTo(".jqdivvideo11"); //append
  //after
});
/*************************** */
// video 12
//remove | empty
// remove بيشيل العنصار من الصفحة نهاياً
// empty بيفاضى محتو العنصار

$(document).ready(function () {
  "use strict";

  $("#jqbtn12").click(function () {
    // طريقة انو انت تشيل عنصار معين من خلال القلاس
    //$("#jqdiv12").remove(".className");
    //$("#jqdiv12").remove();
    //$("#jqdiv12").empty();
    // ده نوع من انواع الفلتار انو انت تشيل الداف اللى محتو على لكمة معينة جوة العنصار اللى انت مختارو
    $("#jqdiv12").remove(":contains('hossam')");
  });
});
/*********************************** */
// video13
// css class
//addClass تضيف كلاس او اكتار من كلاس على العنصر موجود فى السي اس ساس و باطريقى داى مبتشلش الكلاس الاصلى الموجودانت بتضيف على اللى موجود
//تقدار تختار اكتار من عنصر تطبق علية الحددس بتفصل بينهم بى كومة
// $("#classone, #classTow").click(function () {});
// removeClass("className"); بتشيل كلاس من على العنصار
// نوع من انواع الفلتار انو انت تختار اول عنصر
// $("#jqp13:first").addClass("jqvideo13 jqvideo131");
//نوع من الفلتار تختار عنصر فية كلمة معينة
//$("#jqp13:contains('rashad')").addClass("jqvideo13 jqvideo131");
//نوع من الفلتار انو انت تختار العنصار من رقمو فى العنصار اللى هو ترتيبو
//$("#jqp13:eq(0)").addClass("jqvideo13 jqvideo131");
//اللى هو ات تضيف الكلاس و تخفية لو  متضاف على العنصار
//toggleClass

$(document).ready(function () {
  "use strict";

  $("#jqbtn13").click(function () {
    $("#jqp13").toggleClass("jqvideo13 jqvideo131");
  });
});
/************************ */
// video14
// طريقة انو انت تجيب خواص السى اس اس

$(document).ready(function () {
  "use strict";

  $("#jqbtn14").click(function () {
    var color14 = $(".jqp14").css("padding");
    $("#jqinput14").val(color14);
  });
});
/*
$(document).ready(function () {
  "use strict";
  $("#jqbtn142").click(function () {
    var back = $("#jqinput142").val();
    $("#jqp142").css("color", back);
  });
});
*/