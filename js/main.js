
const MAIN_IMG = document.getElementById("img");
const IMG_ARRAY = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg","img/05.jpg","img/06.jpg","img/07.jpg","img/08.jpg","img/09.jpg","img/10.jpg","img/11.jpg","img/12.jpg","img/13.jpg","img/14.jpg","img/15.jpg","img/16.jpg","img/17.jpg","img/18.jpg","img/19.jpg"];
var currentIndex = 0;
function changeImg() {
    MAIN_IMG.src = IMG_ARRAY[currentIndex];
    currentIndex = (currentIndex + 1) % IMG_ARRAY.length;
}
