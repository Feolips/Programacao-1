// Métodos auxiliares
digitar = require("prompt-sync")();	// Para entrada de dados
console.clear();					// Para limpar a tela

// Lista de Afazeres
let lista = [] //'nome 1', 'nome 2'

// Cabeçalho e Rodapé
function cabeçalho(){
	console.clear();
	console.log('');
	console.log("              LISTA DE AFAZERES");
	console.log('');
}
function rodapé(){
	console.log('');
	console.log(' A: Adicionar   R: Remover   S: Sair');
}

// Função Listar Afazeres
function listar(){
	if (lista.length == 0){
	console.log('              ..lista vazia..')
} else {
	for (i in lista){
		console.log(' ' + `${parseInt(i)+ 1}` + ': ' + lista[i])}
	}
}
// Função Adicionar item à lista
function adicione(){
	let adicionado = lista.push(digitar("Adicione o novo item: ").toString());
	console.log('Item adicionado (Z para Desfazer)');
}
// Função Desfazer ultima adição

// Função Remover item da lista
function remova(){
	let i = parseInt(digitar("Escolha o item a remover: "));
	j = i - 1;
	lista.splice(j,1);
	console.log('Item ' + i + ' removido (Z para Desfazer))');
}
// Função Desfazer ultima remoção 

// Programa principal
function programa(){
	var menuAtual = 0;
	cabeçalho();
	listar();
	rodapé();
	var opção = digitar('Opção: ').toString().toLowerCase();
	if (opção == 'a'){
		menuAtual = 1;
		cabeçalho();
		adicione();
		programa();	// Voltar ao programa principal
	}
	else if (opção == 'r'){
		menuAtual = 1
		cabeçalho();
		remova();
		programa();	// Voltar ao programa principal
	}
	else if (opção == 's'){
		if (menuAtual > 0){
			programa();
		} else {console.clear(); return}
	} else {programa()}	// Caso opção inválida, retorna ao programa principal
}


// Iniciar o programa principal
programa();






