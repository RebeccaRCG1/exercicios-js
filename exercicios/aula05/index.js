// ========================================
// Aula 05 — Fundamentos de JavaScript
// ========================================
// Implemente cada função abaixo.
// Rode os testes com: npx vitest run exercicios/aula05
// Não mexa no arquivo index.test.js.

// Exercício 1 — classificarIdade
export function classificarIdade(idade) {

  if (idade >= 18)        
    return "adulto"           
  else if (idade >= 12)                 
    return "adolescente"
  else 
    return "criança"
}

// Exercício 2 — calcularDesconto
export function calcularDesconto(preco, percentual) {
  return preco - (percentual * preco/100)
}

// Exercício 3 — verificarAprovacao
export function verificarAprovacao(nota) {

  if (nota >= 60)        
    return "aprovado"           
  else if (nota >= 40)                 
    return "recuperação"
  else 
    return "reprovado"
}

// Exercício 4 — somarPares
export function somarPares(numeros) {
  let soma = 0;
  for(const n of numeros){
    if (n % 2 == 0) soma += n;
  }
  return soma;
}

// Exercício 5 — contarLetra
export function contarLetra(texto, letra) {
  let contador = 0;
for (const caractere of texto){
  if (caractere === letra) contador++;
}
return contador;
}
