var currentIndex = 0;
var newIndex = 0;

var slideElements = document.getElementsByClassName('slider_slide');
var slidesLength = slideElements.length;
var paginationElement = document.getElementsByClassName('slider_pagination')[0];
var navElements = document.getElementsByClassName("slider_nav");

function navigateSlider() {
   if (newIndex === -1) {
      newIndex = slidesLength - 1;
   }
   else if (newIndex === slidesLength) {
      newIndex = 0;
   }

   paginationElement.childNodes[currentIndex].classList.remove('slider_pagination_btn--sel');
   paginationElement.childNodes[newIndex].classList.add('slider_pagination_btn--sel');

   slideElements[currentIndex].style.display = "none";
   slideElements[newIndex].style.display = "flex";
   currentIndex = newIndex;
}

navElements[0].addEventListener('click', function() {
   newIndex--;
   navigateSlider();
});

navElements[1].addEventListener('click', function() {
   newIndex++;
   navigateSlider();
});

var paginationHTML = [];
for (var i = 0; i < slidesLength; i++) {
   paginationHTML.push('<button class="slider_pagination_btn" data-index="' + i + '"></button>');
}
paginationElement.innerHTML = paginationHTML.join('');

paginationElement.addEventListener('click', function(e) {
   var target = e.target;
   if (target.classList.contains("slider_pagination_btn")) {
      newIndex = Number(target.getAttribute("data-index"));
      navigateSlider();
   }
});

var autoplay = true;
var autoplayInterval = 4000;

if (autoplay) {
   setInterval(function() {
      newIndex++;
      navigateSlider();
   }, autoplayInterval);
}

navigateSlider();