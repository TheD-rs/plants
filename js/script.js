console.log('привет');
const hamburger = document.querySelector('.hamburger');
const hambMenu = document.querySelector('.hamburger__menu');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const line4 = document.querySelector('.line4');
const btnGarden = document.querySelector('.btn__garden');
const btnLawn = document.querySelector('.btn__lawn');
const btnPlant = document.querySelector('.btn__plant');
const cards = document.querySelectorAll('.card');


function toggleMenu() {
  hamburger.classList.toggle('open');
  hambMenu.classList.toggle('active');
  document.body.classList.toggle('lock');
}


window.addEventListener('click', (e) => {
  if (e.target !== line1 && e.target !== line2 && e.target !== line3 && e.target !== line4 && e.target !== hambMenu && e.target !== hamburger) {
    hamburger.classList.remove('open');
    hambMenu.classList.remove('active');
    document.body.classList.remove('lock')
  }
});

hamburger.addEventListener('click', toggleMenu);


function gardenBlur() {
  btnGarden.classList.toggle('active');
  cards.forEach(card => {
    card.classList.toggle('blur');
    if (card.classList.contains('garden')) {
      card.classList.remove('blur');
    }
  })
}

function lawnBlur() {
  btnLawn.classList.toggle('active');
  cards.forEach(card => {
    card.classList.toggle('blur');
    if (card.classList.contains('lawn')) {
      card.classList.remove('blur');
    }
  })
}

function plantBlur() {
  btnPlant.classList.toggle('active');
  cards.forEach(card => {
    card.classList.toggle('blur');
    if (card.classList.contains('plant')) {
      card.classList.remove('blur');
    }
  })
}

btnGarden.addEventListener('click', gardenBlur);
btnLawn.addEventListener('click', lawnBlur);
btnPlant.addEventListener('click', plantBlur);

const pricesItemFirst = document.querySelector('.prices__list-item-first');
const pricesItemSecond = document.querySelector('.prices__list-item-second');
const pricesItemThird = document.querySelector('.prices__list-item-third');
const pricesAccFirst = document.querySelector('.prices__acc-first');
const pricesAccSecond = document.querySelector('.prices__acc-second');
const pricesAccThird = document.querySelector('.prices__acc-third');
const pricesMarkFirst = document.querySelector('.prices__mark-first');
const pricesMarkSecond = document.querySelector('.prices__mark-second');
const pricesMarkThird = document.querySelector('.prices__mark-third');
const pricesOrderThird = document.querySelector('.prices__order-third');



function accourdionFirst() {
  pricesItemFirst.classList.toggle('open');
  pricesItemThird.classList.remove('open');
  pricesItemSecond.classList.remove('open');
  //
  pricesAccSecond.style.display = 'none';
  pricesItemSecond.style.borderRadius = '20px';
  pricesItemSecond.style.backgroundColor = '#EDF2EC';
  pricesItemSecond.style.marginBottom = '32px';
  pricesMarkSecond.style.rotate = '0deg';
  pricesAccThird.style.display = 'none';
  pricesItemThird.style.borderRadius = '20px';
  pricesItemThird.style.backgroundColor = '#EDF2EC';
  pricesItemThird.style.marginBottom = '32px';
  pricesMarkThird.style.rotate = '0deg';
  if (pricesItemFirst.classList.contains('open')) {
    pricesAccFirst.style.display = 'block';
    pricesItemFirst.style.borderRadius = '20px 20px 0px 0px';
    pricesItemFirst.style.backgroundColor = '#D6E7D2';
    pricesItemFirst.style.marginBottom = '138px';
    pricesMarkFirst.style.rotate = '180deg';
  } else {
    pricesAccFirst.style.display = 'none';
    pricesItemFirst.style.borderRadius = '20px';
    pricesItemFirst.style.backgroundColor = '#EDF2EC';
    pricesItemFirst.style.marginBottom = '32px';
    pricesMarkFirst.style.rotate = '0deg';
  }
}

pricesItemFirst.addEventListener('click', accourdionFirst);

