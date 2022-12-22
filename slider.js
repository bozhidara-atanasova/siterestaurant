var i = 0;//start point
var images = [];
var time = 2000;


//Image List
images[0] = 'slideshow.webp';
images[1] = 'slideshowburger.webp';
images[2] = 'slideshowneshto.webp';
images[3] = 'slideshowsalat.webp';

//Change Images
function changeIMG()
{
document.slide.src = images[i];

if(i < images.length - 1)
  { 
    i++;
  }
  else
  {
    i = 0;
  }
  setTimeout("changeIMG()",time);
}
window.onload = changeIMG;