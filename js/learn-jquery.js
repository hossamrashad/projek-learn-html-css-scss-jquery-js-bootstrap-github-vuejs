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
 * get | set           || text(), html(), val(), attr()
 *
 *
 *
 *
 *
 */
// code for function
$(document).ready(function () {
  // My Code Here
});
// short code for function
$(function () {
  // My Code Here
});
// video 3
$(document).ready(function () {
  // My Code Here
  $(".video-3-btn-1").click(function (e) {
    e.preventDefault();
    $(".video-3-p-1").hide();
  });
  //
  $(".video-3-btn-2").click(function (e) {
    e.preventDefault();
    $(".video-3-p-2").css("color", "#f00");
    $(this).css("backgroundColor", "#f00");
  });
  //
  $(".video-3-btn-3").dblclick(function (e) {
    e.preventDefault();
    $(".video-3-p-3").css("color", "#f00");
  });
  //
  $(".video-3-btn-4").mouseenter(function (e) {
    e.preventDefault();
    $(".video-3-p-4").css("color", "#f00");
  });
  //
  $(".video-3-btn-5").mouseleave(function (e) {
    e.preventDefault();
    $(".video-3-p-5").css("color", "#f00");
  });
  // event hover
  $(".video-3-btn-6").hover(
    function (e) {
      e.preventDefault();
      $(".video-3-p-6").css("color", "#f00");
    },
    function (e) {
      e.preventDefault();
      $(".video-3-p-6").css("color", "#ff0");
    }
  );
  // video 4 effects hide show toggle
  // hide
  $(".video-4-btn-1").on("click", function (e) {
    e.preventDefault();
    // $(".video-4-p-1").hide();
    // $(".video-4-p-1").hide(5000);
    // $(".video-4-p-1").hide("slow");
    $(".video-4-p-1").hide("fast", function () {
      $(".video-4-p-1").show(5000);
    });
  });
  // show
  $(".video-4-btn-2").on("click", function (e) {
    e.preventDefault();
    $(".video-4-p-2").show();
  });
  // show
  $(".video-4-btn-3").on("click", function (e) {
    e.preventDefault();
    $(".video-4-p-3").toggle();
  });
  // video 5
  // document.getElementById("video-5-p-1").style.opacity = 0.5;
  document.getElementById("video-5-p-1").style.backgroundColor = "#3498db";
  document.getElementById("video-5-p-1").style.color = "#fff";
  document.getElementById("video-5-p-1").style.border = "2px solid #333";
  document.getElementById("video-5-p-1").style.display = "none";
  // fadeIn
  $(".video-5-btn-1").on("click", function (e) {
    e.preventDefault();
    $(".video-5-p-1").fadeIn(3000);
  });
  // fadeOut
  $(".video-5-btn-2").on("click", function (e) {
    e.preventDefault();
    $(".video-5-p-2").fadeOut(3000);
  });
  // fadeToggle
  $(".video-5-btn-3").on("click", function (e) {
    e.preventDefault();
    $(".video-5-p-3").fadeToggle(3000);
  });
  // fadeTo
  $(".video-5-btn-4").on("click", function (e) {
    e.preventDefault();
    $(".video-5-p-4").fadeTo(3000, 0.1);
  });
  // video 6
  document.getElementById("video-6-p-1").style.backgroundColor = "#3498db";
  document.getElementById("video-6-p-1").style.color = "#fff";
  document.getElementById("video-6-p-1").style.border = "2px solid #333";
  document.getElementById("video-6-p-1").style.display = "none";
  // slideDown
  $(".video-6-btn-1").on("click", function (e) {
    e.preventDefault();
    $(".video-6-p-1").slideDown(3000);
  });
  // slideUp
  $(".video-6-btn-2").on("click", function (e) {
    e.preventDefault();
    $(".video-6-p-2").slideUp(3000);
  });
  // slideToggle
  $(".video-6-btn-3").on("click", function (e) {
    e.preventDefault();
    $(".video-6-p-3").slideToggle(3000);
  });
  // video 7
  document.getElementById("video-7-p-1").style.backgroundColor = "#3498db";
  document.getElementById("video-7-p-1").style.border = "2px solid #333";
  document.getElementById("video-7-p-1").style.padding = "20px";
  document.getElementById("video-7-p-1").style.color = "#fff";

  // slideToggle
  $(".video-7-btn-1").on("click", function (e) {
    e.preventDefault();
    $(".video-7-p-1").animate(
      {
        height: "300px",
        width: "80%",
      },
      2000
    );
    $(".video-7-p-1").animate(
      {
        height: "165px",
        width: "100%",
      },
      2000
    );
  });
  // video 10 get & set
  var video100 = $(".video-10-p-1").text();
  var video101 = $(".video-10-p-1").html();
  var video102 = $(".video-10-p-2");
  var video103 = $(".video-10-p-3");
  video102.text(video100);
  video103.text(video101);
  // val
  $(".video-10-btn-1").on("click", function () {
    $(".video-10-input-1").val("hossam");
  });
  // Get attr
  $(".video-10-btn-2").on("click", function () {
    $(".video-10-input-2").val($(".video-10-a-1").attr("class"));
  });
  // set attr
  $(".video-10-btn-3").on("click", function () {
    // طريقة تغير شياء واحد من صفات الارلتربيوت 
    // $(".video-10-a-2").attr("class", "btn btn-danger width-100");
    $(".video-10-a-2").attr({
      "class": "btn btn-warning width-100",
      "href": "http://www.youtube.com"
    }).text("Now Go To Youtube");
  });
});
