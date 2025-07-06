$(document).ready(function() {
    // Função para gerar uma nova bexiga em uma posição aleatória e com uma cor aleatória
    function gerarBexiga() {
        const cores = ['red', 'blue', 'green', 'white', 'pink', 'gray','violet', 'purple']; // Lista de cores disponíveis
        const corAleatoria = cores[Math.floor(Math.random() * cores.length)]; // Escolhe uma cor aleatória
        const posicaoX = Math.random() * ($(window).width() - 100); // Calcula uma posição X aleatória dentro da janela
        const posicaoY = Math.random() * ($(window).height() - 150); // Calcula uma posição Y aleatória dentro da janela

        // Aplica as novas configurações de cor e posição na bexiga
        $('#bexiga').css({
            width: 100, // Define a largura da bexiga
            backgroundColor: corAleatoria, // Define a cor
            left: posicaoX, // Define a posição horizontal
            top: posicaoY // Define a posição vertical
        });
    }

    // Evento de clique na bexiga
    $('#bexiga').on('click', function() {
        $(this).css('transform', 'scale(5)'); // Faz a bexiga "estourar" (explode na tela scale 10)
        
        setTimeout(function() {
            $('#bexiga').css('transform', 'scale(0.8)'); // Faz a bexiga reaparecer
            gerarBexiga(); // Gera uma nova bexiga em outra posição
        }, 300); // Tempo da animação de estouro antes de reaparecer
    });

    gerarBexiga(); // Inicializa a primeira bexiga na tela
});
