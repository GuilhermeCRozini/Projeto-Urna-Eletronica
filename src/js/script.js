//*************** VARIÁVEIS DE CONTROLE DE INTERFACE ***************/
// Selecionando a div com a classe d-1-1 e o span que está dentro dela
let seuVotoPara = document.querySelector('.d-1-1 span')
let cargo = document.querySelector('.d-1-2 span')
let numeros = document.querySelector('.d-1-3')
let descricao = document.querySelector('.d-1-4')

let lateral = document.querySelector('.d-1-right')

let aviso = document.querySelector('.d-2')

//*************** VARIÁVEIS DE CONTROLE DE AMBIENTE ***************/
// Indica em qual estapa atual estou agora
let etapaAtual = 0
let numero = ''
let votoBranco = false
let votos = []

// Função que irá limpar a tela, pegar as informações da etapaAtual e irá preencher o que precisa ser preenchido
function comecarEtapa() {
  let etapa = etapas[etapaAtual]

  let numeroHtml = ''
  numero = ''
  // Quando começar o voto em branco deve estar zerado
  votoBranco = false

  for (let i = 0; i < etapa.numeros; i++) {
    if (i === 0) {
      numeroHtml += '<div class="numero pisca"></div>'
    } else {
      numeroHtml += '<div class="numero"></div>'
    }
  }

  seuVotoPara.getElementsByClassName.display = 'none'
  cargo.innerHTML = etapa.titulo
  descricao.innerHTML = ''
  aviso.style.display = 'none'
  lateral.innerHTML = ''
  numeros.innerHTML = numeroHtml
}

// Função que será executada sempre que ocorrer alguma ação
function atualizaInterface() {
  let etapa = etapas[etapaAtual]
  // Preenchendo o candidato utilizando o .filter, recebendo cada um dos candidatos que será chamado de item
  let candidato = etapa.candidatos.filter(item => {
    if (item.numero === numero) {
      return true
    } else {
      return false
    }
  })
  if (candidato.length > 0) {
    candidato = candidato[0]
    // Encontrado o Candidato, irá preencher as informações na tela
    seuVotoPara.style.display = 'block'
    aviso.style.display = 'block'
    descricao.innerHTML = `Nome: ${candidato.nome}<br/>Partido: ${candidato.partido}`

    let fotosHtml = ''
    for (let i in candidato.fotos) {
      if (candidato.fotos[i].small) {
        fotosHtml += `<div class="d-1-image small"><img src="./src/img/${candidato.fotos[i].url}" alt="" /> ${candidato.fotos[i].legenda} </div>`
      } else {
        fotosHtml += `<div class="d-1-image"><img src="./src/img/${candidato.fotos[i].url}" alt="" /> ${candidato.fotos[i].legenda} </div>`
      }
    }
    lateral.innerHTML = fotosHtml
  } else {
    // Voto nulo
    seuVotoPara.style.display = 'block'
    aviso.style.display = 'block'
    descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>'
  }
}

function clicou(n) {
  let elNumero = document.querySelector('.numero.pisca')
  if (elNumero !== null) {
    elNumero.innerHTML = n
    numero = `${numero}${n}`

    // Depois que clicar e realizar o processo de adicionar um novo número, irá retirar o efeito de piscar do número que foi inserido
    elNumero.classList.remove('pisca')
    // Verificando se tem um próximo item
    if (elNumero.nextElementSibling !== null) {
      // Indo para o próximo item que ainda não possui número para fazê-lo piscar
      elNumero.nextElementSibling.classList.add('pisca')
    } else {
      // Caso não tenha isso significa que todos os itens já foram preenchidos
      atualizaInterface()
    }
  }
}

function branco() {
  // Se apertar o botão branco com algum número já pressionado, irá automaticamente zerar o número
  numero = ''
  votoBranco = true

  seuVotoPara.style.display = 'block'
  aviso.style.display = 'block'
  numeros.innerHTML = ''
  descricao.innerHTML = '<div class="aviso--grande pisca">VOTO EM BRANCO</div>'

  // Irá também limpar as informações do candidato que estiver sendo exibidas na tela
  lateral.innerHTML = ''
}

function corrige() {
  // Irá rodar a função comecarEtapa para zerar tudo e recomeçar do 0
  comecarEtapa()
}

function confirma() {
  // Só funciona se tiver algum canditdato selecionado, se estiver nulo ou quando precionou o voto em branco
  let etapa = etapas[etapaAtual]

  let votoConfirmado = false

  if (votoBranco === true) {
    votoConfirmado = true
    // Para registrar e mostrar os votos realizados após pressionado o Confirma através do console.log
    votos.push({
      etapa: etapas[etapaAtual].titulo,
      voto: 'branco'
    })
  } else if (numero.length === etapa.numeros) {
    votoConfirmado = true
    votos.push({
      etapa: etapas[etapaAtual].titulo,
      voto: numero
    })
  }
  // Passando para a outra etapa
  if (votoConfirmado) {
    etapaAtual++
    if (etapas[etapaAtual] !== undefined) {
      comecarEtapa()
    } else {
      document.querySelector('.tela').innerHTML =
        '<div class="aviso--gigante pisca">FIM</div>'
      console.log(votos)
    }
  }
}

comecarEtapa()
