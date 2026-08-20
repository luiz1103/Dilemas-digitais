// Função para filtrar os dilemas digitais no site
function filtrarConteudo(categoria) {
    // Seleciona todos os cards de conteúdo do HTML
    const cards = document.querySelectorAll('.card-dilema');

    cards.forEach(card => {
        // Se clicar em 'todos', mostra tudo. Se não, compara com a categoria do card
        if (categoria === 'todos' || card.classList.contains(categoria)) {
            card.style.display = 'block'; // Mostra o card
        } else {
            card.style.display = 'none';  // Esconde o card
        }
    });
}
