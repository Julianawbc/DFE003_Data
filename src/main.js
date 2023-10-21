// ELEMENTOS DA 1a CARTA APENAS
let imgFoto       = document.querySelector('#foto')
let name          = document.querySelector('#name')
let description = document.querySelector('#description')
let gender         = document.querySelector('#gender')
let race          = document.querySelector('#race')
let idi        = document.querySelector('#idi')

// section que acomoda todas as cartas
let sectionConteudos = document.querySelector('.conteudos')

// ENDERECO DO ARQUIVO JSON
const url = 'characters.json'

function pegarDados(i) {
    fetch(url)
      .then( response => response.json() )
      .then( dados => {
          if(dados.erro) {
              console.log("Erro ao acessar o JSON")
              return
          }
          // console.log(dados)
          // Quantidade de Personagens
          let qtdCharacters = (dados.characters.length)
          console.log("Quant. de Personagens " + qtdCharacters)
          // passe o valor de i no parametro
          atribuirDados2(dados, i)
      })
  } // fim function

  function atribuirDados(dados, i) {
    imgFoto.setAttribute('src', "images/pride/"+dados.characters[i].foto)
    names.textContent          = dados.characters[i].name
    description.textContent = dados.characters[i].description
    gender.textContent         = dados.characters[i].gender 
    race.textContent          = dados.characters[i].race
    idi.textContent        = (dados.characters[i].idi).toString()
}

// SELECIONAR TODOS OS CARDS por class
let imgsFoto = document.getElementsByClassName('foto')
let namesCharacters         = document.getElementsByClassName('name')
let descriptionCharacters = document.getElementsByClassName('description')
let genderCharacters         = document.getElementsByClassName('gender')
let raceCharacters          = document.getElementsByClassName('race')
let idiCharacters        = document.getElementsByClassName('id')

// ATRIBUIR DADOS PARA TODOS OS CARDs
// Selecionamos eles por class, com isso temos um array para cada elemento
// agora vamos atribuir para cada posicao os valores que pegamos
function aidiCharacterstribuirDados2(dados, i) {
    imgsFoto[i].setAttribute('src', "images/pride/"+dados.characters[i].foto)
    namesCharacters[i].textContent         = dados.characters[i].name
    descriptionCharacters[i].textContent = dados.characters[i].description
    genderCharacters[i].textContent         = dados.characters[i].gender
    raceCharacters[i].textContent          = dados.characters[i].race
    idiCharacters[i].textContent        = dados.characters[i].idi
}

// usamos as funcoes createElement e appendChild
// para criar article (elemento html que vai acomodar cada carta)
// criamos tambem img, h2 e h3. Depois colocamos eles dentro do article
function desenharCarta(id) {
    // CARD
    let card = document.createElement("article")
    card.setAttribute('class', 'card')
    sectionConteudos.appendChild(card)

    // IMAGEM DENTRO DO CARD
    let imagem = document.createElement("img")
    card.appendChild(imagem)
    imagem.setAttribute('class', 'foto')
    imagem.setAttribute('src', 'img/')           ??????????????

    // NOME DO PERSONAGEM
    let nameCharacters = document.createElement("h2")
    nameCharacters.setAttribute('class', 'name')
    carta.appendChild(nameCharacters)
    nameCharacters.textContent = "Name"

    // DESCRIÇÃO DO PERSONAGEM
    let descriptionCharacters = document.createElement("h3")
    descriptionCharacters.setAttribute('class', 'description')
    card.appendChild(descriptionCharacters)
    descriptionCharacters.textContent = "Description"

    // GÊNERO DO PERSONAGEM
    let genderCharacters = document.createElement("h3")
    genderCharacters.setAttribute('class', 'gender')
    card.appendChild(genderCharacters)
    genderCharacters.textContent = "Gender" 

    // CORRIDA PERSONAGEM
    let raceCharacters = document.createElement("h3")
    raceCharacters.setAttribute('class', 'race')
    card.appendChild(raceCharacters)
    raceCharacters.textContent = "Race" 

    // ID DO PERSONAGEM
    let idiCharacters = document.createElement("h3")
    idiCharacters.setAttribute('class', 'id')
    card.appendChild(idiCharacters)
    idiCharacters.textContent = "id" 

    pegarDados(id)
}

// 1a carta pegamos os dados. Ela ja esta desenhada na tela
pegarDados(0)

// 2a carta em diante desenhamos em tela usando as funcoes
//desenharCarta(0)
desenharCarta(1)
desenharCarta(2)
desenharCarta(3)
desenharCarta(4)

desenharCarta(5)
desenharCarta(6)
desenharCarta(7)
desenharCarta(8)
desenharCarta(10)
desenharCarta(11)
desenharCarta(12)
desenharCarta(13)
desenharCarta(14)
desenharCarta(15)
desenharCarta(16)
desenharCarta(17)
desenharCarta(18)
desenharCarta(19)
desenharCarta(20)