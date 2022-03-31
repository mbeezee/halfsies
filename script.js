// slider 1
var imageSlideTop = document.querySelector('.slider-image-top');
var imagesTop = ["top-01.jpg", "top-02.jpg", "top-03.jpg", "top-04.jpg", "top-05.jpg", "top-06.jpg", "top-07.jpg", "top-08.jpg"];
var imageSlideBottom = document.querySelector('.slider-image-bottom');
var imagesBottom = ["bottom-01.jpg", "bottom-02.jpg", "bottom-03.jpg", "bottom-04.jpg", "bottom-05.jpg", "bottom-06.jpg", "bottom-07.jpg", "bottom-08.jpg"];

// current image index
var i = 0;

function prevTop(){
    if(i <= 0) i = imagesTop.length;
    i--;
    return setImgTop(); 
}

function prevBottom(){
    if(i <= 0) i = imagesBottom.length ;
    i--;
    return setImgBottom(); 
}

function nextTop(){
    if(i >= imagesTop.length-1 ) i = -1;
    i++;
    return setImgTop(); 
}

function nextBottom(){
    if(i >= imagesBottom.length-1 ) i = -1;
    i++;
    return setImgBottom(); 
}

function setImgTop (){
    return imageSlideTop.setAttribute("src", "images/"+imagesTop[i]);
}

function setImgBottom (){
    return imageSlideBottom.setAttribute("src", "images/"+imagesBottom[i]);
}

function randomizeTop (){
    randomIndex = Math.floor(Math.random() * imagesTop.length);
    displayedImage = imagesTop[randomIndex]
    document.getElementById('heads').src = `./images/${displayedImage}`
}

function randomizeBottom (){
    randomIndex = Math.floor(Math.random() * imagesBottom.length);
    displayedImage = imagesBottom[randomIndex]
    document.getElementById('bodies').src = `./images/${displayedImage}`
}

