var product_Index = 0;
var product_Slides;
product_ShowSlides();

function product_PlusSlides(position) {
    if(position < 0) {
        product_Index = (product_Index + position) % product_Slides.length;
    }

    for (i = 0; i < product_Slides.length; i++) {
        product_Slides[i].style.display = "none";  
    }

    for(i = 0; i < 4; i++, product_Index++) {
        if(product_Index == product_Slides.length) {
            product_Index = 0;
        }
        product_Slides[product_Index].style.display = "inline-block";
    }
}


function product_ShowSlides() {
    var i;
    product_Slides = document.getElementsByClassName("product_Slide");
    for (i = 0; i < product_Slides.length; i++) {
        product_Slides[i].style.display = "none"; 
    } 
    
    for(i = 0; i < 4; i++, product_Index++) {
        if(product_Index == product_Slides.length) {
            product_Index = 0;
        }
        product_Slides[product_Index].style.display = "inline-block";
    }
    
    setTimeout(product_ShowSlides, 10000);
  }