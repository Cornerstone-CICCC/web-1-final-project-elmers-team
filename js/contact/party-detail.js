'use strict'

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
const notyet = document.querySelector ('.notyet')
const locationInput = document.querySelector ('#location')

  notyet.addEventListener('click',() => {
    if (notyet.checked) {
      locationInput.disabled = true;
    } else {
      locationInput.disabled = false;
    }
  });