pricesItemSecond.addEventListener('click', (event) => {
  if (event.target === pricesItemSecond) {
    pricesAccFirst.style.display = 'none';
    pricesItemFirst.style.borderRadius = '20px';
    pricesItemFirst.style.backgroundColor = '#EDF2EC';
    pricesItemFirst.style.marginBottom = '32px';
    pricesMarkFirst.style.rotate = '0deg';
  }
})

pricesItemThird.addEventListener('click', (event) => {
  if (event.target === pricesItemThird) {
    pricesAccFirst.style.display = 'none';
    pricesItemFirst.style.borderRadius = '20px';
    pricesItemFirst.style.backgroundColor = '#EDF2EC';
    pricesItemFirst.style.marginBottom = '32px';
    pricesMarkFirst.style.rotate = '0deg';
  }
})


function accourdionSecond() {
  pricesItemSecond.classList.toggle('open');
  pricesItemThird.classList.remove('open');
  pricesItemFirst.classList.remove('open');
  pricesAccFirst.style.display = 'none';
  pricesItemFirst.style.borderRadius = '20px';
  pricesItemFirst.style.backgroundColor = '#EDF2EC';
  pricesItemFirst.style.marginBottom = '32px';
  pricesMarkFirst.style.rotate = '0deg';
  pricesAccThird.style.display = 'none';
  pricesItemThird.style.borderRadius = '20px';
  pricesItemThird.style.backgroundColor = '#EDF2EC';
  pricesItemThird.style.marginBottom = '32px';
  pricesMarkThird.style.rotate = '0deg';
  if (pricesItemSecond.classList.contains('open')) {
    pricesAccSecond.style.display = 'block';
    pricesItemSecond.style.borderRadius = '20px 20px 0px 0px';
    pricesItemSecond.style.backgroundColor = '#D6E7D2';
    pricesItemSecond.style.marginBottom = '138px';
    pricesMarkSecond.style.rotate = '180deg';
  } else {
    pricesAccSecond.style.display = 'none';
    pricesItemSecond.style.borderRadius = '20px';
    pricesItemSecond.style.backgroundColor = '#EDF2EC';
    pricesItemSecond.style.marginBottom = '32px';
    pricesMarkSecond.style.rotate = '0deg';
  }
}

pricesItemSecond.addEventListener('click', accourdionSecond);


pricesItemFirst.addEventListener('click', (event) => {
  if (event.target === pricesItemFirst) {
    pricesAccSecond.style.display = 'none';
    pricesItemSecond.style.borderRadius = '20px';
    pricesItemSecond.style.backgroundColor = '#EDF2EC';
    pricesItemSecond.style.marginBottom = '32px';
    pricesMarkSecond.style.rotate = '0deg';
  }
})

pricesItemThird.addEventListener('click', (event) => {
  if (event.target === pricesItemThird) {
    pricesAccSecond.style.display = 'none';
    pricesItemSecond.style.borderRadius = '20px';
    pricesItemSecond.style.backgroundColor = '#EDF2EC';
    pricesItemSecond.style.marginBottom = '32px';
    pricesMarkSecond.style.rotate = '0deg';
  }
})



function accourdionThird() {
  pricesItemThird.classList.toggle('open');
  pricesItemFirst.classList.remove('open');
  pricesItemSecond.classList.remove('open');
  pricesAccFirst.style.display = 'none';
  pricesItemFirst.style.borderRadius = '20px';
  pricesItemFirst.style.backgroundColor = '#EDF2EC';
  pricesItemFirst.style.marginBottom = '32px';
  pricesMarkFirst.style.rotate = '0deg';
  pricesAccSecond.style.display = 'none';
  pricesItemSecond.style.borderRadius = '20px';
  pricesItemSecond.style.backgroundColor = '#EDF2EC';
  pricesItemSecond.style.marginBottom = '32px';
  pricesMarkSecond.style.rotate = '0deg';
  if (pricesItemThird.classList.contains('open')) {
    pricesAccThird.style.display = 'block';
    pricesItemThird.style.borderRadius = '20px 20px 0px 0px';
    pricesItemThird.style.backgroundColor = '#D6E7D2';
    pricesItemThird.style.marginBottom = '138px';
    pricesMarkThird.style.rotate = '180deg';
  } else {
    pricesAccThird.style.display = 'none';
    pricesItemThird.style.borderRadius = '20px';
    pricesItemThird.style.backgroundColor = '#EDF2EC';
    pricesItemThird.style.marginBottom = '32px';
    pricesMarkThird.style.rotate = '0deg';
  }
}

