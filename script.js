//Script para movimentar as árvores
var frente_direita = document.getElementById("frente_direita");
let frente_esquerda = document.getElementById('frente_esquerda');
let texto = document.getElementById('samauma');
let btn = document.getElementById('btn');
let primeiraSec = document.getElementById("primeiraSec");

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    frente_direita.style.left = value * 0.5 + 'px';
    frente_esquerda.style.left = value * -0.5 + 'px';
    texto.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
});

function comecar() {
    primeiraSec.scrollIntoView();
}
//Função scrollIntoView para primeira section
btn.addEventListener("click", function() {
    comecar();
});

//Script para os textos e imagens do container dados
const topico1 = document.getElementById("topico1");
const topico2 = document.getElementById("topico2");
const topico3 = document.getElementById("topico3");
const p1 = document.getElementById("texto-amazonia1");
const p2 = document.getElementById("texto-amazonia2");
const setaEsquerda = document.getElementById("esquerda");
const setaDireita = document.getElementById("direita");
const imagemAmazonia = document.getElementById("imagem-amazonia");
const containerImagens = document.getElementById("imagens-container");
let indice = 0;
let indiceImagem = 0;
let tipoAssunto = "biodiversidade";

p1.innerHTML = 'A biodiversidade na Amazônia é incrivelmente rica, com uma variedade impressionante de espécies vegetais e animais. Estima-se que a região seja o lar de cerca de 40 mil espécies de plantas, sendo muitas delas exclusivas desse ecossistema. Algumas das plantas mais icônicas incluem a samaúma, vitória-régia, orquídeas e várias espécies de palmeiras.';
p2.innerHTML = "Além disso, a Floresta Amazônica abriga uma vasta diversidade de animais. Estima-se que existam mais de 2,5 milhões de espécies de insetos na região, incluindo borboletas, besouros, formigas e abelhas. A Amazônia também é o lar de mamíferos emblemáticos, como a onça-pintada, o boto-cor-de-rosa, o tamanduá-bandeira e o mico-leão-dourado.";
topico1.style.scale = '1.2';
topico1.style.color = '#118ae6';

function mudarTexto(indice) {
    if (indice == 0) {
        p1.innerHTML = "A biodiversidade na Amazônia é incrivelmente rica, com uma variedade impressionante de espécies vegetais e animais. Estima-se que a região seja o lar de cerca de 40 mil espécies de plantas, sendo muitas delas exclusivas desse ecossistema. Algumas das plantas mais icônicas incluem a samaúma, vitória-régia, orquídeas e várias espécies de palmeiras.";
        p2.innerHTML = "Além disso, a Floresta Amazônica abriga uma vasta diversidade de animais. Estima-se que existam mais de 2,5 milhões de espécies de insetos na região, incluindo borboletas, besouros, formigas e abelhas. A Amazônia também é o lar de mamíferos emblemáticos, como a onça-pintada, o boto-cor-de-rosa, o tamanduá-bandeira e o mico-leão-dourado.";
        topico1.style.scale = '1.2';
        topico2.style.scale = '1';
        topico3.style.scale = '1';
        topico1.style.color = '#118ae6';
        topico2.style.color = '#fff';
        topico3.style.color = '#fff';
        tipoAssunto = "biodiversidade";
        containerImagens.style.display = "flex";
        imagemAmazonia.style.display = "flex";
        imagemAmazonia.style.backgroundImage = "url('imagens/" + tipoAssunto + "(" + indiceImagem + ").jpg')";
    }
    else if (indice == 1) {
        p1.innerHTML = "A floresta Amazônica abrange uma área extensa e diversificada, espalhando-se por nove países da América do Sul: Brasil, Bolívia, Peru, Equador, Colômbia, Venezuela, Guiana, Suriname e Guiana Francesa. É considerada a maior floresta tropical do mundo, abrangendo aproximadamente 7 milhões de quilômetros quadrados.";
        p2.innerHTML = "O Brasil detém a maior parte da Floresta Amazônica, com cerca de 60% de seu território localizado dentro país. A região amazônica brasileira abrange nove estados: Amazonas, Pará, Rondônia, Acre, Amapá, Roraima, Maranhão, Tocantins e Mato Grosso.";
        topico1.style.scale = '1';
        topico2.style.scale = '1.2';
        topico3.style.scale = '1';
        topico1.style.color = '#fff';
        topico2.style.color = '#118ae6';
        topico3.style.color = '#fff';
        containerImagens.style.display = "none";
        imagemAmazonia.style.display = "none";
        imagemAmazonia.style.backgroundImage = "url('imagens/" + tipoAssunto + "(" + indiceImagem + ").jpg')";
    }
    else if (indice == 2) {
        p1.innerHTML = "O principal rio da região é o Rio Amazonas, que é o maior rio em volume de água e o segundo mais longo do mundo, atrás apenas do Rio Nilo. Ele nasce nos Andes peruanos e flui em direção ao Atlântico, percorrendo cerca de 6.400 quilômetros. O Rio Amazonas é alimentado por inúmeros afluentes, muitos dos quais também são rios extensos por si só. Alguns exemplos desses afluentes são: Rio Negro, Rio Madeira, Rio Purus e Rio Japurá.";
        p2.innerHTML = "Essa complexa rede de rios forma um sistema fluvial interconectado que desempenha um papel fundamental no transporte de sedimentos, nutrientes e água pela região. Durante a estação chuvosa, esses rios podem inundar vastas áreas, formando planíces de inundação conhecidas como várzeas. Essas áreas alagada são extremamentes férteis e sustentam uma grande diversidade de vida, incluindo árvores, plantas aquáticas, peixes, mamíferos e aves.";
        topico1.style.scale = '1';
        topico2.style.scale = '1';
        topico3.style.scale = '1.2';
        topico1.style.color = '#fff';
        topico2.style.color = '#fff';
        topico3.style.color = '#118ae6';
        tipoAssunto = "hidrografia";
        containerImagens.style.display = "flex";
        imagemAmazonia.style.display = "flex";
        imagemAmazonia.style.backgroundImage = "url('imagens/" + tipoAssunto + "(" + indiceImagem + ").jpg')";
    }
}

function mudarImagemAmazonia(indiceImagem) {
    imagemAmazonia.style.backgroundImage = "url('imagens/" + tipoAssunto + "(" + indiceImagem + ").jpg')";
}

topico1.addEventListener('click', function() {
    mudarTexto(0);
});

topico2.addEventListener('click', function() {
    mudarTexto(1);
});

topico3.addEventListener('click', function() {
    mudarTexto(2);
});

var indiceMaximo = 5;

setaEsquerda.addEventListener('click', function() {
    indiceImagem--;
    if (indiceImagem < 0) {
        indiceImagem = indiceMaximo;
    }
    mudarImagemAmazonia(indiceImagem);
});

setaDireita.addEventListener('click', function() {
    indiceImagem++;
    if (indiceImagem > indiceMaximo) {
        indiceImagem = 0;
    }
    mudarImagemAmazonia(indiceImagem);
});

let menu = document.getElementById("menu");
let nav = document.querySelector('nav');
let menuOn = false;

function mudarMenu(menuOn) {
    if (menuOn == false) {
        nav.style.left = "-100%";
    } else {
        nav.style.left = "0";
    }
    
}

menu.addEventListener('click', function() {
    menuOn = !menuOn;
    mudarMenu(menuOn);
});






