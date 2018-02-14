$(function() {
  $("#deals").lightSlider({
    item: 4,
    loop: false,
    slideMove: 1,
    speed: 600,
    enableDrag: false,
    prevHtml: '<i class="fas fa-caret-left"></i>',
    nextHtml: '<i class="fas fa-caret-right"></i>',
  });
});