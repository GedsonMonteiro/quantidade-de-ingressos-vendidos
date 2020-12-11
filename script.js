var normal;
var num1;
var ingresso1;
var publico1;

var estudante;
var num2;
var ingresso2;
var publico2;

var acessivel;
var num3;
var ingresso3;
var publico3;

var total;
var total2;

normal = parseFloat(prompt('Digite o preço do Ingresso do tipo Normal')
);
console.log('Preço do Ingresso do tipo Normal (R$)');
console.log(normal);

num1 = parseFloat(prompt('Digite o total de ingresso do tipo Normal que foram vendidos'));
console.log('Quantidade de ingressos do tipo Normal vendidos');
console.log(num1);

ingresso1 = Number(normal*num1);

console.log('Lucro dos Ingressos do tipo Normal (R$)');
console.log(ingresso1);

publico1 = (num1);
console.log('Total do Publico (ingresso Normal)');
console.log(num1);

alert (publico1 + ' pessoas. ' + ' Lucro de R$' + ingresso1 + ' reais');


estudante = parseFloat(prompt('Digite o preço do Ingresso do tipo Estudante')
);
console.log('Preço do Ingresso do tipo Estudante (R$)');
console.log(estudante);

num2 = parseFloat(prompt('Digite o total de ingresso do tipo Estudante que foram vendidos'));
console.log('Quantidade de ingressos do tipo Estudante vendidos');
console.log(num2);

ingresso2 = Number(estudante*num2);

console.log('Lucro dos Ingressos do tipo Estudante (R$)');
console.log(ingresso2);

publico2 = (num2);
console.log('Total do Publico (ingresso Estudante)');
console.log(num2);

alert (publico2 + ' pessoas. ' + ' Lucro de R$' + ingresso2 + ' reais');


acessivel = parseFloat(prompt('Digite o preço do Ingresso do tipo Acessível')
);
console.log('Preço do Ingresso do tipo Acessível (R$)');
console.log(acessivel);

num3 = parseFloat(prompt('Digite o total de ingresso do tipo Acessível que foram vendidos'));
console.log('Quantidade de ingressos do tipo Acessível vendidos');
console.log(num3);

ingresso3 = Number(acessivel*num3);

console.log('Lucro dos Ingressos do tipo Acessível (R$)');
console.log(ingresso3);

publico3 = (num3);
console.log('Total do Publico (ingresso Acessível)');
console.log(num3);

alert (publico3 + ' pessoas. ' + ' Lucro de R$' + ingresso3 + ' reais');


total1 = Number(publico1 + publico2 + publico3);

total2 = Number(ingresso1 + ingresso2 + ingresso3);

console.log('Público de', total1 + ' pessoas e R$', total2, ' reais arrecadados');
alert ('Público de ' + total1 + ' pessoas e R$' + total2 + ' reais arrecadados');