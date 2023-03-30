const txt_character = document.getElementById('txt-character');
const container_cards = document.getElementById('containerCards');
const URL1 = "https://rickandmortyapi.com/api/character";
const URL2 = "https://rickandmortyapi.com/api/character/?name=";

const getApi = async (URL)=>{
    const response = await fetch(URL);
    const data = await response.json();
    return data.results;
}


const generateAllCharacters = async () =>{
    const data = await getApi(URL1);
    data.map( character => createCard(character)); 
}


const GetCharacterByName = async (event) => {
    container_cards.innerHTML = "";
    const data = await getApi(URL2+event.target.value);
    data.map( character => createCard(character));   
}



window.addEventListener('DOMContentLoaded',generateAllCharacters);
txt_character.addEventListener('keyup',GetCharacterByName);


const createCard =( character ) => {
const card = document.createElement('div');
card.classList.add('card-character');

const imgCard = document.createElement('img');
imgCard.src = character.image
imgCard.alt = character.name

const containerDescription = document.createElement('div');
containerDescription.classList.add('description-card');
const nameCharacter = document.createElement('h2');
nameCharacter.textContent = character.name
const genderCharacter = document.createElement('p');
genderCharacter.textContent = character.gender;

containerDescription.appendChild(nameCharacter);
containerDescription.appendChild(genderCharacter);

card.appendChild(imgCard);
card.appendChild(containerDescription);

container_cards.appendChild(card);

}
