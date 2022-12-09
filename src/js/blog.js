const copyBtn = document.querySelector('.copy-btn');
const copyBtnTooltip = document.querySelector('.copy-btn__tooltip');

const copyBlogLink = () => {
  navigator.clipboard.writeText(window.location.href);
  copyBtnTooltip.classList.add('active');
  setTimeout(() => {
    copyBtnTooltip.classList.remove('active');
  }, 1000);
}

copyBtn.addEventListener('click', copyBlogLink);


$('.table-of-content-list li a[href^="#"]').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 800);
});