let primeiroNumero = Number(prompt("Digite o primeiro numero"));
let segundoNumero = Number(prompt("Digite o segundo numero"));
let adStr = 'adição';
let subStr = 'substração';
let multStr = 'multiplicação';
let divStr = 'divisão';

// Evitando Sensitive case.
let AdStr = 'Adição';
let SubStr = 'Substração';
let MultStr = 'Multiplicação';
let DivStr = 'Divisão';

// Variável de seleção
let selecaoStr = prompt("Qual operação quer fazer com os numeros digitados " + AdStr + ", " + SubStr + ", " + MultStr + " ou " + DivStr + "?");

//Condições para seleção de operação Matematica

//Adição
if (selecaoStr == adStr || selecaoStr == AdStr) {
  console.log("Adição " + (primeiroNumero + segundoNumero));
  Number(alert("O resultado da soma dos numeros digitados é " + (primeiroNumero + segundoNumero)));
}
//Substração
else if (selecaoStr == subStr || selecaoStr == SubStr) {
  console.log("Substração " + (primeiroNumero - segundoNumero));
  Number(alert("O resultado da substração dos numeros digitados é " + (primeiroNumero - segundoNumero)));
}

//Multiplicação
else if (selecaoStr == multStr || selecaoStr == MultStr) {
  console.log("Multiplicação " + (primeiroNumero * segundoNumero));
  Number(alert("O resultado da multiplicação dos numeros digitados é " + (primeiroNumero * segundoNumero)));
}
//Divisão
else if (selecaoStr == divStr || selecaoStr == DivStr) {
  console.log("Divisão: " + (primeiroNumero / segundoNumero));
  Number(alert("O resultado da divisão dos numeros digitados é " + (primeiroNumero / segundoNumero)));
}

/*O usuario não selecionou 
uma operação matemática */
else {
  console.log("Erro 0x0001: Se esperava uma operação matemática");
  alert("Erro 0x0001: Se esperava uma operação matemática");
  alert("Obrigado por usar a maquina de cálculo aritmetico");
}

