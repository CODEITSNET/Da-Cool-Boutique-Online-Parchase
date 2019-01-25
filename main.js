var i = 0; //start point
var images = [];
var time = 5000;

//Image List
images[0] = 'jsimages/bg_image.jpg';
images[1] = 'jsimages/bg_image1.jpg';
images[2] = 'jsimages/bg_image2.jpg';
images[3] = 'jsimages/bg_image3.jpg';
images[4] = 'jsimages/bg_image4.jpg';
images[5] = 'jsimages/bg_image5.jpg';
images[6] = 'jsimages/bg_image6.jpg';
images[7] = 'jsimages/bg_image7.jpg';
images[8] = 'jsimages/bg_image8.jpg';
images[9] = 'jsimages/bg_image9.jpg';
images[10] = 'jsimages/bg_image10.jpg';

//Change Images
function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
      i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()" , time);
}

window.onload = changeImg;