let generator = document.querySelector('.spin');
let autor = document.querySelector('.autor');
let newPhrase = document.querySelector('.phrase');
let quoteCard =  document.querySelector('.quoteCard');
let allPhrases = document.querySelector('.allPhrases');
let arrow = document.querySelector('.arrowRight')

async function getPhrase(){
  let response = await fetch(`http://localhost:3000/phrases/${Math.floor(Math.random()* 25)}`);
  let phrases = await response.json();
  autor.innerHTML = phrases.autor;
  newPhrase.innerHTML = phrases.frase;
  quoteCard.classList.remove("displayNone")
  allPhrases.innerHTML = '';
}
async function getPhrasesFromAutor(){
  let response = await fetch(`http://localhost:3000/phrases?autor=${autor.textContent}`);
  let phrases = await response.json();

  if(allPhrases.innerHTML != ''){
     console.log('Frases geradas')

  }else{
     `<h4>Outras frases de${autor}+</h4>`
    phrases.forEach(element => {
    allPhrases.innerHTML += element.frase+ ` <hr> </br> </br>`
   console.log(element.frase.value)
  });
  }
 
}

generator.addEventListener('click', getPhrase );
arrow.addEventListener('click', getPhrasesFromAutor);
autor.addEventListener('click', getPhrasesFromAutor);