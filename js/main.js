let hambruger = document.getElementById("bars")
let closeIcon = document.getElementById("xIcon")
let navLinks = document.getElementById("ulContainer")
function navShow(){
    navLinks.style.top = "0"
}
function navHide(){
    navLinks.style.top = "-100%"
}
const maxWidthQuery = window.matchMedia('(min-width: 768px)');
  function handleMaxWidthChange(mediaQuery) {
    if (mediaQuery.matches) {
        navHide()
    }
  }
handleMaxWidthChange(maxWidthQuery);
maxWidthQuery.addListener(handleMaxWidthChange);