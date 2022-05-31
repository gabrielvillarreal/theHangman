var iniciarPartida = document.querySelector("#iniciarPartida");
var rightWordsBox = document.querySelector("#right-words-box");
var dejarPartida = document.querySelector("#dejarPartida");
var nuevaPartida = document.querySelector("#nuevaPartida");

dejarPartida.addEventListener("click", function(){
    visibilidadObjeto("iniciarPartida",true);
    visibilidadObjeto("btn-abrir-popup",true);
    visibilidadObjeto("nuevaPartida",false);
    visibilidadObjeto("dejarPartida",false);
    visibilidadObjeto("globo",false);
    visibilidadObjeto("titulo",true);
    visibilidadObjeto("letra",false);
    document.getElementById("horca").src="../img/horca0.png";
    finalizarJuego();
});

nuevaPartida.addEventListener("click", function(){
    finalizarJuego();
    document.getElementById("horca").src="../img/horca0.png";
    removerGuiones();
    empezarJuego();
    underscores = document.querySelectorAll(".underscore");
});


iniciarPartida.addEventListener("click", function () {    
    visibilidadObjeto("iniciarPartida",false);
    visibilidadObjeto("btn-abrir-popup",false);
    visibilidadObjeto("nuevaPartida",true);
    visibilidadObjeto("dejarPartida",true);
    visibilidadObjeto("globo",true);
    visibilidadObjeto("titulo",false);
    visibilidadObjeto("letra",true);
    visibilidadObjeto("botoneraJuego",true);
    document.getElementById("horca").src="../img/horca0.png";
    empezarJuego();
    underscores = document.querySelectorAll(".underscore");    
});

function visibilidadObjeto(nombreObjeto, esVisible){
    if(esVisible){
        document.getElementById(nombreObjeto).style.display="block";
    }else{
        document.getElementById(nombreObjeto).style.display="none";
    }
}
