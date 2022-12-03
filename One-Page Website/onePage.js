// sticky navbar

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("NavBar");
var sticky = NavBar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// GALLERY LIGHTBOX

// opens lightbox when one of the gallery images is clicked

function openLight() {
    document.getElementById("lightBox").style.display = "block";
  }
  
  // closes the lightbox when you click the big X
  
  function closeLight() {
    document.getElementById("lightBox").style.display = "none";
  }
  
  var lightIndex = 1;
  showLight(lightIndex);
  
  // moves slides when you click previous or next buttons
  
  function plusLight(n) {
    showLight(lightIndex += n);
  }
  
  // shows the current slide at a bigger size 
  
  function currentLight(n) {
    showLight(lightIndex = n);
  }
  
  function showLight(n) {
    var i;
    var slides = document.getElementsByClassName("lightSlides");
    var dots = document.getElementsByClassName("largeLightImgThumb");
    var captionText = document.getElementById("displayCaption");
    if (n > slides.length) {lightIndex = 1}
    if (n < 1) {lightIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[lightIndex-1].style.display = "block";
    dots[lightIndex-1].className += " active";
    captionText.innerHTML = dots[lightIndex-1].alt;
  }