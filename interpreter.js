// Interpretador Web da linguagem Cant (.ca)
// Autor: Cant-Fundador Botiche

function executarCant(codigoFonte) {
    const linhas = codigoFonte.split('\n');
    let resultadoHTML = '';

    for (let i = 0; i < linhas.length; i++) {
        let linha = linhas.trim();
        if (linha === '') continue;

        // Expressão regular que aceita qualquer texto, números, símbolos e espaços dentro das aspas
        const matchPri = linha.match(/^pri\("(.*)"\)$/);

        if (matchPri) {
            // O que estiver dentro das aspas vai para a tela
            let textoParaMostrar = matchPri;
            resultadoHTML += `<p>${textoParaMostrar}</p>`;
        } else {
            resultadoHTML += `<p style="color: red;">Erro de sintaxe na linha ${i + 1}: Comando desconhecido.</p>`;
        }
    }

    return resultadoHTML;
}

// Função automática para rodar scripts Cant na página web
window.addEventListener('DOMContentLoaded', () => {
    const scriptsCant = document.querySelectorAll('script[type="text/cant"]');
    scriptsCant.forEach(script => {
        const codigo = script.innerHTML;
        const saida = executarCant(codigo);
        
        // Cria um container na tela para mostrar o resultado
        const container = document.createElement('div');
        container.innerHTML = saida;
        script.parentNode.insertBefore(container, script.nextSibling);
    });
});
