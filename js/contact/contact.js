'use strict'

// contact

const contactButtons = document.querySelectorAll('.contact-button');


contactButtons.forEach(contactButton =>{
  contactButton.addEventListener('click',() => {

    const allBoxes = document.querySelectorAll('.box');
    allBoxes.forEach(box => box.classList.remove('appear'));

    const boxId = 'box-' + contactButton.id.split('-')[1];
    document.getElementById(boxId).classList.add('appear');

  });
});

// contact-time

const optionWedding = document.querySelector('#option-wedding');

optionWedding.addEventListener('change',() => {

  const callTime = document.querySelector('.call-time');
  callTime.classList.add('appearTime');
});

const eventType = document.querySelectorAll('input[name="event-type"]')

eventType.forEach((input) => {
  input.addEventListener('change', () => {
      if (input !== optionWedding) {
          const callTime = document.querySelector('.call-time');
          callTime.classList.remove('appearTime');
      }
  });

});

// not decided

const notyets = document.querySelectorAll ('.notyet')
const answers = document.querySelectorAll ('.answer')

notyets.forEach((notyet,index) =>{
  notyet.addEventListener('click',() => {
    if (notyet.checked) {
      answers[index].disabled = true;
    } else {
      answers[index].disabled = false;
    }
  });
});


// counter

document.addEventListener('DOMContentLoaded', function () {

  const plusButtons = document.querySelectorAll('button[data-type="plus"]');
  const minusButtons = document.querySelectorAll('button[data-type="minus"]');

  plusButtons.forEach(button => {
    button.addEventListener('click', function () {
      const input = this.closest('.input-group').querySelector('input[type="number"]');
      let value = parseInt(input.value);
      const max = parseInt(input.max);

      if (value < max) {
        value++;
        input.value = value;
      }
    });
  });

  minusButtons.forEach(button => {
    button.addEventListener('click', function () {
      const input = this.closest('.input-group').querySelector('input[type="number"]');
      let value = parseInt(input.value);
      const min = parseInt(input.min);

      if (value > min) {
        value--;
        input.value = value;
      }
    });
  });
});

// next page 

const next = document.querySelector('#next')
const Wedding = document.querySelector('#wedding');
const Contact = document.querySelector('#contact-html');

next.addEventListener('click', () => {
  if (optionWedding.checked) {
    Wedding.classList.add('appearWedding');
    Contact.classList.add('closeContact');

  } else {
    Wedding.classList.remove('appearWedding');
  }
});

// Back

const Back = document.querySelector('.back')

Back.addEventListener('click', () => {
    Contact.classList.remove('closeContact');
    Wedding.classList.remove('appearWedding');
});

// submit

const Confirm = document.querySelector('#confirm')
const Submit = document.querySelector('#submit')

Submit.addEventListener('click', () => {
    Wedding.classList.remove('appearWedding');
    Confirm.classList.add('appearConfirm');
    Contact.classList.add('closeContact');
});





