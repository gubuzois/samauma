gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "play pause restart reset",
  ease: "none",
  scroller: ".painel"
});

gsap.to(".banner", {
    scrollTrigger: {
        trigger: "#primeiraSec",
    },
    duration: 2, 
    scale: 1,
    opacity: 1
});

gsap.to(".sinopse-wrapper", {
    scrollTrigger: {
        trigger: "#primeiraSec",
    },
    duration: 2, 
    scale: 1,
    opacity: 1
});

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
let divImagem = document.getElementById("divImagem");

divImagem.style.backgroundImage = "url('imagens/hidrografia(" + 0 + ").jpg')";


function mudarImagem(num) {
    if (num == 1) {
        img1.className = "imagem-active";
        img2.className = "imagem";
        img3.className = "imagem";
        img4.className = "imagem";
        divImagem.style.backgroundImage = "url('imagens/hidrografia(" + 0 + ").jpg')";
    } 
    else if (num == 2) {
        img1.className = "imagem";
        img2.className = "imagem-active";
        img3.className = "imagem";
        img4.className = "imagem";
        divImagem.style.backgroundImage = "url('imagens/hidrografia(" + 1 + ").jpg')";
    }
    else if (num == 3) {
        img1.className = "imagem";
        img2.className = "imagem";
        img3.className = "imagem-active";
        img4.className = "imagem";
        divImagem.style.backgroundImage = "url('imagens/hidrografia(" + 2 + ").jpg')";
    }
    else {
        img1.className = "imagem";
        img2.className = "imagem";
        img3.className = "imagem";
        img4.className = "imagem-active";
        divImagem.style.backgroundImage = "url('imagens/hidrografia(" + 3 + ").jpg')";
    }

}
img1.addEventListener("click", function() {
        mudarImagem(1);
});

img2.addEventListener("click", function() {
    mudarImagem(2);
});       

img3.addEventListener("click", function() {
        mudarImagem(3);
});

img4.addEventListener("click", function() {                
    mudarImagem(4);
});