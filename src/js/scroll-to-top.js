let btn_scroll = document.querySelector('.btn_scroll')
//
function magic() {
  if (window.pageYOffset > 200) {
  btn_scroll.style.opacity = '1'
  } else { btn_scroll.style.opacity = '0' }
}
//


// When scrolling, we run the function
window.onscroll = magic