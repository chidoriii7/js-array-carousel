const imagesArray = [
    ' img/01.webp ',
    ' img/02.webp ',
    ' img/03.webp ',
    ' img/04.webp ',
    ' img/05.webp ',
]

//arrivare a list-item
const itemListDOMElement = document.querySelector('.list-item');
const nextButton = document.querySelector('next')
const prevButton = document.querySelector('prev')

//le immagini sono già inserite

//far comparire la prima immagine (active)
//far slidare le immagini seguenti
for (let i = 0; i < imagesArray.length; i++) {

    const imageURL = imagesArray[i]
    
    let classImage = 'immagine attiva'
//partendo dalla prima slide do la classe "active"
    if (i === 0) {
        classImage = ' active'
    }

    const itemsHTML = 

    `
        <div class="item ${classImage}">
            <img src="${ imageURL }">
        </div>
    `;

}


//click sul pulsante next per prossima slide
nextButton.addEventListener('click', function() {

})
//click su pulsante prev per slide precedente

prevButton.addEventListener('click', function() {

})

