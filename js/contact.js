'use strict'

const contactButtons = document.querySelectorAll('.contact-button');


contactButtons.forEach(contactButton =>{
  contactButton.addEventListener('click',() => {

    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box => box.classList.remove('appear'));

    const boxId = 'box-' + contactButton.id.split('-')[1];
    document.getElementById(boxId).classList.add('appear');

  });
});


// contactButton.addEventListner("checked",() => {
//   if(box.css('display')==='block'){
//     box.hide();
//   }else{
//     box.show();
//   }
// });

