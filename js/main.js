function initScrollAnimation() {
  const revealInstance = ScrollReveal();
  revealInstance.reveal(document.querySelectorAll(".js-slide-opac"), {
    delay: 0,
    duration: 700,
    scale: 0.9,
    interval: 0,
    reset: false,
    mobile: false,
    opacity: 0,
    viewOffset: {
      bottom: 100,
      top: 100,
    },
  });
  revealInstance.reveal(document.querySelectorAll(".js-slide-left"), {
    delay: 0,
    distance: "100px",
    duration: 1000,
    origin: "left",
    reset: false,
    mobile: false,
    viewOffset: {
      bottom: 100,
      top: 100,
    },
  });
}
initScrollAnimation();


// const myModalEngine = new HystModal({
//   linkAttributeName: "data-hystmodal",
//   catchFocus: false,
// });


Fancybox.bind('[data-fancybox]', {
  Toolbar: {
    display: {
      left: [],
      middle: [],
      right: ['close'],
    },
  },
  Image: {
    zoom: false,
  },
  placeFocusBack: false,
  autoFocus: false,
  preload: 0,
});


function initSliders() {
  new Swiper('.js-closlider1 .swiper', {
    autoHeight: false,
    loop: false,
    spaceBetween: 20,
    slidesPerView: 'auto',
    navigation: {
      prevEl: ".js-closlider1 .closlictrlbutt--prev",
      nextEl: ".js-closlider1 .closlictrlbutt--next",
    },
    pagination: {
      el: ".js-closlider1 .closlictrl__pag",
      type: "fraction",
    },
    breakpoints: {
      1300: {
        spaceBetween: 40,
        slidesPerView: 3,
      },
    },
  });

  new Swiper('.js-closlider2 .swiper', {
    autoHeight: false,
    loop: false,
    spaceBetween: 20,
    slidesPerView: 'auto',
    lazyPreloadPrevNext: 1,
    navigation: {
      prevEl: ".js-closlider2 .closlictrlbutt--prev",
      nextEl: ".js-closlider2 .closlictrlbutt--next",
    },
    pagination: {
      el: ".js-closlider2 .closlictrl__pag",
      type: "fraction",
    },
    breakpoints: {
      992: {
        spaceBetween: 20,
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });

  new Swiper('.js-clo-reviews .swiper', {
    autoHeight: false,
    loop: false,
    spaceBetween: 20,
    slidesPerView: 'auto',
    navigation: {
      prevEl: ".js-clo-reviews .closlictrlbutt--prev",
      nextEl: ".js-clo-reviews .closlictrlbutt--next",
    },
    pagination: {
      el: ".js-clo-reviews .closlictrl__pag",
      type: "fraction",
    },
    breakpoints: {
      992: {
        spaceBetween: 20,
        slidesPerView: 4,
      },
      1199: {
        spaceBetween: 40,
        slidesPerView: 4,
      },
    },
  });
}
initSliders();



function initScrollTop() {
  const button = document.querySelector('.scrollTop');
  const headerBlock = document.querySelector('.js-scroll-elem');
  if (!button || !headerBlock){
    console.log('Не найдено .js-scroll-elem. Кнопка "Вверх" не отображается');
    return;
  };
  button.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  const TriggerShowButton = (entries) => {
    button.classList.toggle('active', !entries[0].isIntersecting);
  };
  const twoObserver = new IntersectionObserver(TriggerShowButton, {
    rootMargin: '400px',
    threshold: 1.0,
  });
  twoObserver.observe(headerBlock);
}
initScrollTop();




function initScrollTo() {
  document.addEventListener('click', (e) => {
    const scrollButt = e.target.closest('[data-scrollto]');
    if (!scrollButt) return;
    e.preventDefault();
    let hrefLink = scrollButt.getAttribute('href');
    if (!hrefLink) {
      hrefLink = scrollButt.dataset.scrollto;
    }
    const needEl = document.querySelector(hrefLink);
    if (!needEl) {
      console.log(`Элемента ${hrefLink} нет`);
      return;
    }
    let offset = 0;
    if (scrollButt.dataset.offset) {
      offset = parseInt(scrollButt.dataset.offset)
    }
    window.scrollTo({
      top: needEl.getBoundingClientRect().top + window.scrollY - offset,
      behavior: scrollButt.dataset.hard ? 'auto' : 'smooth',
    });
  });
}
initScrollTo();
