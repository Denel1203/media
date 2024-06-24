function calcularMedia() {
    var disciplina = document.getElementById('disciplina').value;
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);

    // Verifica se as notas são números válidos e estão no intervalo de 0 a 10
    if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        document.getElementById('resultado').innerHTML = 'Por favor, insira valores numéricos para as notas entre 0 e 10.';
        return;
    }

    var peso1 = 0.75; // Peso para a nota 1 (75%)
    var peso2 = 0.25; // Peso para a nota 2 (25%)
    
    var mediaPonderada = (nota1 * peso1) + (nota2 * peso2);

    // Salva os dados no local storage
    localStorage.setItem('disciplina', obterNomeDisciplina(disciplina));
    localStorage.setItem('media', mediaPonderada.toFixed(2));

    // Verifica se o aluno passou ou está de recuperação
    if (disciplina === 'suporte_saude' && mediaPonderada <= 5) {
        // Redireciona para a página de recuperação com mensagem personalizada
        localStorage.setItem('mensagem', 'Owwww o baixinho tirou nota baixa, vai ficar de recuperação.');
        window.location.href = 'recuperacao.html';
    } else if (disciplina === 'suporte_saude' && mediaPonderada > 5) {
        // Redireciona para a página de parabéns
        window.location.href = 'parabens.html';
    } else {
        // Redireciona para a página de resultados genérica
        window.location.href = 'resultado.html';
    }
}

function obterNomeDisciplina(disciplina) {
    switch (disciplina) {
        case 'saude_ambiental':
            return 'Saúde Ambiental';
        case 'suporte_saude':
            return 'Suporte Básico de Saúde';
        case 'biologia':
            return 'Biologia';
        case 'nutricao':
            return 'Nutrição';
        default:
            return 'Disciplina desconhecida';
    }
}

