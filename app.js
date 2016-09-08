$(document).ready(function() {
  $(".article-list-item").click(function() {
    $(this).addClass("selected-article");
    $(this).siblings().removeClass("selected-article");
  });

  $(".sidebar-list-item").click(function() {
    $(this).addClass("selected-sidebar");
    $(this).siblings().removeClass("selected-sidebar");
  });
});
