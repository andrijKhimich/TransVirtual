window.addEventListener('DOMContentLoaded', function () {
  if (window.screen.width < 1200) {
    headerActive()
  }
  if (window.screen.width >= 1200) {
    scrollPage()
  }
  if (window.screen.width < 1200) {
    showSubmenu(document.querySelectorAll('.submenu-item-trigger'))
  }
})

const headerActive = () => {
  const header = document.querySelector('.header');
  const body = document.querySelector('body');
  if (!!header) {
    const burger = header.querySelector('.header__content_burger');
    burger.onclick = () => {
      header.classList.contains('active') ? removeClass() : addClass();

      function addClass() {
        header.classList.add('active');
        body.style.overflow = 'hidden';
      }

      function removeClass() {
        header.classList.remove('active');
        body.style.overflow = '';
      }
    }
  }
}

const scrollPage = () => {
  let scrollPosition;
  const header = document.querySelector('.header');
  const scrollChange = 1;

  const addClass = () => header.classList.add("hide")
  const removeClass = () => header.classList.remove("hide")

  window.addEventListener('scroll', function () {
    scrollPosition = window.scrollY;
    scrollPosition >= scrollChange ? addClass() : removeClass();
  })
}

const showSubmenu = (itemsLinks) => {

  function setHeight(itemsLinks) {
    if (itemsLinks.length > 0) {
      itemsLinks.forEach(item => {
        item.onclick = () => {
          let itemsMenu = item.querySelectorAll('.dropdown-menu>li');
          let submenuHeight = getHeight(itemsMenu)
          checkHeight(itemsMenu[0], submenuHeight)
          itemsMenu[0].parentNode.parentNode.classList.toggle('open')
        }
      })
    }
  }

  function getHeight(items) {
    let subHeight = Array.from(items).reduce((sum, current) =>
      sum + current.offsetHeight, 0);
    return subHeight
  }

  function checkHeight(item, height) {
    item.parentNode.style.maxHeight = item.parentNode.style.maxHeight === height + 'px' ? '0' : height + 'px';
  }

  setHeight(itemsLinks)
}


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