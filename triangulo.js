//crear triangulo segun el numero ingresado con un limite de 30

//declaracion de variables
	var contenedor = document.getElementById('div');
	var input = document.querySelector('input[name="texto"]');
	var calcular = document.getElementById('btn');

//resolver el problema
function calcularTriangulo(e){
	var i = 0; 
	var repetidor = 0;
	var texto = input.value;
	var	num = Number(texto);
	
	var ul = document.createElement('ul');

		if (num <= 30){

			for (i = 1; i <= num; i++) {
			
			var li = document.createElement('li');
				
				for(repetidor = 0; repetidor <= i -1; repetidor++ ){
				
				li.textContent += i;
				
				}

				ul.appendChild(li);

			}
			
		}else{
			ul.innerHTML = 'Numero Inválido';
		}
		contenedor.appendChild(ul);
}

calcular.addEventListener('click', calcularTriangulo);