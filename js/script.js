require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';
import calc from './modules/calc';
import cards from './modules/cards';
import forms from './modules/forms';
import modal, { openModal } from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';


window.addEventListener('DOMContentLoaded', () => {

  const modalTimerId = setTimeout(()=>openModal('.modal', modalTimerId), 300000);
  tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  modal('[data-modal]', '.modal', modalTimerId);
  timer('.timer', '2022-06-11');
  cards();
  calc();
  forms('form', modalTimerId);
  slider({
    container: '.offer__slider',
    slide: '.offer__slide',
    nextArray: '.offer__slider-next',
    prevArray: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner'
  });
});


