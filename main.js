/*
    Aula 02: Array e Dicionário
*/
/*
//tipagem dinamica
var nome = "Cléber Bezerra";
var idade = 45;
var num1 = "22";
var num2 = "11";
var frase = "Japão é o melhor time do mundo!!!";
alert("Bem vindo, " + nome + " vc tem: " + idade + " anos!!!");
//alert(num1 + num2);
console.log(nome);
console.log(idade);
console.log(frase.replace("Japão", "Sport Club do Recife").toUpperCase());
console.log(frase.toLowerCase().replace("melhor", "segundo"));
var lista = ["maça","pêra","laranja"];
lista.push("uva","abacate","banana");
lista.pop();
console.log(lista);
console.log(lista[3]);
console.log(lista.reverse());
console.log(lista.pop());
console.log(lista.toString());
console.log(lista.toString()[5]);
console.log(lista.toString()[1],lista.toString()[3]);
console.log(lista.join(", "));
var aluno = {nome:"Cleber",sobreNome:"Bezerra",idade:"45"}
console.log(aluno.nome,aluno.sobreNome,aluno.idade);
var cursos = [{nome:"Java",duracao:"2h30"},{nome:"PHP",duracao:"1h45"},{nome:"Python",duracao:"3h45"}]
console.log("O curso de " + cursos[2].nome + " tem duração de " + cursos[2].duracao);
//alert(cursos[2].nome);
//*/

/*
    Aula 03: Condicionais, Laços de repetição e Date
*/
/*
// Condicional com prompt(pergunta a idade)
var idade = prompt("Qual a sua idade?");
if(idade >= 18){
    alert("Maior de idade!");
}else{
    alert("Menor de idade!!");
};
*/
/*
// Estrutura de repetição 'while'
var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count++;
};
*/
/*
// Repetição com 'for'
var count;
for(count=0; count<=5; count++){
    alert(count);
};
*/
/*
// Date - exibindo a data, horas, etc
var d = new Date();
alert(d); //data completa
alert(d.getDate()); //só dia
alert(d.getDay());
*/
/*
Parte 2 - Vídeo 1
 Funções
*/
/*
// Operação matemática entre 2 números
function operacao(n1, n2){
    return (n1 + n2) * n2;
}
alert(operacao(5,10))
*/
/*
// Troca os nomes
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Japão!!!", "Japão", "Sport Club do Recife"));
*/
/*
// Verifica se é maior ou menor de idade
function validaIdade(idade){
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}
var idade = prompt("Qual a sua idade?");
validaIdade(idade)
console.log(validar);
*/
///*
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>OBRIGADO</b> por clicar!!!";
    //console.log(document.getElementById("agradecimento"));
    //alert("Obg por clicar!!!")
}
//*/
///*
function redirecionar(){
    // abre em uma nova aba
    //window.open("https://web.digitalinnovation.one/home");
    // abre na mesma aba
    //window.location.href = "https://web.digitalinnovation.one/home";
    
}
//*/
///*
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!!!"
    //alert("Trocar texto!!!");
    elemento.innerHTML = "Obrigado por passar o mouse!!!";
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passar o mouse > AQUI!!!";
    elemento.innerHTML = "Passar o mouse > AQUI!!!";
}
function load(){
    alert("Página carregada!!!");
}
function funcaoChange(elemento){
    console.log(elemento.value)
}
//*/