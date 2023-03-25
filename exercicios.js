// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
  altura = Number(prompt("Qual a altura do retangulo?"))
  largura = Number(prompt("Qual a largura do retangulo?"))
  const area = altura * largura
  console.log(area)
}
calculaAreaRetangulo()



// EXERCÍCIO 02
function imprimeIdade(anoAtual, anonasc) {
  // implemente sua lógica aqui
  anoAtual = Number(prompt("Qual o ano atual?"))
  anonasc = Number(prompt("Qual seu ano de nascimento?"))
  const idade = anoAtual - anonasc
  console.log(idade)

}
imprimeIdade()

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  peso = Number(prompt("Qual seu peso atual?"))
  altura = Number(prompt("Qual sua altura?"))
  const imc = (peso / (altura ** 2))
  return imc.toFixed(1)
}
calculaIMC()
// EXERCÍCIO 04
function imprimeInformacoesUsuario(nome, idade, email) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  nome = prompt("Qual seu nome?")
  idade = prompt("Qual sua idade?")
  email = prompt("Digite seu e-mail: ")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}
imprimeInformacoesUsuario()

// EXERCÍCIO 05
function imprimeTresCoresFavoritas(cor1, cor2, cor3) {
  // implemente sua lógica aqui
  cor1 = prompt("Qual sua primeira cor favorita?")
  cor2 = prompt("E a segunda?")
  cor3 = prompt("E a terceira?")
  coresFavoritas = [cor1, cor2, cor3]
  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  string = prompt("Digite uma string: ")
  return string.toUpperCase()
}
retornaStringEmMaiuscula()
// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  custo = Number(prompt("Qual o custo?"))
  valorIngresso = Number(prompt("Qual o valor do ingresso?"))
  calculo = custo / valorIngresso
  return calculo
}
calculaIngressosEspetaculo()

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  string1 = prompt("Primeira string:")
  string2 = prompt("Segunda string:")
  const tamanho = string1.length == string2.length
  return tamanho
}
checaStringsMesmoTamanho()

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  array = [1, 5, 7]
  return array[0]
}
console.log(retornaPrimeiroElemento())
// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  array = [1, 2, 3, 4, 5]
  return array[4]
}
console.log(retornaUltimoElemento())

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  array=["teste","porta","batata"]
  const arrayCopy=[...array]
  arrayCopy[0]=array[2]
  arrayCopy[2]=array[0]
return arrayCopy
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  string1 = prompt("Digite a primeira à comparar:")
  string2 = prompt("Digite a segunda à comparar:")
  const compar = string1.toUpperCase() == string2.toUpperCase()
  return compar
}
checaIgualdadeDesconsiderandoCase()

// EXERCÍCIO 13
function checaRenovacaoRG(anoAtual, anonasc, emitida) {
  // implemente sua lógica aqui
  anoAtual = Number(prompt("Qual o ano atual?"))
  anonasc = Number(prompt("Qual o ano do seu nascimento?"))
  emitida = Number(prompt("Ano de emissão do RG:"))
  const idade = anoAtual - anonasc
  const tempoRG = anoAtual - emitida

  const vencimento = (idade <= 20 && tempoRG >= 5) || (idade > 20 && idade <= 50 && tempoRG >= 10) || (idade > 50 && tempoRG >= 15)
  console.log(vencimento)
}
checaRenovacaoRG()

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  ano = Number(prompt("Qual o ano à verificar?"))
  const biss = (ano % 400 == 0) || (ano % 4 == 0 && !(ano % 100 == 0 && ano % 400 != 0))

  return biss
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu(maior, compl, dispo) {
  // implemente sua lógica aqui
  maior = prompt("Possui idade maior ou igual à 18 anos?")
  compl = prompt("Ensino médio completo?")
  dispo = prompt("Possui disponibilidade exclusiva durante os horários do curso?")
  const validade = (maior == "sim") && (compl == "sim") && (dispo == "sim")
  console.log(validade)
}
checaValidadeInscricaoLabenu()