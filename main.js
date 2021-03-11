// $(".header-right a").click(function() {
//   $(".hamburger-menu").css({
//     "display":"block"
//   });
// });
//
// $(".hamburger-menu a").click(function() {
//   $(".hamburger-menu").css({
//     "display":"none"
//   });
// });
var menuOn = $(".header-right a");
var menuOff = $(".close");
var menu = $(".hamburger-menu");
var button ;

function OnOff() {
  if (menu.hasClass("active")) {
    button = $(".close");
    menu.removeClass("active")
  } else {
    button = $(".header-right a");
    menu.addClass("active");
  }
};




menuOn.click(function() {
  menu.addClass("active");
});

menuOff.click(function() {
  menu.removeClass("active");
});
