function changeImg(element){
    document.querySelector(".imgto").src = element.src;
}
function  resetImg(){
    document.querySelector(".imgto").src = "./img/download (1).jpg";
}
function showlightbox(){
    document.querySelector('.cover-bg').style.display ="flex";
}

function hidelightbox(){
    document.querySelector('.cover-bg').style.display ="none";
}