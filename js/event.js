"use strict";

1.
const pirmas = document.querySelector('.btn.pirmas');
const antras = document.querySelector('.btn.antras');

pirmas.addEventListener('click', pirmosiosVeiksmas);
antras.addEventListener('click', antrosiosVeiksmas);

let pirmojiKartai = 0;
function pirmosiosVeiksmas() {
  pirmojiKartai++;
  return console.log('Pirmasis buvo paspaustas: ', pirmojiKartai)
}

let antrosiosKartai = 0;
function antrosiosVeiksmas() {
  antrosiosKartai++;
  return console.log('Antra: ', antrosiosKartai);
}
