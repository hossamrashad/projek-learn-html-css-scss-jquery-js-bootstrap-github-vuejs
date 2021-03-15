/* global document, console, alert, prompt, $*/
/**
 * $ بتعابر على الجي كويرى
 * $ = JQuery
 *
 * compressed  هش هتعادالى على الجى كويرى
 * uncompressed  ijuh]hg ugdih
 */
/* تقدار تستخدام الفنكشان كدا بس الفرق انو دى مش بتستنى الصفحة تحامل
$(function () {
  "use strict";
  $("#jqvidero2 p").hide();
});
*/
$(document).ready(function () {
  "use strict";
  $("#jqvidero2 .jqpvideo2").hide();
});
// طريقة انو انت تكتاب خواص السي اس اس
$(document).ready(function () {
  "use strict";
  $("#jqvidero2 .jqvideo21").css("color", "#F00");
});
/****************************** */
// video3
// event click|| dblclick || mouseenter || moudeLeave || hover
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
  $("#jqbtnvideo31").dnlclick(function () {
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
  "use strict";
  $("#jqbtnvideo34").hover(function () {
    $(this).hide;
  });
});
