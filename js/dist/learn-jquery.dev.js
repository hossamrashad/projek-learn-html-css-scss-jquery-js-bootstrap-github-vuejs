"use strict";

/**
 *
 * $                  = JQuery
 * window.onload      =     javascript
 * document.ready     =     jquery
 *
 * Events              || 1- click 2- dblclick 3- mouseenter 4- mouseleave 5- hover
 *
 * Effect              || hide, show, toggle, fadeIn, fadeOut , fadeToggle , fadeTo, animate, stop
 *
 *
 *
 * get | set           || text(), html(), val(), attr()
 * set $(".input").val("hossam");
 * get $(".input").val($(".Element").attr("class"));
 *
 * Add Element        || append , prepend , before , after, appendTo, prependTo
 * $(".Element").append(" append ");
 *
 *
 * Remove Element     || remove(), empty()
 * $(".Element").remove("ElementName");
 * $(".Element").empty("ElementName");
 *
 *
 *
 * css class           || addClass("ElementName"), removeClass("ElementName"), toggleClass("ElementName")
 *
 * get & set css attr  ||
 * $(".Element").css("color");
 * $(".Element").css("color", "red");
 *
 *
 * Dimensions = width & height
 * $(".Element").width("100%");
 * $(".Element").innerWidth("100%");
 * $(".Element").outerWidth("100%");
 *
 *
 *
 * traversing parent & parents & parentsUntil
 * $(".Element").parent()
 * $(".Element").parents(".Element-parent")
 * $(".Element").parentsUntil(".Element-parent")
 *
 *
 * traversing children & find
 * $(".Element-parent").children()
 * $(".Element-parent").find("Element")
 * $(".Element-parent").find($("div:contains('find')"))
 *
 *
 *
 * traversing siblings & next & nextAll & nextUntil & prev & prevAll & prevUntil
 * $(".Element").siblings()
 * $(".Element").next()
 * $(".Element").nextAll()
 * $(".Element").nextUntil()
 * $(".Element").prev()
 * $(".Element").prevAll()
 * $(".Element").prevUntil()
 *
 *
 *
 * traversing first & last & aq & Filter & not
 * $(".Element").first()
 * $(".Element").last()
 * $(".Element").eq()
 * $(".Element").filter()
 * $(".Element").filter(".className")
 * $(".Element").filter($(".className"))
 * $(".Element").filter(":contains('word")
 * $(".Element").filter(function (funcName){return funcName === 9;})
 * $(".Element").not()
 * $(".Element").not(".className")
 * $(".Element").not($(".className"))
 * $(".Element").not(":contains('word")
 * $(".Element").not(function (funcName){return funcName === 9;})
 * 
 *
 *
 */
// code for function
$(document).ready(function () {// My Code Here
}); // short code for function

$(function () {// My Code Here
}); // video 3

