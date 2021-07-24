document.querySelector(".switcher__btn").addEventListener("click", (e) => {
  e.preventDefault();
});


document.getElementById('switcher__one').onclick = function () {
  document.getElementById('switcher__two', 'switcher__three').classList.remove('switcher__btn--active');

  document.getElementById('switcher__one').classList.add('switcher__btn--active');

  document.getElementById('tab-2', 'tab-3').classList.remove('items__result-content--active');

  document.getElementById('tab-1').classList.add('items__result-content--active');
}

document.getElementById('switcher__two').onclick = function () {
  document.getElementById('switcher__one', 'switcher__three').classList.remove('switcher__btn--active');

  document.getElementById('switcher__two').classList.add('switcher__btn--active');

  document.getElementById('tab-1', 'tab-3').classList.remove('items__result-content--active');

  document.getElementById('tab-2').classList.add('items__result-content--active');
}

document.getElementById('switcher__three').onclick = function () {
  document.getElementById('switcher__one', 'switcher__two').classList.remove('switcher__btn--active');

  document.getElementById('switcher__three').classList.add('switcher__btn--active');

  document.getElementById('tab-1', 'tab-2').classList.remove('items__result-content--active');

  document.getElementById('tab-3').classList.remove('items__result-content--active');
}

document.getElementById('items__btn').onclick = function () {
  document.getElementById('items__btn').classList.toggle('items__btn-active');
}
