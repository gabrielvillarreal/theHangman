var palabras =["PANTALLA", "GRABADOR","CAPA","ESPIRAL","VESTIDO","PIJAMA","DESPEGAR", "PERRO","CAMELLO","JURADO","CUERDA","MISTERIO","FRONTERA","POPULAR","GUITARRA","INFIERNO","AMOR","AMAZONA","ESCUDO","GIMNASIO","TABACO","JUEGO","MINERO","MOSTAZA","TRABAJO"];
var nroAleatorio= Math.floor(Math.random() * palabras.length);
var palabraSecreta = palabras[nroAleatorio];

const contenedorPalabra = document.getElementById('contenedorPalabra');
const letrasUsadasElement = document.getElementById('letrasUsadas');
const wrongLetterBox = document.querySelector("#wrong-words-box")

let letraUsada;
let errores;
let aciertos;
let letter;

function finalizarJuego(){
    aciertos=0;
    errores=0;
    score=0;
    letraUsada = [];
    wrongLetters=[];
    gameOver=false;
    contenedorPalabra.innerHTML = '';
    letrasUsadasElement.innerHTML='';
    contenedorPalabra.textContent='';
    wrongLetterBox.textContent="";
    removerGuiones();
    document.removeEventListener('keydown', checkKey);
    document.getElementById("cuervo").textContent="Hola!! Teclee una letra por favor, le diré si Ud acierta o no";
}

function empezarJuego(){     
    nroAleatorio= Math.floor(Math.random() * palabras.length);
    palabraSecreta =palabras[nroAleatorio];
    aciertos=0;
    errores=0;
    score=0;    
    letterLeft = palabraSecreta.length;
    letraUsada = [];
    wrongLetters=[];
    gameOver=false;
    contenedorPalabra.innerHTML = '';
    letrasUsadasElement.innerHTML='';    
    dibujarGuiones();
    document.addEventListener('keydown', checkKey);
}

function checkKey(e){
    if(!gameOver){
        // comprobar que no haya perdido y que la tecla presionada sea una letra
        if(e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode == 192){
            letter = (e.key).toUpperCase();
            checkLetter()
        }
    }
}

function dibujarGuiones(){
    for(var i = 0; i < palabraSecreta.length; i++){
        let div = document.createElement("div")
        div.classList.add("underscore")
        div.classList.add("flex-col-center")
        rightWordsBox.appendChild(div)
    }
}
function removerGuiones(){
    const elementos = document.getElementsByClassName("underscore flex-col-center");
    while(elementos.length > 0){
        elementos[0].parentNode.removeChild(elementos[0]);
    }
}

function checkLetter(){
    if(!letraUsada.includes(letter)){
        searchBegin = 0
        index = palabraSecreta.indexOf(letter, searchBegin)
        if(index != -1){
            letraUsada.push(letter)
            while(index != -1){
                letterLeft--
                underscores[index].textContent = letter
                searchBegin = index +1
                index = palabraSecreta.indexOf(letter, searchBegin)
                document.getElementById("cuervo").textContent="GENIAL! ACERTASTE LA LETRA " + letter + ". SIGUE ASI!!!"
            }
        }else{
            letraUsada.push(letter)
            wrongLetters.push(letter)
            wrongLetterBox.textContent = wrongLetters.join(' ')
            score++
            document.getElementById("cuervo").textContent="LE ERRASTE! LA LETRA " + letter + " NO ESTA!. TIENES " + (9 - score) + " INTENTOS"
            dibujaAhorcado(score);
        }
        gano()
    }else{
        document.getElementById("cuervo").textContent="LA LETRA " + letter + " YA FUE INGRESADA. TECLEA OTRA";
    }
}

function dibujaAhorcado(score){
    horca = document.getElementById("horca").src="./img/horca"+ score + ".png"; 
}

function gano(){
    if(letterLeft == 0){       
        Swal.fire({
            title: 'GANASTE!!!',
            text: 'Adivinaste la palabra secreta',
            icon: 'success',            
            confirmButtonText: 'Genial!'
          })
        document.getElementById("cuervo").textContent="GANASTE!! TE QUEDABAN " + (9-score) + " INTENTOS TODAVIA!"
        gameOver = true;
        finalizarJuego();

    } else if (score == 9){
        Swal.fire({
            title: 'Perdiste!',
            text: 'No lograste adivinar, la palabra secreta era ' + palabraSecreta,
            icon: 'error',
            showDenyButton: true,
            showConfirmButton: false,
            denyButtonText: 'No te preocupes'
          })
        document.getElementById("cuervo").textContent="PERDISTE!! LA PALABRA SECRETA ERA " + palabraSecreta;
        gameOver = true;
        finalizarJuego();
    }    
}

function checkEntrada(evt) {
    var charCode = evt.charCode;
    if (charCode != 0) {
      if (charCode < 97 || charCode > 122) {
        if (charCode != 32) evt.preventDefault();
      }
    }
  }

  