import Notiflix from 'notiflix';

const body = document.querySelector('body');

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timer = null;

stopBtn.disabled = true;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

startBtn.addEventListener('click', () => {

    timer = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    },1000);
    Notiflix.Notify.info('Color body activado');
    startBtn.disabled = true;
    stopBtn.disabled = false;

});

stopBtn.addEventListener('click',() => {
    Notiflix.Notify.warning('Color body desActivado');
    clearInterval(timer);
    stopBtn.disabled = true;
    startBtn.disabled = false;

});