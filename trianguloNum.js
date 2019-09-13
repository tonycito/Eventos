
var contenedor = document.getElementById('div');
var input = document.querySelector('input[name="texto"]');
var calcular = document.getElementById('btn');

function triangulo (e){

	let texto = input.value;
	var numero = Number(texto);
	var i = 0;
	var repetidor = 0;
	var ul = document.createElement('ul');
//debugger;
	if (numero <= 30){

		for(i = 1; i <= numero; i++){

		var li = document.createElement('li');

			for(repetidor = 1; repetidor <= i; repetidor++){
				
				li.textContent += repetidor; 
			}
			ul.appendChild(li);
		}


	}else{
		ul.innerHTML = 'Numero fuera de Rango';
	}

	contenedor.appendChild(ul);

}
calcular.addEventListener('click', triangulo);