$(document).ready(function () {
  // My Code Here
  $(".video-3-btn-1").click(function (e) {
    e.preventDefault();
    $(".video-3-p-1").hide();
  }); //

  $(".video-3-btn-2").click(function (e) {
    e.preventDefault();
    $(".video-3-p-2").css("color", "#f00");
    $(this).css("backgroundColor", "#f00");
  }); //

  $(".video-3-btn-3").dblclick(function (e) {
    e.preventDefault();
    $(".video-3-p-3").css("color", "#f00");
  }); //

  $(".video-3-btn-4").mouseenter(function (e) {
    e.preventDefault();
    $(".video-3-p-4").css("color", "#f00");
  }); //

  $(".video-3-btn-5").mouseleave(function (e) {
    e.preventDefault();
    $(".video-3-p-5").css("color", "#f00");
  }); // event hover

  $(".video-3-btn-6").hover(function (e) {
    e.preventDefault();
    $(".video-3-p-6").css("color", "#f00");
  }, function (e) {
    e.preventDefault();
    $(".video-3-p-6").css("color", "#ff0");
  }); // video 4 effects hide show toggle
  // hide

  $(".video-4-btn-1").on("click", function (e) {
    e.preventDefault(); // $(".video-4-p-1").hide();
    // $(".video-4-p-1").hide(5000);
    // $(".video-4-p-1").hide("slow");

    $(".video-4-p-1").hide("fast", function () {
      $(".video-4-p-1").show(5000);
    });
  }); // show

  $(".video-4-btn-2").on("click", function (e) {
    e.preventDefault();
    $(".video-4-p-2").show();
  }); // show

  $(".video-4-btn-3").on("click", function (e) {
    e.preventDefault();
    $(".video-4-p-3").toggle();
  }); // video 5
  // document.getElementById("video-5-p-1").style.opacity = 0.5;

  document.getElementById("video-5-p-1").style.backgroundColor = "#3498db";
  document.getElementById("video-5-p-1").style.color = "#fff";
  document.getElementById("video-5-p-1").style.border = "2px solid #333";
  document.getElementById("video-5-p-1").style.display = "none"; // fadeIn

  $(".video-5-btn-1").on("click", function (e) {
    e.preventDefault();
    $(".video-5-p-1").fadeIn(3000);
  }); // fadeOut

  $(".video-5-btn-2").on("click", function (e) {
    e.preventDefault();
    $(".video-5-p-2").fadeOut(3000);
  }); // fadeToggle

  $(".video-5-btn-3").on("click", function (e) {
    e.preventDefault();
    $(".video-5-p-3").fadeToggle(3000);
  }); // fadeTo

  $(".video-5-btn-4").on("click", function (e) {
    e.preventDefault();
    $(".video-5-p-4").fadeTo(3000, 0.1);
  }); // video 6

  document.getElementById("video-6-p-1").style.backgroundColor = "#3498db";
  document.getElementById("video-6-p-1").style.color = "#fff";
  document.getElementById("video-6-p-1").style.border = "2px solid #333";
  document.getElementById("video-6-p-1").style.display = "none"; // slideDown

  $(".video-6-btn-1").on("click", function (e) {
    e.preventDefault();
    $(".video-6-p-1").slideDown(3000);
  }); // slideUp

  $(".video-6-btn-2").on("click", function (e) {
    e.preventDefault();
    $(".video-6-p-2").slideUp(3000);
  }); // slideToggle

  $(".video-6-btn-3").on("click", function (e) {
    e.preventDefault();
    $(".video-6-p-3").slideToggle(3000);
  }); // video 7

  document.getElementById("video-7-p-1").style.backgroundColor = "#3498db";
  document.getElementById("video-7-p-1").style.border = "2px solid #333";
  document.getElementById("video-7-p-1").style.padding = "20px";
  document.getElementById("video-7-p-1").style.color = "#fff"; // slideToggle

  $(".video-7-btn-1").on("click", function (e) {
    e.preventDefault();
    $(".video-7-p-1").animate({
      height: "300px",
      width: "80%"
    }, 2000);
    $(".video-7-p-1").animate({
      height: "165px",
      width: "100%"
    }, 2000);
  }); // video 10 get & set

  var video100 = $(".video-10-p-1").text();
  var video101 = $(".video-10-p-1").html();
  var video102 = $(".video-10-p-2");
  var video103 = $(".video-10-p-3");
  video102.text(video100);
  video103.text(video101); // val

  $(".video-10-btn-1").on("click", function () {
    $(".video-10-input-1").val("hossam");
  }); // Get attr

  $(".video-10-btn-2").on("click", function () {
    $(".video-10-input-2").val($(".video-10-a-1").attr("class"));
  }); // set attr

  $(".video-10-btn-3").on("click", function () {
    // طريقة تغير شياء واحد من صفات الارلتربيوت
    // $(".video-10-a-2").attr("class", "btn btn-danger width-100");
    $(".video-10-a-2").attr({
      "class": "btn btn-warning width-100",
      href: "http://www.youtube.com"
    }).text("Now Go To Youtube");
  }); // video 11 add element to element

  $(".video-11-div-1").append(" append ");
  $(".video-11-div-1").prepend(" prepend ");
  $(".video-11-div-1").before(" before ");
  $(".video-11-div-1").after(" after ");
  $("<p>AppendTo</p>").appendTo(".video-11-div-1");
  $("<p>prependTo</p>").prependTo(".video-11-div-1"); // طريقة اضافة العنصار بى المتغيرات و الكلاسات

  $("<p></p>", {
    text: "prependTo + class",
    "class": "hossam"
  }).prependTo(".video-11-div-1"); // video 12 remove & Empty

  $(".video-12-btn-1").on("click", function () {
    // $(".video-12-div-1").remove();
    // طريقة انو انا افلترا العنصار اللى انا عاوز يشيبو
    $("div").remove(".video-12-div-1");
  });
  $(".video-12-btn-2").on("click", function () {
    $(".video-12-div-2").empty();
  }); // طريقة مسح عنصر يحتوى على كلمة معينة

  $(".video-12-btn-3").on("click", function () {
    $(".h2").remove(" :contains('Empty')");
  }); // video 13 css class
  // addClass

  $(".video-13-btn-1").on("click", function () {
    // $(".video-13-div-1 .h2").addClass("lead");
    // ممكن تحط اكتار من كلاس
    // $(".video-13-div-1 .h2").addClass("lead style-test");
    // ممكن تختار اكتار من عنصر تنفز علية اد كلاس
    $(".video-13-div-1 .h2, .video-13-div-1 .h3").addClass("lead style-test");
  }); // removeClass

  $(".video-13-btn-2").on("click", function () {
    $(".video-13-div-2 .h2").removeClass(" style-test");
  }); // some filter

  $(".video-13-btn-3").on("click", function () {
    $(".video-13-div-3 .h3:first").addClass("style-test");
    $(".video-13-div-3 .h3:last").addClass("style-test");
    $(".video-13-div-3 .h3:contains('word')").addClass("style-test");
    $(".video-13-div-3 .h3:eq(5)").addClass("style-test");
  });
  $(".video-13-div-4 > h3").on("click", function () {
    $(this).toggleClass("style-test");
  }); // video 14 get & set
  // get css attr

  $(".video-14-btn-1").on("click", function () {
    var getColorVideo14div1 = $(".video-14-div-1").css("color");
    $(".video-14-input-1").val(getColorVideo14div1);
  }); // set css attr

  $(".video-14-btn-2").on("click", function () {
    var setColorVideo14input1 = $(".video-14-input-2").val();
    $(".video-14-div-2").css("background", setColorVideo14input1);
  }); // video 15 Dimensions width & height

  var documentWidth = $(document).innerWidth();
  $(".video-15-div-1").text("window width = " + documentWidth);
  $(".video-15-div-2").css({
    backgroundColor: "#BB2D3B",
    color: "#fff",
    width: "300px",
    padding: "0",
    margin: "0"
  });
  $(".video-15-div-4").css({
    backgroundColor: "#BB2D3B",
    color: "#fff",
    width: "300px",
    padding: "10px"
  });
  $(".video-15-div-6").css({
    backgroundColor: "#BB2D3B",
    color: "#fff",
    width: "300px",
    padding: "10px",
    border: "10px solid #333"
  });
  $(".video-15-div-2").on("click", function () {
    // width not work with padding margin border
    // width work with document
    // $(this).width(100);
    // $(this).width("+=100");
    $(this).width("+=" + 100);
  });
  $(".video-15-div-3").text($(".video-15-div-2").width());
  $(".video-15-div-4").click(function () {
    // innerWidth work with padding
    $(this).innerWidth($(this).css("padding", "20px"));
  });
  $(".video-15-div-5").text($(".video-15-div-4").innerWidth());
  $(".video-15-div-6").click(function () {
    // innerWidth work with padding
    $(this).innerWidth($(this).css({
      padding: "10px",
      border: "10px solid #333"
    }));
  }); // outerWidth(true) =
  // $(".video-15-div-7").text($(".video-15-div-6").outerWidth(true));

  $(".video-15-div-7").text($(".video-15-div-6").outerWidth()); // video 16 traversing parent & parents & parentsUntil

  $(".video-16-parent-one, .video-16-parent-tow, .video-16-parent-three, .video-16-parent-four, .video-16-child, .video-16-child-tow, .video-16-child-three").css({
    border: "2px solid #666",
    padding: "10px"
  });
  $(".video-16-child").parent().css({
    border: "4px solid #f00"
  }); // parents بتحدد الاب اللى هيوصلو

  $(".video-16-child-tow").parents(".video-16-parent-one").css({
    border: "4px solid #f00"
  }); // parentsUntil بيطبق الخواص لكل اللى يقابلو لعد ميوصل لاب معين و يقف

  $(".video-16-child-three").parentsUntil(".video-16-parent-one").css({
    border: "4px solid #f00"
  }); //

  $(".video-17-parent-one").find("*").css({
    border: "2px solid #666",
    padding: "10px"
  });
  $(".video-17-parent-tow").children().css({
    border: "4px solid #f00"
  }); // find بيوصال لاخر العناصر الاب

  $(".video-17-parent-tow-find") // .find(".video-17-child-tow")
  // نوع من الافلاتار عنصر يحتوى على كلمة معينة
  .find($("div:contains('find')")).css({
    border: "4px solid #f00"
  }); // video 18 traversing siblings & next & prev

  $(".video-18-section, .video-18-section-tow, .video-18-section-three, .video-18-section-four, .video-18-section-five, .video-18-section-sex, .video-18-section-seven").find("*").css({
    padding: "10px",
    margin: "10px 0",
    backgroundColor: "#666",
    color: "#fafafa"
  });
  $(".video-18-section .video-18-parent-three") // .siblings(".video-18-parent-tow")
  .siblings().css({
    border: "3px solid #f00"
  }); // next

  $(".video-18-section-tow .video-18-parent-three") // .next("className")
  .next().css({
    border: "3px solid #f00"
  }); // prev

  $(".video-18-section-three .video-18-parent-three") // .prev("className")
  .prev().css({
    border: "3px solid #f00"
  }); // nextAll

  $(".video-18-section-four .video-18-parent-three") // .nextAll("className")
  .nextAll().css({
    border: "3px solid #f00"
  }); // prevAll

  $(".video-18-section-five .video-18-parent-three") // .prevAll("className")
  .prevAll().css({
    border: "3px solid #f00"
  }); // nextUntil

  $(".video-18-section-sex .video-18-parent-three") // .nextUntil("className")
  .nextUntil().css({
    border: "3px solid #f00"
  }); // prevUntil

  $(".video-18-section-seven .video-18-parent-three") // .prevUntil("className")
  .prevUntil().css({
    border: "3px solid #f00"
  }); // video 19 traversing first & last & aq & Filter & not

  $(".video-19-section-one, .video-19-section-tow").find("*").css({
    backgroundColor: "#333",
    color: "#fafafa",
    padding: "10px",
    margin: "10px 0"
  });
  $(".video-19-section-one div").first().css({
    border: "5px solid #f00"
  });
  $(".video-19-section-one div").last().css({
    border: "5px solid #f00"
  });
  $(".video-19-section-one div").eq(3).css({
    border: "5px solid #f00"
  }); // الفلتار بيقبال انو انت تكتب فيه اسم كلاس او ابجاكت او تبحث على كلمة او تكتاب فانكشان كاملة جوة الفلتار

  $(".video-19-section-one div").filter(".video-19-parent-sex").css({
    border: "5px solid #f00"
  });
  $(".video-19-section-one div").filter($(".video-19-parent-eight")).css({
    border: "5px solid #f00"
  });
  $(".video-19-section-one div").filter(function (video19func1) {
    return video19func1 === 9;
  }).css({
    border: "5px solid #f00"
  }); // not

  $(".video-19-section-tow div").not(".video-19-parent-sex").css({
    border: "5px solid #f00"
  });
  $(".video-19-section-tow div").not(":contains('four").css({
    border: "5px solid #00f"
  }); // end document
}); // test chrome
// function to add button reload page it is for test

