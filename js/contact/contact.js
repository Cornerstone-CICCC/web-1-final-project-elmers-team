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

const optionWedding = document.querySelector('#option-wedding');

optionWedding.addEventListener('change',() => {

  const callTime = document.querySelector('.call-time');
  callTime.classList.add('appearTime');
});

document.querySelectorAll('input[name="event-type"]').forEach((input) => {
  input.addEventListener('change', () => {
      if (input !== optionWedding) {
          const callTime = document.querySelector('.call-time');
          callTime.classList.remove('appearTime');
      }
  });

});
