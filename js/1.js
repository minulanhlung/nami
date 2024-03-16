const bg = document.getElementById('background');
window.addEventListener('scroll', function(){
    bg.style.backgroundSize = 160 - +window.pageYOffset/12+'%';
})

const totop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100){
        totop.classList.add("active");
    }else{
        totop.classList.remove("active");
    }
})