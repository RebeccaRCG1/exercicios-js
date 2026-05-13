// ========================================
// Aula 07 — Async/Await e JSON
// ========================================
// Implemente cada função abaixo.
// Rode os testes com: npx vitest run exercicios/aula07
// Não mexa no arquivo index.test.js.

// Exercício 1 — objetoParaJSON
  export function criarSaudacao(nome) {
    return `Olá, ${nome}!`;
  }
}

// Exercício 2 — jsonParaObjeto
  export function filtrarAprovados(alunos) {
    return alunos.filterAprovados(alunos => alunos.nota >= 60);
  }

// Exercício 3 — clonarObjeto
  export function extrairNomes(alunos) {
    return alunos.map(aluno => aluno.nome);
  } 

// ──────────────────────────────────────────────────
// Função auxiliar — simula uma consulta ao banco que demora 100ms
// NÃO MEXA nesta função — ela já está pronta
// ──────────────────────────────────────────────────
function simularConsulta(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, nome: `Aluno ${id}`, cidade: 'Salinas' })
    }, 100)
  })
}

// Exercício 4 — buscarDados
export function buscarDados(alunos, nome) {
  return alunos.find(aluno => aluno.nome === nome);
  }


// Exercício 5 — dividirSeguro
export function calcularMedia(notas) {
  if (notas.length === 0) return 0;
  const soma = notas.reduce((total, n) => total + n, 0);
  return soma / notas.length;
}
