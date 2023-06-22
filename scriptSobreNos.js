gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "play pause restart reset",
  ease: "none",
  scroller: ".painel"
});

gsap.to("#equipe", {
    scrollTrigger: {
        trigger: "#primeiraSec",
    },
    duration: 2, 
    scale: 1,
    opacity: 1
});

let foto = document.getElementById("foto");
let nome = document.getElementById("nome");
let func = document.getElementById("func");

let danilo = document.getElementById("danilo");
let guilherme = document.getElementById("guilherme");
let gustavo = document.getElementById("gustavo");
let marcela = document.getElementById("marcela");
let murillo = document.getElementById("murillo");
let thais = document.getElementById("thais");

let olho = document.getElementById("olho");
let revelarDiv = document.getElementById("revelarDiv");
var estaMonstrando = true;

foto.style.backgroundImage =  "url(imagens/integrantes/danilo.jpeg)";
foto.style.backgroundSize = "cover";
nome.innerHTML = "Danilo";
danilo.style.backgroundColor = "#54ff64";
danilo.style.scale = "1.3";
nome.style.background = "linear-gradient(135deg, #00b31c, #54ff64)";
func.innerHTML = '<p><b>idade:</b> 17 anos <br> <b>função:</b> Desenvolveu a parte escrita e fez as pesquisas de dados <br> <b>hobbies:</b> Games, músicas, instrumentos <br> <b>redes sociais:</b> <div id="redes-sociais"><a href="https://www.instagram.com/dani_bortoto/" target="_blank" id="icon-instagram"><i class="fa-brands fa-square-instagram"></i></a></div>';

