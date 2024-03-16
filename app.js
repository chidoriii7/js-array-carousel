const imagesArray = [
    ' img/01.webp ',
    ' img/02.webp ',
    ' img/03.webp ',
    ' img/04.webp ',
    ' img/05.webp ',
]

//arrivare a list-item
    const itemListDOMElement = document.querySelector('.list-item');
//altre variabili e costanti

    let Index = 0
//le immagini sono già inserite

//far comparire la prima immagine (active)
//far slidare le immagini seguenti
// for (let i = 0; i < imagesArray.length; i++) {

//     const imageURL = imagesArray[i];
    
//     let classImage = 'immagine attiva'
// //partendo dalla prima slide do la classe "active"
//     if (i === 0) {
//         classImage = ' active'
//     }

//     const itemsHTML = 
//     `
//         <div class="item ${classImage}">
//             <img src="${ imageURL }">
//         </div>
//     `;
//     itemListDOMElement.innerHTML += itemsHTML;
// }


    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    console.log(nextButton, prevButton)
    const itemElements = document.getElementsByClassName('item');

//click sul pulsante next per prossima slide

    nextButton.addEventListener('click', function() {
    console.log('slide successiva')
//togliere la classe active
    itemElements[Index].classList.remove('active');
//incremento di 1 l'index
//vedo la lunghezza dell'array e lo incremento tranne quando si tratta dell'ultima immagine
    if (imagesArray.length -1 === Index) {
        Index = 0
    } else {
        Index++
    }
//aggiungere la classe active alla slide seguente
    itemElements[Index].classList.add('active');
    
    

})
//click su pulsante prev per slide precedente

    prevButton.addEventListener('click', function() {
    console.log('slide precedente')
    itemElements[Index].classList.remove('active'); 
    if (Index === 0) {
        Index = imagesArray.length -1
    } else {
        Index--
    }


    itemElements[Index].classList.add('active');
})

