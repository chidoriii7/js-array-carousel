const imagesArray = [
    ' img/01.webp ',
    ' img/02.webp ',
    ' img/03.webp ',
    ' img/04.webp ',
    ' img/05.webp '
]

//arrivare a list-item
const itemListDOMElement = document.querySelector('.list-item');

//le immagini sono già inserite

//far comparire la prima immagine (active)
//far slidare le immagini seguenti
for (let i = 0; imagesArray.length; i++) {
    
    const imageURL = imagesArray[i]

    const itemsHTML = 

    `
        <div class="item">
            <img src="${ imageURL }">
        </div>
    `;

    console.log(itemsHTML);
    
}
