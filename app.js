const scrollDiv = document.querySelector('.scroll-div');

function checkScroll() {
    const contentHeight = scrollDiv.scrollHeight;
    const divHeight = scrollDiv.clientHeight;

    if (contentHeight > divHeight) {
        scrollDiv.classList.add('scrollable');
    } else {
        scrollDiv.classList.remove('scrollable');
    }
}

// Chame a função inicialmente e sempre que o conteúdo for atualizado
checkScroll();
let campoPesquisa = document.getElementById("campo-pesquisa");
let sectionResultados = document.getElementById("resultados-pesquisa");

campoPesquisa.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        pesquisar();
    }
});
function pesquisar() {
    let section = document.getElementById
        ("resultados-pesquisa");
    let campoPesquisa = document.getElementById
        ("campo-pesquisa").value;
    if (!campoPesquisa) {
        section.innerHTML = `<p class="notResult">Nada Foi Encontrado</p>`
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let nome = "";
    let posicao = "";

    for (let dado of jogadores) {
        nome = dado.nome.toLowerCase()
        posicao = dado.posicao.toLowerCase()

        if (nome.includes(campoPesquisa) || (posicao.includes(campoPesquisa))) {

            resultados += `
    <div class="item-resultado">
                <h2>
                <p>${dado.nome}</p>
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
            resultados = `<p class="notResult">
    Esse resultado não existe</p>`

        }

        section.innerHTML = resultados
    }
}

