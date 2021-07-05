// AskBank: Sistema de Gestão de Banco de Questões

// Este software é capaz de gerar e corrigir provas de Verdadeiro/Falso
// de 10 questões por disciplina com base em um array de banco de questões.
input = require("prompt-sync")();
console.clear();
var Questões = [];  // As questões serão armazenadas aqui
var Prova = [];     // A prova gerada será armazenada aqui

// --------FUNÇÕES DO MÓDULO PROFESSOR-------- //
 // Cadastro de nova questão no array/BD
 function cadastraQuestão(disciplina){
     questão = {disciplina}
 }
 // Lista todas as questões da disciplina escolhida
 function listaQuestão(disciplina){
     for (var i = 0; i < Questões.length; i++){
         console.log(Questões.disciplina[i])
        }
 }
 // Função para editar uma questão da disciplina escolhida
 function editaQuestão(){
     return questão
    }
    
 // Função para escolher quais questões devem entrar em cada prova gerada
 function escolheQuestão(){
    return ;
    }
       
 // Função de montagem de Prova com 10 questões da disciplina escolhida
 function geraProva(disciplina, montagem){
    while (montagem == "s"){
        for (var i = 0; i < 10; i++){
        return prova = escolheQuestão
        }
    }
 
// --------FUNÇÕES DO MÓDULO ALUNO-------- //

 function respondeProva(disciplina){

 }


/* A partir daqui é conteúdo antigo

// CADASTRO DE QUESTÕES
listaQuestoes = [
    {disciplina: "Matematica", professor: "Simeao", serie: "3", assunto: "Geometria Espacial", dificuldade: "1", enunciado: "Qual é o volume de um cubo de aresta 2?", alternativa: [1,8,12,5,7,14,22,50,21,100], resposta: ["F","V","F","F","F","F","F","F","F","F"]},
    {disciplina: "Matematica", professor: "Tammyris", serie: "1", assunto: "Geometria Plana", dificuldade: "1", enunciado: "Qual a área de um quadrado de lado 2?", alternativa: [1,4,12], resposta: ["F","V","F"]},
    {disciplina: "Historia", professor: "Joana", serie: "1", assunto: "Historia do Brasil", dificuldade: "1", enunciado: "Quem descobriu o Brasil", alternativa: ["Fausto Silva","Fernando Henrique Cardoso","Pedro Álvares Cabral", "Tammyris Carvalho", "Marcos Vinícius"], resposta: ["F","F","V","F","F"]}
]

//-------------------------------------------------------------------------------------------------------
// ELABORAÇÃO DA PROVA

// Seleção da disciplina
var nomeDisciplina = input("Digite o nome da disciplina da prova: ");

// // Especificação das características da questão
var serieDisciplina = input("Digite a série: ");
var assuntoDisciplina = input("Digite o assunto: ");
var dificuldadeDisciplina = input("Digite a dificuldade da questão: ");
var quantidadeAlternativas = input("Digite o número de opções na questão: ");

// // Busca das questões elegíveis + Sorteio de uma para ser utilizada 
var questoesElegiveis = [];
j=0;

for (i=0; i<=2; i++) {
    if ((listaQuestoes[i].disciplina == nomeDisciplina) && (listaQuestoes[i].serie == serieDisciplina) &&
    (listaQuestoes[i].assunto == assuntoDisciplina) && (listaQuestoes[i].dificuldade == dificuldadeDisciplina)) {
        questoesElegiveis[j]=listaQuestoes[i];
        j++;
    }
}

var pos = Math.floor(Math.random() * questoesElegiveis.length);
questaoSorteada = {
}
console.log(questaoSorteada);
var questaoSorteada = questoesElegiveis[pos];

// Sorteio das alternativas para a questão sorteada

// questaoProva = questaoSorteada.alternativa
var listaPosicoes =[];

qtdAlternativas = questaoSorteada.alternativa.length;
for (i=0; i<quantidadeAlternativas; i++){
    posOpcao = Math.floor(Math.random() * qtdAlternativas);
    listaPosicoes[i] = posOpcao;
}

//Resolvendo a repetição das alternativas no vetor das opções de resposta
while (listaPosicoes.indexOf(posOpcao)>=0){ //Se o indexof retorna negativo é porque o elemento não está presente, logo se é >=0 ele já se encontra.
    posOpcao = Math.floor(Math.random() * qtdAlternativas) //enquanto for elemento repetido ele faz novamente a randomização
}

questaoProva = {
    enunciado : "",
    alternativa : []
};

gabaritoQuestaoProva ={
    gabarito : []
}

questaoProva.enunciado = questaoSorteada.enunciado;
for (k=0; k<listaPosicoes.length; k++){
    questaoProva.alternativa[k] = questaoSorteada.alternativa[listaPosicoes[k]];
    gabaritoQuestaoProva.gabarito[k] = questaoSorteada.resposta[listaPosicoes[k]]
}
console.log(questaoProva);

//-------------------------------------------------------------------------------------------------------
//CORREÇÃO DA PROVA 

respostaProva = {
    resposta: []
}

for(k=0; k<listaPosicoes.length;k++){
    respostaProva.resposta[k] = input("Digite a resposta: ")
    if (respostaProva.resposta[k] == gabaritoQuestaoProva.gabarito[k]){
        console.log("Correto")
    }
    else {
        console.log("Incorreto")
    }
}




