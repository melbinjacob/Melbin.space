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


const imgLink = document.getElementById("sectioncimg")
const imgLinks = [
    "https://images.pexels.com/photos/16877815/pexels-photo-16877815/free-photo-of-an-antique-vintage-window.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/15923681/pexels-photo-15923681/free-photo-of-coffee-tasters-flavour-wheel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/15923678/pexels-photo-15923678/free-photo-of-vintage-light-hanging.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/15923677/pexels-photo-15923677/free-photo-of-coffee-brew.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/14521180/pexels-photo-14521180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/14521175/pexels-photo-14521175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/14521170/pexels-photo-14521170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/14521172/pexels-photo-14521172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/14521177/pexels-photo-14521177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/14521156/pexels-photo-14521156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/14521155/pexels-photo-14521155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/14521152/pexels-photo-14521152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/14521148/pexels-photo-14521148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/14521149/pexels-photo-14521149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/14521143/pexels-photo-14521143.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    "https://images.pexels.com/photos/14521137/pexels-photo-14521137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
];
function changeImgLink(link, links){
    var randomIndex = Math.floor(Math.random() * links.length);
    link.src = links[randomIndex];
};

setInterval( function(){changeImgLink(imgLink, imgLinks)}, 800);