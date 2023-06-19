let hambruger = document.getElementById("bars")
let closeIcon = document.getElementById("xIcon")
let navLinks = document.getElementById("ulContainer")
function navShow(){
    navLinks.style.top = "0"
}
function navHide(){
    navLinks.style.top = "-110vh"
}
const maxWidthQuery = window.matchMedia('(max-width: 768px)');
  function handleMaxWidthChange(mediaQuery) {
    if (mediaQuery.matches) {
        navHide()
        console.log("Nav Hide")

    }
}
handleMaxWidthChange(maxWidthQuery);
maxWidthQuery.addListener(handleMaxWidthChange);
