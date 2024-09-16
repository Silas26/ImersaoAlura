
const campoPesquisa = document.getElementById("campo-pesquisa");
const sectionResultados = document.getElementById("resultados-pesquisa");

// Adiciona o event listener para o evento 'keypress'
campoPesquisa.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Impede o comportamento padrão (quebrar a linha)
        pesquisar(); // Chama a função de pesquisa
    }
});
function pesquisar() {
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value;
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada Foi Encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let nome = "";

    for (let dado of jogadores) {
      nome = dado.nome.toLowerCase()

      if (nome.includes(campoPesquisa)){
        //       
    resultados += `
    <div class="item-resultado">
                <h2>
                <a href="" target="_blank">${dado.nome}</a>
                </h2>
                <p class="descriçao-meta">
                <img src='${dado.image}'>
                <p><strong>Posição: </strong>${dado.posicao}</p>
                <p><strong>Data de Nascimento: </strong>${dado.dataNascimento}</p>
                <p><strong>Altura: </strong>${dado.altura}</p>
                <p><strong>Numero da Camisa: </strong>${dado.numeroCamisa}</p>
                <p><strong>Pé preferencial: </strong>${dado.pePreferencial}</p>
                <p><strong>Idade: </strong>${dado.idade}</p>
                <p><strong>Clube: </strong>${dado.clube}</p>
                <p><strong>Valor de Mercado: </strong>${dado.valorMercado}</p>
                
                <p>
                    <a href="${dado.link}" target="_blank">Mais Informações</a>
                </p>
                </div>
    `
  }
  
  if (!resultados) {
  
    resultados = "<p>Esse resultado não existe</p>"

}   

section.innerHTML = resultados
    }
  }

