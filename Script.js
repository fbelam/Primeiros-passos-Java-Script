conferirPalpite();

var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

var palpites = document.querySelector(".palpites");
var ultimoResultado = document.querySelector (".ultimoResultado");
var baixoOuAlto = document.querySelector(".baixoOuAlto");

var envioPalpite = document.querySelector(".envioPalpite");
var campoPalpite = document.querySelector(".campoPalpite");

var contagemPalpites = 1;
var botaoReinicio;

var nome = "Bingo";
nome;
var ola = "diz olá";
ola
var cumprimento = nome + ola;
cumprimento;

function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
      palpites.textContent = "Palpites anteriores: ";
    }
    palpites.textContent += palpiteUsuario + " ";
  
    if (palpiteUsuario === numeroAleatorio) {
      ultimoResultado.textContent = "Parabéns! Você acertou!";
      ultimoResultado.style.backgroundColor = "green";
      baixoOuAlto.textContent = "";
      configFimDeJogo();
    } else if (contagemPalpites === 10) {
      ultimoResultado.textContent = "!!!FIM DE JOGO!!!";
      baixoOuAlto.textContent = "";
      configFimDeJogo();
    } else {
      ultimoResultado.textContent = "Errado!";
      ultimoResultado.style.backgroundColor = "red";
      if (palpiteUsuario < numeroAleatorio) {
        baixoOuAlto.textContent = "Seu palpite está muito baixo!";
      } else if (palpiteUsuario > numeroAleatorio) {
        baixoOuAlto.textContent = "Seu palpite está muito alto!";
      }
    }
  
    contagemPalpites++;
    campoPalpite.value = "";
    campoPalpite.focus();
  }
  envioPalpite.addEventListener("click", conferirPalpite);

