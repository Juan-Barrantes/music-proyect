function main(){
    document.getElementById("mainPicture").src = "pictures/home/main.jpg";
}

function menu1(){
    // alert("hola- sí que funca")
    document.getElementById("mainPicture").src = "pictures/home/img1.jpg";
}
function menu2(){
    document.getElementById("mainPicture").src = "pictures/home/img2.jpg";
}
function menu3(){
    document.getElementById("mainPicture").src = "pictures/home/img3.jpg";
}
function menu4(){
    document.getElementById("mainPicture").src = "pictures/home/img4.jpg";
}
function menu5(){
    document.getElementById("mainPicture").src = "pictures/home/img5.jpg";
}
function menu6(){
    document.getElementById("mainPicture").src = "pictures/home/img6.jpg";
}
function menu7(){
    document.getElementById("mainPicture").src = "pictures/home/img7.jpg";
}

// The SLIDER  ._.
// para que funque desde que carga la pag

window.addEventListener('load',function(){

    var imgs =[];
    imgs[0] = "pictures/home/img1.jpg";
    imgs[1] = "pictures/home/img2.jpg";
    imgs[2] = "pictures/home/img3.jpg";
    imgs[3] = "pictures/home/img4.jpg";
    imgs[4] = "pictures/home/img5.jpg";
    imgs[5] = "pictures/home/img6.jpg";
    imgs[6] = "pictures/home/img7.jpg";

    let imgIndice =0;
    let time=2000;
    function changeIMG() {
        document.slider.src= imgs[imgIndice];    
        if (imgIndice <6) {
            imgIndice++;
        } else{
            imgIndice=0
        }
    }    
    setInterval(changeIMG, time,TransitionEvent)
    
    
    


});
