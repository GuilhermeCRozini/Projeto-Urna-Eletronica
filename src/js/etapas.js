// JSON da lista dos Cargos e seus respectivos candidatos

let etapas = [
  {
    titulo: 'VEREADOR',
    numeros: 5, // Quantos quadrados irão aparecer para inserir os números
    candidatos: [
      {
        numero: '38111',
        nome: 'Fulano de Tal',
        partido: 'ABC',
        fotos: [{ url: '38111.jpg', legenda: 'Vereador' }]
      },
      {
        numero: '77222',
        nome: 'Beltrano da Silva',
        partido: 'DEFG',
        fotos: [{ url: '77222.jpg', legenda: 'Vereador' }]
      }
    ]
  },
  {
    titulo: 'PREFEITO',
    numeros: 2,
    candidatos: [
      {
        numero: '99',
        nome: 'Ciclano',
        partido: 'ABC',
        vice: 'Cic',
        fotos: [
          { url: '99.jpg', legenda: 'Prefeito' },
          { url: '99_2.jpg', legenda: 'Vice-Prefeito', small: true }  // O small indica que será a foto pequena
        ]
      },
      {
        numero: '84',
        nome: 'Zulano',
        partido: 'QWERTY',
        vice: 'Zul',
        fotos: [
          { url: '84.jpg', legenda: 'Prefeito' },
          { url: '84_2.jpg', legenda: 'Vice-Prefeito', small: true }
        ]
      }
    ]
  }
]
