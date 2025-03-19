
    document.getElementById('aposentadoriaForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o recarregamento da página

        // Captura os valores do formulário
        const idadeAtual = parseFloat(document.getElementById('idadeAtual').value);
        const idadeAposentadoria = parseFloat(document.getElementById('idadeAposentadoria').value);
        const valorMensalDesejado = parseFloat(document.getElementById('valorMensalDesejado').value);
        const taxaRetorno = parseFloat(document.getElementById('taxaRetorno').value);

        // Calcula o número de anos até a aposentadoria
        const anosParaAposentadoria = idadeAposentadoria - idadeAtual;

        // Calcula a taxa de retorno mensal (em decimal)
        const taxaRetornoMensal = (taxaRetorno / 100) / 12;

        // Calcula o valor acumulado necessário para gerar a renda mensal desejada
        const valorAcumuladoNecessario = valorMensalDesejado / taxaRetornoMensal;

        // Calcula o investimento mensal necessário
        const investimentoMensal = (valorAcumuladoNecessario * taxaRetornoMensal) /
            (Math.pow(1 + taxaRetornoMensal, anosParaAposentadoria * 12) - 1);

        // Exibe os resultados
        document.getElementById('valorAcumulado').textContent = `R$ ${valorAcumuladoNecessario.toFixed(2)}`;
        document.getElementById('investimentoMensal').textContent = `R$ ${investimentoMensal.toFixed(2)}`;
    });
