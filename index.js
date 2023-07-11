function nothing() {
     alert('Webnya masih dalam perbaikan, silahkan membeli manual dengan mengechat adminnya :)');
}

//slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementById("slide-show-logomain").getElementsByTagName("img");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change slide every 2 seconds
}
