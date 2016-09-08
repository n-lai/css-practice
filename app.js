$(document).ready(function() {
  $(".article-list-item").click(function() {
    $(this).addClass("selected");
    $(this).siblings().removeClass("selected");
  });
});
