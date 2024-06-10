// Seleciona o contêiner onde os cards dos personagens serão exibidos.
const characterContainer = document.getElementById("characterContainer");

// Declara uma função assíncrona para buscar os personagens da API.
async function fetchCharacters(page = 1) {
  try {
    // Aguarda a resposta da API e armazena em uma variável.
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    // Aguarda a conversão da resposta para JSON.
    const data = await response.json();
    // Itera sobre os resultados e cria um card para cada personagem.
    for (const character of data.results) {
      // Busca o nome do primeiro episódio em que o personagem aparece.
      // A propriedade 'episode' é um array de URLs, então buscamos a primeira URL.
      const episodeResponse = await fetch(character.episode[0]);
      const episodeData = await episodeResponse.json();

      // Cria um novo elemento div para o card do personagem.
      const card = document.createElement("div");
      // Define a classe do card para estilização.
      card.className = "character_card";

      const statusClass = character.status.toLowerCase().replace(" ", "");
      // Define o conteúdo interno do card com as informações do personagem.
      card.innerHTML = `
        <div class="card">
            <figure class="container_card_foto">
                <img src="${character.image}" alt="Ícone do ${character.name}" class="card_foto">
            </figure>

            <div class="card_info">
                <div class="card_info_p1">
                    <h3 class="card_nome">${character.name}</h3>
                    <p class="card_status">
                        <span class="status-indicator ${statusClass}"></span>
                        ${character.status} -
                        <span class="card_especie">${character.species}</span>
                    </p>
                </div>

                <div class="card_info_p2">
                    <p class="location">Last known location:</p>
                    <h4 class="card_location">${character.location.name}</h4>
                </div>

                <div class="card_info_p3">
                    <p class="seen">First seen in the episode:</p>
                    <h4 class="card_ep_nome">${episodeData.name}</h4>
                </div>
            </div>
        </div>
      `;
      // Adiciona o card criado ao contêiner de personagens.
      characterContainer.appendChild(card);
    }
  } catch (error) {
    // Caso ocorra um erro na requisição, imprime o erro no console.
    console.error("Falha ao buscar personagens:", error);
  }
}

// Adiciona um ouvinte de evento que chama fetchCharacters quando a página é carregada.
document.addEventListener("DOMContentLoaded", () => fetchCharacters());

// Adiciona um ouvinte de evento de scroll na janela.
window.addEventListener('scroll', () => {
  // Verifica se o usuário chegou ao final da página.
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    // Chama a função para carregar mais personagens.
    loadMoreCharacters();
  }
});

// Declara uma variável para controlar a página atual.
let currentPage = 1;

// Modifica a função para carregar mais personagens.
async function loadMoreCharacters() {
  // Incrementa a página atual para buscar a próxima página de personagens.
  currentPage++;
  // Chama a função fetchCharacters para buscar e exibir os próximos personagens.
  await fetchCharacters(currentPage);
}

// Quando o usuário rolar para baixo 1000px do topo do documento, mostre o botão
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}

// Quando o usuário clicar no botão, role para o topo do documento
function topFunction() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}

