function initForms(){
  document.addEventListener('submit', async (e) => {
    const ajaxForm = e.target.closest('.js-ajaxform');
    if(!ajaxForm) return;
    e.preventDefault();
    const submitButton = ajaxForm.querySelector('.clobtn');
    submitButton.setAttribute('disabled', 'disabled');

    setTimeout(() => {
      const formData = new FormData(ajaxForm);
      const formValues = {};
      formData.forEach((value, key) => (formValues[key] = value));
      console.log(formValues);

      alert(`Отправка форм настраивается в файле /js/forms.js\nВаши данные: ${JSON.stringify(formValues)}`);
      submitButton.removeAttribute('disabled');
    }, 400)
  });
}
initForms();


//Функция обработки промокодов. Отредактируйте.
function initPromoCodes(){
  document.addEventListener('click', async (e) => {

    //Открытие формы промокодов
    const openPromoButton = e.target.closest('.promoform__openbutton');
    if(openPromoButton){
      e.preventDefault();
      const promoform = openPromoButton.closest('.promoform');
      promoform.classList.add('state-open');
    }

    //Отправка формы промокодов
    const sendPromoButton = e.target.closest('.js-promo-submit');
    if(sendPromoButton){
      e.preventDefault();
      const promoform = sendPromoButton.closest('.promoform');
      const promoInput = promoform.querySelector('input[name="promocode"]');
      if(!promoInput || !promoInput.value?.trim()){
        promoInput.classList.add('is-invalid');
        return;
      }
      sendPromoButton.setAttribute('disabled', 'disabled');
      const promoValue = promoInput.value.trim();
      /**
       * Здесь необходимо реализовать логику обработки отправки промокода
       * введенный промокод в переменной promoValue
       */

      setTimeout(() => {
        if(confirm(`Вы ввели промокод ${promoValue}. Обработку отправки необходимо настроить в файле /js/forms.js. \n OK - показать успешный результат\n ОТМЕНА - ошибочный результат`)){
          promoform.classList.remove('state-open');
          promoform.classList.add('state-success');
        }
        promoInput.classList.add('is-invalid');
        sendPromoButton.removeAttribute('disabled');
      }, 400);
    }

    //Очистка input
    const clearPromoButton = e.target.closest('.promoform__clearer');
    if(clearPromoButton){
      e.preventDefault();
      const promoform = clearPromoButton.closest('.promoform');
      const promoInput = promoform.querySelector('input[name="promocode"]');
      if(!promoInput) return;
      promoInput.value = '';
      promoInput.classList.remove('is-invalid');
    }
  });
}
initPromoCodes();
