var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');
    btnSubmit = document.getElementById('btn-submit');
    palabraNueva= document.getElementById("palabraNueva");    

btnAbrirPopup.addEventListener('click', function(){
	overlay.classList.add('active');
	popup.classList.add('active');
    document.getElementById("palabraNueva").focus();
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

btnSubmit.addEventListener('click', function(e){
    e.preventDefault();
    overlay.classList.remove('active');
    popup.classList.remove('active');
    
    if(palabraNueva.value.length === 0 || palabraNueva.value.trim().length === 0){
        alert("Ingrese una palabra");
        return;
    }else{
        if(palabraNueva.value.length <= 8){
            let palabraAgregada = palabraNueva.value;
            palabraAgregada.value = palabraAgregada.toUpperCase();
            palabras.push(palabraAgregada.toUpperCase());
            palabraNueva.value = "";                        
        }else{
            palabraNueva.value = "";            
        }
    }
});