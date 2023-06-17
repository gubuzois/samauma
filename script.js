//Animação GSAP
gsap.to("#fundo", {
    scrollTrigger : {
        scrub : 1
    },
    scale : 2,
});

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  toggleActions: "play pause restart reset",
  scroller: ".painel"
});

gsap.to("#fundo", {
    scrollTrigger: {
        trigger: "#section-comeco",
    },
    duration: 2, 
    scale: 1.2,
    });

gsap.to("#meio", {
    scrollTrigger: {
        trigger: "#section-comeco",
    },
    duration: 2, 
    scale: 1.1,
    });

gsap.to("#frente_esquerda", {
    scrollTrigger: {
        trigger: "#section-comeco",
    },
    duration: 2, 
    x: -100,
    });

gsap.to("#frente_direita", {
    scrollTrigger: {
        trigger: "#section-comeco",
    },
    duration: 2, 
    x: 100,
    });

gsap.to("#samauma", {
    scrollTrigger: {
        trigger: "#section-comeco",
    },
    duration: 2, 
    scale: 1.1
    });

gsap.to(".logo-samauma", {
    scrollTrigger: {
        trigger: "#primeiraSec",
    },
    duration: 2, 
    scale: 1.1,
    y: 100,
    opacity: 1
    });

gsap.to(".introducao", {
    scrollTrigger: {
        trigger: "#primeiraSec",
    },
    duration: 2, 
    scale: 1.05,
    opacity: 1,
    y: -100
    });

gsap.to(".a", {
    scrollTrigger: {
        trigger: "#primeiraSec",
    },
    duration: 2, 
    x: 50,
    y: 50,
    opacity: 1
    });

gsap.to(".b", {
    scrollTrigger: {
        trigger: "#primeiraSec",
    },
    duration: 2, 
    x: -50,
    y: -80,
    opacity: 1
    });

gsap.to(".c", {
    scrollTrigger: {
        trigger: "#primeiraSec",
    },
    duration: 2, 
    x: 50,
    y: 80,
    opacity: 1
    });

gsap.to(".d", {
scrollTrigger: {
    trigger: "#primeiraSec",
},
duration: 2, 
x: -40,
y: 20,
opacity: 1
});

gsap.to(".e", {
scrollTrigger: {
    trigger: "#primeiraSec",
},
duration: 2, 
x: 70,
y: -20,
opacity: 1
});

gsap.to(".f", {
    scrollTrigger: {
        trigger: "#primeiraSec",
    },
    duration: 2, 
    x: 60,
    y: 20,
    opacity: 1
    });

gsap.to(".missao", {
    scrollTrigger: {
        trigger: "#segundaSec",
    },
    duration: 2, 
    scale: 1.2,
    opacity: 1,
    });

gsap.to(".texto-missao", {
    scrollTrigger: {
        trigger: "#segundaSec",
    },
    duration: 2, 
    scale: 1,
    opacity: 1,
    });

gsap.to(".logo-pequena", {
    scrollTrigger: {
        trigger: "#segundaSec",
    },
    duration: 2, 
    scale: 1,
    opacity: 1,
    });

gsap.to(".topicos", {
    scrollTrigger: {
        trigger: "#terceiraSec",
    },
    duration: 2, 
    scale: 1,
    opacity: 1,
    });

gsap.to(".card-info", {
    scrollTrigger: {
        trigger: "#terceiraSec",
    },
    duration: 1.4, 
    scale: 1.05,
    opacity: 1,
    });

gsap.to(".titulo-principais", {
    scrollTrigger: {
        trigger: "#secPrincipais",
    },
    duration: 1, 
    left: 0,
    opacity: 1,
    });

gsap.to("#animal-nome", {
    scrollTrigger: {
        trigger: "#secPrincipais",
    },
    duration: 2, 
    left: 0,
    opacity: 1,
    });

