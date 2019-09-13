
//hacer un triangulo reverso
var contendor = document.getElementById('div');
var input = document.querySelector('input[name="texto"]');
var calcular = document.getElementById('btn');




function triangulo (e){
	var i = 0;
	var repetidor = 0;
	let texto = input.value;
	var numero = Number(texto);

	var ul = document.createElement('ul');
	
	if(numero <= 30){
	
		for (i = numero; i >= 1 ; --i) {

		var li = document.createElement('li');

			for(repetidor = i; repetidor >= 1; --repetidor){

			li.textContent += i;

			}
			
		ul.appendChild(li);

		}

	}else{
		ul.innerHTML = 'Numero Invalido';
	}
	contendor.appendChild(ul);
}
calcular.addEventListener('click', triangulo);	