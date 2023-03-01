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


// $('.table-of-content-list li a[href^="#"]').on('click', function (e) {
//   e.preventDefault();
//   $('html, body').animate({
//     scrollTop: $($(this).attr('href')).offset().top
//   }, 800);
// });

const showCustomerMenu = () => {
  const menu = document.querySelector('.blog-posts');
  const wrapper = document.querySelector('.blog-single');
  let bottomValue = 800;
  if (menu) {
    window.addEventListener("scroll", scrolling, false);

    function isFullyVisible(el) {
      let elementBoundary = el.getBoundingClientRect();
      let bottom = elementBoundary.bottom;
      return bottom >= bottomValue;
    }

    function scrolling() {
      if (isFullyVisible(wrapper)) {
        menu.classList.add('active');
      } else {
        menu.classList.remove('active');
      }
    }

    scrolling();
  }
};

if (window.innerWidth > 1199) {
  showCustomerMenu()
  document.querySelector('.blog-posts').classList.add('active')
}