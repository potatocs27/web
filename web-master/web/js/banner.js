var banner_Index = 0;
var banner_Slides, dots;
banner_ShowSlides();

// Next/previous controls
function banner_PlusSlides(position) {
  banner_Index +=position;
  if (banner_Index> banner_Slides.length) {banner_Index = 1}
  else if(banner_Index<1){banner_Index = banner_Slides.length}
  for (i = 0; i < banner_Slides.length; i++) {
    banner_Slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  banner_Slides[banner_Index-1].style.display = "block";  
  dots[banner_Index-1].className += " active";
}

// Thumbnail image controls
function banner_CurrentSlide(index) {
  if (index> banner_Slides.length) {index = 1}
  else if(index<1){index = banner_Slides.length}
  for (i = 0; i < banner_Slides.length; i++) {
    banner_Slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  banner_Slides[index-1].style.display = "block";  
  dots[index-1].className += " active";
}




function banner_ShowSlides() {
  var i;
  banner_Slides = document.getElementsByClassName("banner_Slide");
  dots = document.getElementsByClassName("dot"); 
  for (i = 0; i < banner_Slides.length; i++) {
    banner_Slides[i].style.display = "none"; 
  } 

  banner_Index++;
  if (banner_Index > banner_Slides.length) {banner_Index = 1} 

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  banner_Slides[banner_Index-1].style.display = "block"; 
  dots[banner_Index-1].className += " active";

  setTimeout(banner_ShowSlides, 3000);
}



