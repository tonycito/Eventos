//creamos nuestras variables
var contenedor = document.getElementById('div');
var input = document.querySelector('input[name="texto"]');
var mostrar = document.getElementById('btn');

//creamos la funcion pasando como parametro (e);

function calcular (e){
	var inputText = input.value;
	inputNumber = Number(inputText);

	var ul = document.createElement('ul');
	ul.setAttribute('id','ul');


	for(var i = 1; i <= inputNumber; i++){

		var li = document.createElement('li');
		li.setAttribute('id', 'fila');
		li.innerHTML = '<span onclick = "eliminar(this)">X</span> ' +i;
		ul.appendChild(li);
		var label = document.createElement('label');
		label.setAttribute('id', 'tony');
		label.innerHTML = 'borraameeee!!'
		ul.appendChild(label);
	}



contenedor.appendChild(ul);
}

mostrar.addEventListener('click', calcular);



var limpiar = document.getElementById('btnLim');

//funcion limpiar
function limpiarInput(e){
	input.value = "";

	var ul = document.getElementById('ul');
	contenedor.removeChild(ul);
}

limpiar.addEventListener('click', limpiarInput);

//elimanar lista fila por fila
function eliminar(e){
	var fila = e.parentNode.getAttribute('id');
	node = document.getElementById(fila);
	node.parentNode.removeChild(node);

}


































