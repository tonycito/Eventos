var contenedor = document.getElementById('div');
var input = document.querySelector('input[name="texto"]');
var mostrar = document.getElementById('btn');

	

function notas (e){
	var numero = input.value;
		nota = Number(numero);
	
	var mensaje = document.createElement('li');

	if( nota >= 1 && nota < 3 ){

		mensaje.innerHTML = nota + " - Muy Deficiente";
		
	} 
	else if (nota >= 3 && nota < 5){
		
		mensaje.innerHTML = nota + " - Insuficiente";
		
	}
	else if (nota >= 5 && nota < 6){
		
		mensaje.innerHTML = nota + " - Suficiente";
		
	}
	else if (nota >= 6 && nota < 7 ){
		
		mensaje.innerHTML = nota + " - Bien";
		
	}
	else if (nota >= 7 && nota <9 ){
		
		mensaje.innerHTML = nota + " - Notable";
	}
	else if(nota >= 9 && nota == 10){

		mensaje.innerHTML = nota + " - Sobresaliente";
	}
	else if(input.value == ""){

		mensaje.innerHTML = "Nota esta vacia";
	}
	else{
		
		mensaje.innerHTML = "Ingrese una nota válida ";
	}

contenedor.appendChild(mensaje);
}

mostrar.addEventListener('click', notas);


