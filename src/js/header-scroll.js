window.onscroll = function () {
    if (window.screen.width >= 768) {
      scrollY <= 70
        ? document.querySelector('.header-js').classList.remove('header-bg')
        : document.querySelector('.header-js').classList.add('header-bg');
    } else {
      scrollY <= 120
        ? document.querySelector('.header-js').classList.remove('header-bg')
        : document.querySelector('.header-js').classList.add('header-bg');
    }
  };