/**
 * Função para girar individualmente o card (Efeito Flip 3D) ao clicar.
 * @param {HTMLElement} card - O elemento do card que foi clicado.
 */
function girarCard(card) {
    // Liga ou desliga a classe 'girado' que executa a rotação CSS de 180 graus
    card.classList.toggle('girado');
}

/**
 * Função para filtrar os dilemas digitais com base nos botões.
 * Além de esconder/mostrar, ela vira o card automaticamente para o lado certo.
 * @param {string} categoria - A categoria escolhida ('todos', 'problema' ou 'solucao')
 */
function filtrarConteudo(categoria) {
    const cards = document.querySelectorAll('.card-dilema');

    cards.forEach(card => {
        // Como o card agora contém AMBOS (problema e solução), ele sempre deve aparecer
        // A filtragem inteligente agora controla qual LADO do card fica virado para o usuário
        
        if (categoria === 'todos') {
            // Mostra o card e desvira para o lado inicial (Problema/Frente)
            card.style.display = 'block';
            card.classList.remove('girado');
            
            setTimeout(() => { card.style.opacity = '1'; }, 50);
            
        } else if (categoria === 'problema') {
            // Mostra o card e garante que ele exiba o lado da Frente (Problema)
            card.style.display = 'block';
            card.classList.remove('girado'); // remove o giro para mostrar a frente
            
            setTimeout(() => { card.style.opacity = '1'; }, 50);
            
        } else if (categoria === 'solucao') {
            // Mostra o card e força ele a girar para exibir o Verso (Solução)
            card.style.display = 'block';
            card.classList.add('girado'); // adiciona o giro para mostrar o verso
            
            setTimeout(() => { card.style.opacity = '1'; }, 50);
        }
    });
}

// Inicialização assim que a página carrega por completo
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card-dilema');
    cards.forEach(card => {
        // Injeta as transições de opacidade de forma limpa
        card.style.transition = 'opacity 0.4s ease';
        card.style.opacity = '1';
    });
});
