// Humberg Menu
function myHumbergMenu(x) {
    x.classList.toggle("change");
}

// Menu Desktop

var myDropdown = document.getElementsByClassName('dropdown-toggle');
for (i = 0; i < myDropdown.length; i++) {
    myDropdown[i].addEventListener('mouseover', function (e) {
        var el = this.children[1];
        el.style.display = 'block'

    });
    myDropdown[i].addEventListener('mouseout', function (e) {
        var el = this.children[1];
        el.style.display = 'none'

    });
}

// Menu Moblile

var myDropdown = document.getElementsByClassName('mobile-dropdown-toggle');
for (i = 0; i < myDropdown.length; i++) {
    myDropdown[i].addEventListener('click', function (e) {
        var el = this.children[1];
        el.classList.toggle('menu-open');
        var el1 = this.children[0];
        el1.classList.toggle('minus-arrow');

    });
    
}


// Sidebar Menu

const element = document.querySelector('.h-icons');
element.addEventListener("click", function () {
    document.querySelector('.secondearyMenu-Wrapper').style.right = '0';

});
const element1 = document.querySelector('.closeBtn');
element1.addEventListener("click", function () {
    document.querySelector('.secondearyMenu-Wrapper').style.right = '-100%';
    element.classList.remove("change");
});

// Mobile Slide Menu

const element2 = document.querySelector('.moibleHumberIcon');
element2.addEventListener("click", function () {
    document.querySelector('.mobileMenuWrapper').style.left = '0';
});
const element3 = document.querySelector('.closeBtnMobile');
element3.addEventListener("click", function () {
    document.querySelector('.mobileMenuWrapper').style.left = '-100%';
    element3.classList.remove("change");
});

// Lightbox Secondary Menu Wrapper

function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    //dots[slideIndex-1].className += " active";
    //captionText.innerHTML = dots[slideIndex-1].alt;
  }


// Counter Years

function numCounter(tagId,maxCount,speed){
    var initialNumber = 0;
    function counter(){
        document.getElementById(tagId).innerHTML = initialNumber;
        ++initialNumber;
    }
    var counterDelay = setInterval(counter,speed);
    function totalTime(){
        clearInterval(counterDelay);
    }
    var totalPeriod = speed * (maxCount);  
    setTimeout(totalTime, totalPeriod);
}

numCounter("Clients",26,100);
numCounter("Foundation",126,100);
numCounter("SatisfyClients",56,100);
numCounter("Global",76,100);
numCounter("Awards",16,100);


// Video Popup

window.document.onkeydown = function(e) {
    if (!e) {
      e = event;
    }
    if (e.keyCode == 27) {
      lightbox_close();
    }
  }
  
  function lightbox_open() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    window.scrollTo(0, 0);
    document.getElementById('light').style.display = 'block';
    document.getElementById('fade').style.display = 'block';
    lightBoxVideo.play();
  }
  
  function lightbox_close() {
    var lightBoxVideo = document.getElementById("VisaChipCardVideo");
    document.getElementById('light').style.display = 'none';
    document.getElementById('fade').style.display = 'none';
    lightBoxVideo.pause();
  }