pricesItemThird.addEventListener('click', accourdionThird)


pricesItemFirst.addEventListener('click', (event) => {
  if (event.target === pricesItemFirst) {
    pricesAccThird.style.display = 'none';
    pricesItemThird.style.borderRadius = '20px';
    pricesItemThird.style.backgroundColor = '#EDF2EC';
    pricesItemThird.style.marginBottom = '32px';
    pricesMarkThird.style.rotate = '0deg';
  }
})

pricesItemSecond.addEventListener('click', (event) => {
  if (event.target === pricesItemSecond) {
    pricesAccThird.style.display = 'none';
    pricesItemThird.style.borderRadius = '20px';
    pricesItemThird.style.backgroundColor = '#EDF2EC';
    pricesItemThird.style.marginBottom = '32px';
    pricesMarkThird.style.rotate = '0deg';
  }
})

pricesOrderThird.addEventListener('click', () => {
  pricesAccThird.style.display = 'block';
  pricesItemThird.style.borderRadius = '20px 20px 0px 0px';
  pricesItemThird.style.backgroundColor = '#D6E7D2';
  pricesItemThird.style.marginBottom = '138px';
  pricesMarkThird.style.rotate = '180deg';
})

//contacts

const citySelect = document.querySelector('.contacts__city');
const cityDrop = document.querySelector('.city__drop');
const contactsMark = document.querySelector('.contacts__mark');

function accourdionCity() {
  citySelect.classList.toggle('open');
  if (citySelect.classList.contains('open')) {
    cityDrop.style.display = 'block';
    contactsMark.style.rotate = '180deg';
  } else {
    cityDrop.style.display = 'none';
    contactsMark.style.rotate = '0deg';
  }
}

citySelect.addEventListener('click', accourdionCity);

const Canandaigua = document.querySelector('.Canandaigua');
const NewYork = document.querySelector('.New__York-City');
const Yonkers = document.querySelector('.Yonkers');
const Sherrill = document.querySelector('.Sherrill');
const cityItem1 = document.querySelector('.city__item-1');
const cityItem2 = document.querySelector('.city__item-2');
const cityItem3 = document.querySelector('.city__item-3');
const cityItem4 = document.querySelector('.city__item-4');
const cityInputName = document.querySelector('.city__name');


function selectCanand() {
  cityDrop.style.display = 'none';
  citySelect.classList.toggle('open');
  Canandaigua.style.display = 'block';
  contactsMark.style.rotate = '0deg';
  cityInputName.textContent = 'Canandaigua, NY';
  NewYork.style.display = 'none';
  Yonkers.style.display = 'none';
  Sherrill.style.display = 'none';
}

cityItem1.addEventListener('click', selectCanand);

function selectNewYork() {
  cityDrop.style.display = 'none';
  citySelect.classList.toggle('open');
  NewYork.style.display = 'block';
  contactsMark.style.rotate = '0deg';
  cityInputName.textContent = 'New York City';
  Canandaigua.style.display = 'none';
  Yonkers.style.display = 'none';
  Sherrill.style.display = 'none';
}

cityItem2.addEventListener('click', selectNewYork);

function selectYonkers() {
  cityDrop.style.display = 'none';
  citySelect.classList.toggle('open');
  Yonkers.style.display = 'block';
  contactsMark.style.rotate = '0deg';
  cityInputName.textContent = 'Yonkers, NY';
  Canandaigua.style.display = 'none';
  NewYork.style.display = 'none';
  Sherrill.style.display = 'none';
}

cityItem3.addEventListener('click', selectYonkers);

function selectSherrill() {
  cityDrop.style.display = 'none';
  citySelect.classList.toggle('open');
  Sherrill.style.display = 'block';
  contactsMark.style.rotate = '0deg';
  cityInputName.textContent = 'Sherrill, NY';
  Canandaigua.style.display = 'none';
  NewYork.style.display = 'none';
  Yonkers.style.display = 'none';
}

cityItem4.addEventListener('click', selectSherrill);