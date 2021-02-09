$(document).ready(function () {
  let parentDiv = ".input_filed_wrap";

  check_is_input_filled();
  $(`${parentDiv} input`).focus(function () {
    $(this).parents(parentDiv).addClass("focused");
  });
  $(`${parentDiv} input`).blur(function () {
    let thisVal = $.trim($(this).val());
    let parent = $(this).parents(parentDiv);
    parent.removeClass("focused inputFilled");
    thisVal !== "" ? parent.addClass("inputFilled") : null;
  });

  function check_is_input_filled() {
    $(`${parentDiv} input`).each(function () {
      let thisVal = $.trim($(this).val());
      thisVal !== ""
        ? $(this).parents(parentDiv).addClass("inputFilled")
        : null;
    });
  }
});
