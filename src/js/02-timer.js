import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

const daysEle = document.querySelector('[data-days]');
const hoursEle = document.querySelector('[data-hours]');
const minutesEle = document.querySelector('[data-minutes]');
const secondsEle = document.querySelector('[data-seconds]');

const animateObj = document.querySelectorAll('#animate');
const startBtn = document.querySelector('[data-start]');


let timerId = null;

animateObj.disabled = true;
startBtn.disabled = true;



const optionss = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] < new Date()) {
        Notiflix.Notify.failure('Ingresa una fecha en el futuro');
        return;
      }
      startBtn.disabled = false;
  
      const showTimer = () => {
        const now = new Date();
        localStorage.setItem('selectedData', selectedDates[0]);
        const selectData = new Date(localStorage.getItem('selectedData'));
  
        if (!selectData) return;
  
        const diff = selectData - now;
        const { days, hours, minutes, seconds } = convertMs(diff);
        
          daysEle.textContent = days;
          hoursEle.textContent = addLeadingZero(hours);
          minutesEle.textContent = addLeadingZero(minutes);
          secondsEle.textContent = addLeadingZero(seconds);
  
        if (
          daysEle.textContent === '0' &&
          hoursEle.textContent === '00' &&
          minutesEle.textContent === '00' &&
          secondsEle.textContent === '00'
        ) {
          clearInterval(timerId);
        }
      };
  
      startBtn.addEventListener('click', () => {
          if (timerId) {
              clearInterval(timerId);
            }
            showTimer();
            timerId = setInterval(showTimer, 1000);
  
          for (let i = 0; i < animateObj.length; i++) {
              animateObj[i].classList.remove('easeani');
          }
      });
    },
  };

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds:20}

const addLeadingZero = value => String(value).padStart(2, 0);




flatpickr('#datetime-picker', { ...options });
  
