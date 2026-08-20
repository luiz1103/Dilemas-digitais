/**
 * Função responsável por filtrar os dilemas digitais (Problemas e Soluções)
 * Adiciona animações suaves de transição ao ocultar ou exibir os cards.
 * @param {string} categoria - A categoria escolhida ('todos', 'problema' ou 'solucao')
 */
function filtrarConteudo(categoria) {
    // Seleciona todos os cards da página
    const cards = document.querySelectorAll('.card-dilema');

    cards.forEach(card => {
        // Verifica se o card pertence à categoria selecionada ou se 'todos' foi clicado
        const deveMostrar = categoria === 'todos' || card.classList.contains(categoria);

        if (deveMostrar) {
            // 1. Garante que o elemento volte a existir na estrutura da página
            card.style.display = 'flex';
            
            // 2. Pequeno delay para o navegador processar o display antes de rodar a animação
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
            }, 50);
        } else {
            // 3. Inicia o efeito de sumir (fade-out e diminuição de tamanho)
            card.style.opacity = '0';
            card.style.transform = 'scale(0.9)';
            
            // 4. Aguarda o fim da animação do CSS (300ms) para de fato esconder o bloco
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Garante que todos os cards comecem visíveis e com as propriedades de transição configuradas
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card-dilema');
    cards.forEach(card => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
    });
});