$(function () {
  "use strict";

  $("body").append("<button class='reload-page'>Reload Page</button>");
  $(".reload-page").css({
    width: "fit-content",
    fontSize: "13px",
    color: "#fff",
    backgroundColor: "#bb2d3b",
    border: "10px solid #333",
    borderRadius: "10px",
    padding: "5px 5px",
    position: "fixed",
    bottom: "0px",
    right: "5px"
  });
  $(".reload-page").on("click", function () {
    window.location.reload();
  });
}); // function to open window xxl

$(function () {
  "use strict";

  $("body").append("<button class='window-xxl'>xxl 1400</button>");
  $(".window-xxl").css({
    width: "fit-content",
    fontSize: "13px",
    color: "#fff",
    backgroundColor: "#bb2d3b",
    border: "10px solid #333",
    borderRadius: "10px",
    padding: "5px 5px",
    position: "fixed",
    bottom: "50px",
    right: "5px"
  });
  $(".window-xxl").on("click", function () {
    var windowHref = window.location.href;
    window.open(windowHref, "_blank", "width=1400,height=1080,menubar=no,status=no", "true");
  });
}); // function to open window Lg

$(function () {
  "use strict";

  $("body").append("<button class='window-lg'>Lg 1200 </button>");
  $(".window-lg").css({
    width: "fit-content",
    fontSize: "13px",
    color: "#fff",
    backgroundColor: "#bb2d3b",
    border: "10px solid #333",
    borderRadius: "10px",
    padding: "5px 5px",
    position: "fixed",
    bottom: "100px",
    right: "5px"
  });
  $(".window-lg").on("click", function () {
    var windowHref = window.location.href;
    window.open(windowHref, "_blank", "width=1200,height=1080,menubar=no,status=no", "true");
  });
}); // function to open window md

