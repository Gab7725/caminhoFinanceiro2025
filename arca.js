document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('investmentChart').getContext('2d');
    const investmentChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Ano 1', 'Ano 2', 'Ano 3', 'Ano 4', 'Ano 5'],
        datasets: [{
          label: 'Crescimento da Carteira',
          data: [10000, 12000, 15000, 18000, 22000],
          backgroundColor: 'rgba(175, 175, 175, 0.2)',
          borderColor: 'rgb(255, 0, 0)',
          borderWidth: 2,
          fill: true,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Valor (R$)'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Tempo (Anos)'
            }
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Crescimento da Carteira ao Longo do Tempo'
          }
        }
      }
    });
  });
    // Script para alternar o menu
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        const nav = document.querySelector('nav');
        nav.classList.toggle('active'); // Adiciona/remove a classe 'active'
    });
