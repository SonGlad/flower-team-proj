window.onscroll = function () {
    if (window.screen.width >= 1280) {
      scrollY <= 815
        ? document.querySelector('.header-js').classList.remove('header-bg')
        : document.querySelector('.header-js').classList.add('header-bg');
    } else {
      scrollY <= 120
        ? document.querySelector('.header-js').classList.remove('header-bg')
        : document.querySelector('.header-js').classList.add('header-bg');
    }
  };