$(function () {
  "use strict";

  $("body").append("<button class='window-md'>md 992</button>");
  $(".window-md").css({
    width: "fit-content",
    fontSize: "13px",
    color: "#fff",
    backgroundColor: "#bb2d3b",
    border: "10px solid #333",
    borderRadius: "10px",
    padding: "5px 5px",
    position: "fixed",
    bottom: "150px",
    right: "5px"
  });
  $(".window-md").on("click", function () {
    var windowHref = window.location.href;
    window.open(windowHref, "_blank", "width=992,height=1080,menubar=no,status=no", "true");
  });
}); // function to open window sm

$(function () {
  "use strict";

  $("body").append("<button class='window-sm'>sm 768</button>");
  $(".window-sm").css({
    width: "fit-content",
    fontSize: "13px",
    color: "#fff",
    backgroundColor: "#bb2d3b",
    border: "10px solid #333",
    borderRadius: "10px",
    padding: "5px 5px",
    position: "fixed",
    bottom: "200px",
    right: "5px"
  });
  $(".window-sm").on("click", function () {
    var windowHref = window.location.href;
    window.open(windowHref, "_blank", "width=768,height=1080,menubar=no,status=no", "true");
  });
}); // function to font Ar

$(function () {
  "use strict";

  var fontAr = document.createElement("link");
  fontAr.href = "https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700&family=Changa:wght@200;300;400;500;600;700;800&family=El+Messiri:wght@400;500;600;700&family=Lateef&family=Markazi+Text:wght@400;500;600;700&family=Mirza:wght@400;500;600;700&family=Scheherazade:wght@400;700&family=Short+Stack&family=Tajawal:wght@200;300;400;500;700;800;900&display=swap";
  document.getElementsByTagName("head")[0].appendChild(fontAr);
  $("body").append("<input list='fontAr' class='fontAr' placeholder='set font Ar'>");
  $("body").append("<datalist id='fontAr'></datalist>");
  $("datalist#fontAr").append("<option value='Cairo, sans-serif'></option>");
  $("datalist#fontAr").append("<option value='DroidKufi-regular'></option>");
  $("datalist#fontAr").append("<option value='Droid Arabic Kufi'></option>");
  $("datalist#fontAr").append("<option value='Short Stack, cursive'></option>");
  $("datalist#fontAr").append("<option value='Tajawal, sans-serif'></option>");
  $("datalist#fontAr").append("<option value='Markazi Text, serif'></option>");
  $("datalist#fontAr").append("<option value='El Messiri, sans-serif'></option>");
  $("datalist#fontAr").append("<option value='Changa, sans-serif'></option>");
  $("datalist#fontAr").append("<option value='Mirza, cursive'></option>");
  $("datalist#fontAr").append("<option value='Lateef, cursive'></option>");
  $("datalist#fontAr").append("<option value='Scheherazade, serif'></option>");
  $(".fontAr").css({
    width: "fit-content",
    fontSize: "13px",
    border: "10px solid #333",
    borderRadius: "10px",
    padding: "5px 5px",
    position: "fixed",
    bottom: "50px",
    left: "5px"
  });
  $("body").append("<button class='fontArBtn'>Test Font</button>");
  $(".fontArBtn").css({
    width: "fit-content",
    backgroundColor: "#bb2d3b",
    fontSize: "13px",
    color: "#fff",
    border: "10px solid #333",
    borderRadius: "10px",
    padding: "5px 5px",
    position: "fixed",
    bottom: "0px",
    left: "50px"
  });
  $(".fontArBtn").on("click", function () {
    var setColorVideo14input1 = $(".fontAr").val();
    $("body").css("fontFamily", setColorVideo14input1);
  });
});