const SELECTOR = 'input[type="tel"]';
const SELECTOR_DATE = '.js-flatpickr';

const startInputMasks = () => {
  function applyInputMasks(elem, type) {
    const input = elem;
    if (input.mask) return false;
    switch (type) {
      case 'phone':
        input.mask = IMask(input, {
          mask: '+{7} 000 000-00-00',
          lazy: true,
          autofix: true,
        });
        break;
      case 'date':
        input.mask = IMask(input, {
          mask: Date,
          lazy: true,
        });
        break;
    }

    return input.mask;
  }

  function iMaskUpdate() {
    document.querySelectorAll(SELECTOR).forEach((elem) => {
      applyInputMasks(elem, 'phone');
    });
    document.querySelectorAll(SELECTOR_DATE).forEach((elem) => {
      applyInputMasks(elem, 'date');
    });
  }

  document.addEventListener('focusin', (e) => {
    const phoneInput = e.target.closest(SELECTOR) || e.target.closest(SELECTOR_DATE);
    if (!phoneInput) return;
    applyInputMasks(phoneInput, phoneInput.classList.contains('js-flatpickr') ? 'date' : 'phone');
    phoneInput.mask.updateOptions({
      lazy: false,
    });
    phoneInput.mask.alignCursorFriendly();
  });

  document.addEventListener('focusout', (e) => {
    const phoneInput = e.target.closest(SELECTOR);
    if (!phoneInput || !phoneInput.mask || phoneInput.mask.masked.isComplete) return;
    phoneInput.mask.updateOptions({
      lazy: true,
    });
    phoneInput.mask.value = '';
  });

  iMaskUpdate();
  window.inputMask = iMaskUpdate;
};

startInputMasks();
