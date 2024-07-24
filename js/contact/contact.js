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

  const callTime = document.querySelector('.callTime');
  callTime.classList.add('appearTime');
});

const eventType = document.querySelectorAll('input[name="event-type"]')

eventType.forEach((input) => {
  input.addEventListener('change', () => {
      if (input !== optionWedding) {
          const callTime = document.querySelector('.callTime');
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
const optionParty = document.querySelector('#option-party')
const optionPhotoshoot = document.querySelector('#option-photoshoot')
const persons = document.querySelectorAll('.person')
const personPartys = document.querySelectorAll('.person-party')
const PartyConfirm = document.querySelector('#party-confirm');


const Back = document.querySelector('.back')

const Confirm = document.querySelector('#photoshoot-confirm')
const Submit = document.querySelector('#submit')


next.addEventListener('click', () => {
  if (optionWedding.checked) {
    Wedding.classList.add('appearWedding');
    Contact.classList.add('closeContact');
    persons.forEach(person => person.classList.remove('closePerson'));
    personPartys.forEach(personParty => personParty.classList.remove('appearParty'));

  } else if(optionParty.checked){
    Wedding.classList.add('appearWedding');
    Contact.classList.add('closeContact');
    persons.forEach(person => person.classList.add('closePerson'));
    personPartys.forEach(personParty => personParty.classList.add('appearParty'));
  }
  else {
    Wedding.classList.remove('appearWedding');
    Confirm.classList.add('appearConfirm');
    Contact.classList.add('closeContact');
  }
});

// Back

Back.addEventListener('click', () => {
    Contact.classList.remove('closeContact');
    Wedding.classList.remove('appearWedding');
    Confirm.classList.remove('appearConfirm');
});

// submit



Submit.addEventListener('click', (event) => {
    event.preventDefault();
    Wedding.classList.remove('appearWedding');
    PartyConfirm.classList.add('appearPartyConfirm');
    Contact.classList.add('closeContact');
    Confirm.classList.remove('appearConfirm');
    updateResults();
});

// data 
const addedPremiumServices = document.querySelector('.addedPremium-services');
const additional = document.querySelector('.additional');
const basicService = document.querySelector('.Basic-service');
const bridalService = document.querySelector('.braidal-service');

function updateResults() {
  // Clear previous results
  addedPremiumServices.innerHTML = '<span>Premium services</span>';
  additional.innerHTML = '<span>Additional headcount</span>';

  // Get checked premium services
  const premiumServices = document.querySelectorAll('.premium-service .service-option:checked');
  premiumServices.forEach(service => {
    const serviceText = service.nextElementSibling.textContent;
    const listItem = document.createElement('div');
    listItem.textContent = `-${serviceText}`;
    addedPremiumServices.appendChild(listItem);
  });

 
const personsChecked = document.querySelectorAll('.person .service-type input:checked');
  const personData = new Map();

  personsChecked.forEach(service => {
    const personElement = service.closest('.person');
    const personType = personElement.querySelector('.person-left span').textContent;
    const serviceText = service.nextElementSibling.textContent;
    const numberInput = personElement.querySelector('input[type="number"]').value;

    if (!personData.has(personType)) {
      personData.set(personType, {
        count: parseInt(numberInput),
        services: new Set()
      });
    } else {
      const data = personData.get(personType);
      data.count += parseInt(numberInput);
    }

    personData.get(personType).services.add(serviceText);
  });

  personData.forEach((value, key) => {
    const services = Array.from(value.services).join(' + ');
    const listItem = document.createElement('div'); // Changed from 'li' to 'div'
    const countText = value.count > 1 ? ` * ${value.count}` : '';
    listItem.textContent = `- ${key}${countText} (${services})`;
    additional.appendChild(listItem);
  });

  // Get additional party person services
  const personPartiesChecked = document.querySelectorAll('.person-party .service-type input:checked');
  const personPartyData = new Map();

  personPartiesChecked.forEach(service => {
    const personPartyElement = service.closest('.person-party');
    const personType = personPartyElement.querySelector('.person-left span').textContent;
    const serviceText = service.nextElementSibling.textContent;
    const numberInput = personPartyElement.querySelector('input[type="number"]').value;

    if (!personPartyData.has(personType)) {
      personPartyData.set(personType, {
        count: parseInt(numberInput),
        services: new Set()
      });
    } else {
      const data = personPartyData.get(personType);
      data.count += parseInt(numberInput);
    }

    personPartyData.get(personType).services.add(serviceText);
  });

  personPartyData.forEach((value, key) => {
    const services = Array.from(value.services).join(' + ');
    const listItem = document.createElement('div'); // Changed from 'li' to 'div'
    const countText = value.count > 1 ? ` * ${value.count}` : '';
    listItem.textContent = `- ${key}${countText} (${services})`;
    additional.appendChild(listItem);
  });

  const bridalServices = document.querySelectorAll('.braidal-service .event-type:checked');
  bridalServices.forEach(service => {
    const serviceText = service.previousElementSibling.textContent;
    const listItem = document.createElement('div'); // Changed from 'li' to 'div'
    listItem.textContent = `- ${serviceText}`;
    basicService.appendChild(listItem);
  });
}


