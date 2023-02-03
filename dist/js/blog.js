"use strict";

var copyBtn = document.querySelector('.copy-btn');
var copyBtnTooltip = document.querySelector('.copy-btn__tooltip');
var copyBlogLink = function copyBlogLink() {
  navigator.clipboard.writeText(window.location.href);
  copyBtnTooltip.classList.add('active');
  setTimeout(function () {
    copyBtnTooltip.classList.remove('active');
  }, 1000);
};
copyBtn.addEventListener('click', copyBlogLink);
$('.table-of-content-list li a[href^="#"]').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 800);
});
var showCustomerMenu = function showCustomerMenu() {
  var menu = document.querySelector('.blog-posts');
  var wrapper = document.querySelector('.blog-single');
  var bottomValue = 800;
  if (menu) {
    var isFullyVisible = function isFullyVisible(el) {
      var elementBoundary = el.getBoundingClientRect();
      var bottom = elementBoundary.bottom;
      return bottom >= bottomValue;
    };
    var scrolling = function scrolling() {
      if (isFullyVisible(wrapper)) {
        menu.classList.add('active');
      } else {
        menu.classList.remove('active');
      }
    };
    window.addEventListener("scroll", scrolling, false);
    scrolling();
  }
};
if (window.innerWidth > 1199) {
  showCustomerMenu();
  document.querySelector('.blog-posts').classList.add('active');
}