gsap.to("#texto-principais", {
    scrollTrigger: {
        trigger: "#secPrincipais",
    },
    duration: 3, 
    left: 0,
    opacity: 0.8,
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
let indice = 0;

p1.innerHTML = 'A biodiversidade na Amazônia é incrivelmente rica, com uma variedade impressionante de espécies vegetais e animais. Estima-se que a região seja o lar de cerca de 40 mil espécies de plantas, sendo muitas delas exclusivas desse ecossistema. Algumas das plantas mais icônicas incluem a samaúma, vitória-régia, orquídeas e várias espécies de palmeiras.';
p2.innerHTML = "Além disso, a Floresta Amazônica abriga uma vasta diversidade de animais. Estima-se que existam mais de 2,5 milhões de espécies de insetos na região, incluindo borboletas, besouros, formigas e abelhas. A Amazônia também é o lar de mamíferos emblemáticos, como a onça-pintada, o boto-cor-de-rosa, o tamanduá-bandeira e o mico-leão-dourado.";
topico1.style.scale = '1.2';
topico1.style.color = '#9fde17';

function mudarTexto(indice) {
    if (indice == 0) {
        p1.innerHTML = "A biodiversidade na Amazônia é incrivelmente rica, com uma variedade impressionante de espécies vegetais e animais. Estima-se que a região seja o lar de cerca de 40 mil espécies de plantas, sendo muitas delas exclusivas desse ecossistema. Algumas das plantas mais icônicas incluem a samaúma, vitória-régia, orquídeas e várias espécies de palmeiras.";
        p2.innerHTML = "Além disso, a Floresta Amazônica abriga uma vasta diversidade de animais. Estima-se que existam mais de 2,5 milhões de espécies de insetos na região, incluindo borboletas, besouros, formigas e abelhas. A Amazônia também é o lar de mamíferos emblemáticos, como a onça-pintada, o boto-cor-de-rosa, o tamanduá-bandeira e o mico-leão-dourado.";
        topico1.style.scale = '1.2';
        topico2.style.scale = '1';
        topico3.style.scale = '1';
        topico1.style.color = '#9fde17';
        topico2.style.color = '#fff';
        topico3.style.color = '#fff';
    }
    else if (indice == 1) {
        p1.innerHTML = "A floresta Amazônica abrange uma área extensa e diversificada, espalhando-se por nove países da América do Sul: Brasil, Bolívia, Peru, Equador, Colômbia, Venezuela, Guiana, Suriname e Guiana Francesa. É considerada a maior floresta tropical do mundo, ocupando aproximadamente 7 milhões de quilômetros quadrados.";
        p2.innerHTML = "O Brasil detém a maior parte da Floresta Amazônica, com cerca de 60% de seu território localizado dentro país. A região amazônica brasileira abrange nove estados: Amazonas, Pará, Rondônia, Acre, Amapá, Roraima, Maranhão, Tocantins e Mato Grosso.";
        topico1.style.scale = '1';
        topico2.style.scale = '1.2';
        topico3.style.scale = '1';
        topico1.style.color = '#fff';
        topico2.style.color = '#9fde17';
        topico3.style.color = '#fff';
    }
    else if (indice == 2) {
        p1.innerHTML = "O principal rio da região é o Rio Amazonas, que é o maior rio em volume de água e o segundo mais longo do mundo, atrás apenas do Rio Nilo. Ele nasce nos Andes peruanos e flui em direção ao Atlântico, percorrendo cerca de 6.400 quilômetros. O Rio Amazonas é alimentado por inúmeros afluentes, muitos dos quais também são rios extensos por si só. Alguns exemplos desses afluentes são: Rio Negro, Rio Madeira, Rio Purus e Rio Japurá.";
        p2.innerHTML = "Essa complexa rede de rios forma um sistema fluvial interconectado que desempenha um papel fundamental no transporte de sedimentos, nutrientes e água pela região. Durante a estação chuvosa, esses rios podem inundar vastas áreas, formando planíces de inundação conhecidas como várzeas. Essas áreas alagada são extremamentes férteis e sustentam uma grande diversidade de vida, incluindo árvores, plantas aquáticas, peixes, mamíferos e aves.";
        topico1.style.scale = '1';
        topico2.style.scale = '1';
        topico3.style.scale = '1.2';
        topico1.style.color = '#fff';
        topico2.style.color = '#fff';
        topico3.style.color = '#9fde17';
    }
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

const secPrincipais = document.getElementById("secPrincipais");
const animalNome = document.getElementById("nome");
const textoPrincipais = document.getElementById("texto-principais");
const setaEsquerda = document.getElementById("seta-esquerda");
const setaDireita = document.getElementById("seta-direita");
let indicePrincipais = 0;
let indiceMin = 0;
let indiceMax = 7;

function animaisPrincipais(indicePrincipais) {
    if(indicePrincipais == 0) {
        secPrincipais.style.backgroundImage = "url(imagens/animais_principais/onca_pintada.jpg)";
        animalNome.innerHTML = "onça-pintada";
        textoPrincipais.innerHTML = "Famosa pelas suas manchas pretas em sua pelagem amarela, a onça pintada é a maior espécie de felino da América do Sul, possuindo também a mordida mais forte dentre eles. É um felino carnívoro de grande porte, com seu peso variando de 35 kg a 130 kg e altura de 1,70 a 2,40 metros.";
    }
    else if (indicePrincipais == 1) {
        secPrincipais.style.backgroundImage = "url(imagens/animais_principais/lobo-guara.jpg)";
        animalNome.innerHTML = "lobo-guará";
        textoPrincipais.innerHTML = "Sendo um mamífero onívoro e de habitat noturno, o lobo guará apresenta uma pelagem de cor avermelhada, patas finas e grandes. O animal é considerado o maior canídeo da América do Sul, com um tamanho variando de 95 a 120 cm de comprimento e ficando entre 20 a 35 kg.";
    }
    else if (indicePrincipais == 2) {
        secPrincipais.style.backgroundImage = "url(imagens/animais_principais/capivara.jpg)";
        animalNome.innerHTML = "capivara";
        textoPrincipais.innerHTML = "Conhecidas por serem o maior roedor do mundo, as capivaras são mamíferos semi-aquáticos, sendo ótimas nadadoras. Seu porte é de aproximadamente 1,2 a 1,5 metros com um peso de 20 a 80 kg, variando da idade do animal que possui uma expectativa de vida de 15 anos.";
    }
    else if (indicePrincipais == 3) {
        secPrincipais.style.backgroundImage = "url(imagens/animais_principais/arara_azul.jpg)";
        animalNome.innerHTML = "arara-azul";
        textoPrincipais.innerHTML = "Com um bico extremamente forte e uma pelagem azulada, a arara azul é a maior espécie conhecida da família Psittacidae. O animal monogâmico pode atingir até cerca de 1 metro de comprimento do bico até a cauda e seu peso variando de 1,2 a 1,7 kg. Atualmente, a arara azul se encontra vulnerável a extinção, devido a captura e comércio ilegal dessa espécie.";
    }
    else if (indicePrincipais == 4) {
        secPrincipais.style.backgroundImage = "url(imagens/animais_principais/anta.jpg)";
        animalNome.innerHTML = "anta";
        textoPrincipais.innerHTML = "Sendo o maior mamífero terrestre da América do Sul, a anta é um animal herbívoro que é conhecida pela sua inteligência, com uma grande concentração de neurônios. Esse mamífero pode chegar até 2 metros de comprimento e pesar de 150 a 320 kg.";
    }
    else if (indicePrincipais == 5) {
        secPrincipais.style.backgroundImage = "url(imagens/animais_principais/boto.jpg)";
        animalNome.innerHTML = "boto-cor-de-rosa";
        textoPrincipais.innerHTML = "Sendo um dos animais marinhos com o corpo mais flexível, o boto é conhecido também por sua ótima visão e sua alimentação carnívora. O animal pode ter 2,2 a 2,5 metros de comprimento e pesar de 39 a 130 kg de acordo com sua idade.";
    }
    else if (indicePrincipais == 6) {
        secPrincipais.style.backgroundImage = "url(imagens/animais_principais/macaco_prego.jpg)";
        animalNome.innerHTML = "macaco-prego";
        textoPrincipais.innerHTML = "Conhecido pela sua pelagem castanha escura e pelos por quase todo o corpo, se alimentam de frutos e insetos, também possuem uma expectativa de vida de aproximadamente 35 a 40 anos. Essa espécie mede em média 45 cm de comprimento, pesando entre 1,3 a 5,0 kg.";
    }
    else if (indicePrincipais == 7) {
        secPrincipais.style.backgroundImage = "url(imagens/animais_principais/tucano.jpg)";
        animalNome.innerHTML = "tucano";
        textoPrincipais.innerHTML = "Sendo uma das aves mais famosas da Amazônia, o tucano possui a marcante característica da sua pelagem negra e seu grande bico laranja com uma mancha preta na ponta. Se alimenta de frutas, ovos e insetos e vive aproximadamente de 15 a 20 anos. A ave possui cerca de 50 a 60 cm de comprimento e pesa aproximadamente 540 gramas.";
    }

}

setaEsquerda.addEventListener("click", function() {
    indicePrincipais--;
    if(indicePrincipais < indiceMin) {
        indicePrincipais = indiceMax;
    }
    animaisPrincipais(indicePrincipais);
});

setaDireita.addEventListener("click", function() {
    indicePrincipais++;
    if(indicePrincipais > indiceMax) {
        indicePrincipais = indiceMin;
    }
    animaisPrincipais(indicePrincipais);
});