function mudarBackground(num) {
    if (num == 0) {
        foto.style.backgroundImage =  "url(imagens/integrantes/danilo.jpeg)";
        foto.style.backgroundSize = "cover";
        nome.innerHTML = "Danilo ";
        danilo.style.backgroundColor = "#54ff64";
        guilherme.style.backgroundColor = "#fff";
        gustavo.style.backgroundColor = "#fff";
        marcela.style.backgroundColor = "#fff";
        murillo.style.backgroundColor = "#fff";
        thais.style.backgroundColor = "#fff";
        danilo.style.scale = "1.3";
        guilherme.style.scale = "1";
        gustavo.style.scale = "1";
        marcela.style.scale = "1";
        murillo.style.scale = "1";
        thais.style.scale = "1";
        nome.style.background = "linear-gradient(135deg, #00b31c, #54ff64)";
        func.innerHTML = '<p><b>idade:</b> 17 anos <br> <b>função:</b> Desenvolveu a parte escrita e fez as pesquisas de dados <br> <b>hobbies:</b> Games, músicas, instrumentos <br> <b>redes sociais:</b> <div id="redes-sociais"><a href="https://www.instagram.com/dani_bortoto/" target="_blank" id="icon-instagram"><i class="fa-brands fa-square-instagram"></i></a></div> ';

    } else if (num == 1) {
        foto.style.backgroundImage =  "url(imagens/integrantes/guilherme.jpeg)";
        foto.style.backgroundSize = "cover";
        nome.innerHTML = "Guilherme";
        danilo.style.backgroundColor = "#fff";
        guilherme.style.backgroundColor = "#9a8df8";
        gustavo.style.backgroundColor = "#fff";
        marcela.style.backgroundColor = "#fff";
        murillo.style.backgroundColor = "#fff";
        thais.style.backgroundColor = "#fff";
        danilo.style.scale = "1";
        guilherme.style.scale = "1.3";
        gustavo.style.scale = "1";
        marcela.style.scale = "1";
        murillo.style.scale = "1";
        thais.style.scale = "1";
        nome.style.background = "linear-gradient(135deg, #663ee9, #9a8df8)";
        func.innerHTML = '<p><b>idade:</b> 21 anos <br> <b>função:</b> Ajudou com o design do jogo <br> <b>hobbies:</b> Design, cerveja, moto, videogame <br> <b>redes sociais:</b> <div id="redes-sociais"><a href="https://www.instagram.com/guilherme17al/" target="_blank" id="icon-instagram"><i class="fa-brands fa-square-instagram"></i></a><a href="https://www.facebook.com/profile.php?id=100004563792043&mibextid=ZbWKwL" target="_blank" id="icon-instagram"><i class="fa-brands fa-facebook"></i></i></a></div>';
        
    } else if (num == 2) {
        foto.style.backgroundImage =  "url(imagens/integrantes/gustavo.jpeg)";
        foto.style.backgroundSize = "cover";
        nome.innerHTML = "Gustavo";
        danilo.style.backgroundColor = "#fff";
        guilherme.style.backgroundColor = "#fff";
        gustavo.style.backgroundColor = "#fec273";
        marcela.style.backgroundColor = "#fff";
        murillo.style.backgroundColor = "#fff";
        thais.style.backgroundColor = "#fff";
        danilo.style.scale = "1";
        guilherme.style.scale = "1";
        gustavo.style.scale = "1.3";
        marcela.style.scale = "1";
        murillo.style.scale = "1";
        thais.style.scale = "1";
        nome.style.background = "linear-gradient(135deg, #fb8014, #fec273)";
        func.innerHTML = '<p><b>idade:</b> 18 anos <br> <b>função:</b> Programou o site <br> <b>hobbies:</b> Jogos, exercício físico, desenvolvimento front-end <br> <b>redes sociais:</b> <div id="redes-sociais"><a href="https://www.instagram.com/gusta.buzois/" target="_blank" id="icon-instagram"><i class="fa-brands fa-square-instagram"></i></a><a href="https://www.linkedin.com/in/gustavobuzois/" target="_blank" id="icon-instagram"><i class="fa-brands fa-linkedin"></i></a><a href="https://github.com/gubuzois" target="_blank" id="icon-instagram"><i class="fa-brands fa-github"></i></a></div> ';
        
    } else if (num == 3) {
        foto.style.backgroundImage =  "url(imagens/integrantes/marcela.jpeg)";
        foto.style.backgroundSize = "cover";
        nome.innerHTML = "Marcela";
        danilo.style.backgroundColor = "#fff";
        guilherme.style.backgroundColor = "#fff";
        gustavo.style.backgroundColor = "#fff";
        marcela.style.backgroundColor = "#ff61fe";
        murillo.style.backgroundColor = "#fff";
        thais.style.backgroundColor = "#fff";
        danilo.style.scale = "1";
        guilherme.style.scale = "1";
        gustavo.style.scale = "1";
        marcela.style.scale = "1.3";
        murillo.style.scale = "1";
        thais.style.scale = "1";
        nome.style.background = "linear-gradient(135deg, #c400ce, #ff61fe)";
        func.innerHTML = '<p><b>idade:</b> 17 anos <br> <b>função:</b> Fez a maior parte do design do jogo, incluindo a logo do grupo <br> <b>hobbies:</b> Filmes/séries/desenhos, jardinagem, desenhar <br> <b> redes sociais:</b> <br> <div id="redes-sociais"><a href="https://www.instagram.com/marcela_silv4_/" target="_blank" id="icon-instagram"><i class="fa-brands fa-square-instagram"></i></a><a href="https://www.linkedin.com/in/marcela-freitas-a29718208/" target="_blank" id="icon-instagram"><i class="fa-brands fa-linkedin"></i></a><a href="https://github.com/MarcelaSilvaa" target="_blank" id="icon-instagram"><i class="fa-brands fa-github"></i></a></div> ';
        
    } else if (num == 4) {
        foto.style.backgroundImage = "url(imagens/integrantes/murillo.jpg)";
        foto.style.backgroundSize = "90%";
        nome.innerHTML = "Murillo";
        danilo.style.backgroundColor = "#fff";
        guilherme.style.backgroundColor = "#fff";
        gustavo.style.backgroundColor = "#fff";
        marcela.style.backgroundColor = "#fff";
        murillo.style.backgroundColor = "#26dbc3";
        thais.style.backgroundColor = "#fff";
        danilo.style.scale = "1";
        guilherme.style.scale = "1";
        gustavo.style.scale = "1";
        marcela.style.scale = "1";
        murillo.style.scale = "1.3";
        thais.style.scale = "1";
        nome.style.background = "linear-gradient(135deg, #3586ff, #26dbc3)";
        func.innerHTML = '<p><b>idade:</b> 17 anos <br> <b>função:</b> Programou o jogo <br> <b>hobbies:</b> Jogar, crochê, xadrez, música, programar <br> <b>redes sociais:</b> <div id="redes-sociais"><a href="https://www.instagram.com/mubenetti/" target="_blank" id="icon-instagram"><i class="fa-brands fa-square-instagram"></i></a><a href="https://github.com/aromacintosh" target="_blank" id="icon-instagram"><i class="fa-brands fa-github"></i></a></div> ';
        
    } else if (num == 5) {
        foto.style.backgroundImage =  "url(imagens/integrantes/thais.jpeg)";
        foto.style.backgroundSize = "cover";
        nome.innerHTML = "Thais";
        danilo.style.backgroundColor = "#fff";
        guilherme.style.backgroundColor = "#fff";
        gustavo.style.backgroundColor = "#fff";
        marcela.style.backgroundColor = "#fff";
        murillo.style.backgroundColor = "#fff";
        thais.style.backgroundColor = "#ff657c";
        danilo.style.scale = "1";
        guilherme.style.scale = "1";
        gustavo.style.scale = "1";
        marcela.style.scale = "1";
        murillo.style.scale = "1";
        thais.style.scale = "1.3";
        nome.style.background = "linear-gradient(135deg, #ec1636, #ff657c)";
        func.innerHTML = '<p><b>idade:</b> 19 anos <br> <b>função:</b> Desenvolveu a parte escrita do TCC <br> <b>hobbies:</b> Ler, escrever, ouvir música, passear ao ar livre <br> <b>redes sociais:</b> <div id="redes-sociais"><a href="https://www.instagram.com/thaiismatt0s/" target="_blank" id="icon-instagram"><i class="fa-brands fa-square-instagram"></i></a><a href="https://www.linkedin.com/in/tha%C3%ADs-mattos-a288611aa" target="_blank" id="icon-instagram"><i class="fa-brands fa-linkedin"></i><a href="https://twitter.com/thataii_" target="_blank" id="icon-instagram"><i class="fa-brands fa-twitter"></i></a></div> ';
        
    } 
}

function ocultarDiv(estaMonstrando) {
    if (estaMonstrando === true) {
        revelarDiv.style.display = "flex";
        olho.className = "fa-solid fa-eye";
    } 
    else if (estaMonstrando === false) {
        revelarDiv.style.display = "none";
        olho.className = "fa-solid fa-eye-slash";
    }

}

danilo.addEventListener("click", function() {
        mudarBackground(0);
});
guilherme.addEventListener("click", function() {
    mudarBackground(1);
    });
gustavo.addEventListener("click", function() {
    mudarBackground(2);
    });
marcela.addEventListener("click", function() {
    mudarBackground(3);
    });
murillo.addEventListener("click", function() {
    mudarBackground(4);
    });
thais.addEventListener("click", function() {
    mudarBackground(5);
    });

olho.addEventListener("click", function() {
    estaMonstrando = !estaMonstrando;
    ocultarDiv(estaMonstrando);
})

menu.addEventListener('click', function() {
    menuOn = !menuOn;
    mudarMenu(menuOn);
})
