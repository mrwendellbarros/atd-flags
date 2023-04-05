import flags from './flags.js';

const main = document.getElementById('princ')

function loadFlags() {
    for (var flag of flags) {
      main.innerHTML += `<div class="flag col-2 my-2 text-center">
      <img src="${flag.image}" alt="${flag.name}">
      <p>${flag.name}</p>
    </div>`
    }

}

loadFlags();