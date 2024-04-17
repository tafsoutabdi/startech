//Slider
let img_slider = document.getElementsByClassName('img_slider');//creation de la variable qui va contenir les img du slider
let etape = 0;//creation des etapes d'affichage des img et initialisation a 0
let nbr_img = img_slider.length//le nombre d'img
let precedent = document.querySelector('.previous');
let suivant = document.querySelector('.next');
function enleverActiveImg(){
    for(let i=0; i<nbr_img; i++){
        img_slider[i].classList.remove('active');//enlever toute les classe active sur toutes les img
    }
}
function changelink(id){
        document.getElementById('lien').href = 'page'+id+'.html';//changer le lien
}
suivant.addEventListener('click',function(){
    etape++;
    if(etape>=nbr_img){
        etape=0;
    }
    enleverActiveImg();//enlever la classe active pour toute les images
    img_slider[etape].classList.add('active');
    changelink(etape);

})
precedent.addEventListener('click',function(){
    etape--;
    if(etape<0){
        etape=(img_slider.length-1);
    }
    enleverActiveImg();//enlever la classe active pour toute les images
    img_slider[etape].classList.add('active');
    changelink(etape);
})
setInterval(function(){
    etape++;
    if(etape>=nbr_img){
        etape=0;
    }
    enleverActiveImg();//enlever la classe active pour toute les images
    img_slider[etape].classList.add('active');
    changelink(etape);
}, 5000)
const up = document.querySelector('.up');
up.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    })
let acheter = document.querySelectorAll(".acheter");
acheter.forEach(achat =>{
    achat.addEventListener("click", () =>{
        document.querySelector('.body').classList.add('dark');
        setTimeout(function(){
            alert("L'article a éte ajouté au panier avec succes !");
            document.querySelector(".body").classList.remove('dark');
        }, 0);
    })    
})
