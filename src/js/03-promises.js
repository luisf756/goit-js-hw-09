import Notiflix, { Notify } from 'notiflix/build/notiflix-notify-aio';

const ref={
   form : document.querySelector('.form'),
   delayEle : document.querySelector('input[name="delay"]'),
   stepEle : document.querySelector('input[name="step"]'),
   amountEle : document.querySelector('input[name="amount"]'),
}


ref.form.addEventListener('submit', promiseGenerator);

function promiseGenerator(event){
  event.preventDefault();
  let dealyValue = Number(ref.delayEle.value);
  for (let positionValue = 1; positionValue <= ref.amountEle.value; positionValue ++) {
    createPromise(positionValue, dealyValue)
    .then(({position, delay})=>{
      Notify.success(`full file promice ${position} in ${delay}ms`)
    })
    .catch(({position, delay})=>{
      Notify.success(`Reget promice ${position} in ${delay}ms`)
    });
    dealyValue +=Number(ref.stepEle.value)
  };
};

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {

      if (shouldResolve) {
        resolve({ position, delay });
      };

      reject({ position, delay });
    }, delay);

  });
}

