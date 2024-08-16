// person.json
const request = new XMLHttpRequest();
request.open('GET', '../data/charcter.json');
request.setRequestHeader('Content-type', 'application/json');
request.send();

setTimeout(() => {
    const characters = JSON.parse(request.response);

    const wrapper = document.querySelector('.card-container');
    const userPhoto = 'url("https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2021/08/1-1024x724.png")';

    characters.forEach(card => {
        cardBlock = document.createElement('div');
        cardBlock.setAttribute('class', 'card_block');

        cardBlock.innerHTML = `
        <div class="person_photo">
            <img src="${card.photo || userPhoto}" alt="${card.name}"/>
        </div>
        <h2>${card.name}</h2>
        <p><h4>Возраст:</h4> ${card.age}</p>
        <p><h4>Позиция:</h4> ${card.position}</p>
        `
        wrapper.append(cardBlock)
    });
}, 500)