'use strict';

if (document.querySelector('.swiper')) { 
  new Swiper('.variants__slider', { 
    observer: true,
    observeParents: true,
    slidesPerView: 3.4,
    loopedSlides: 2,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 800,
    initialSlide: 0,
    
    loop: true,

    //touchRatio: 0,
    //simulateTouch: false,
    //loop: true,
    //preloadImages: false,
    //lazy: true,

    /*
    // Ефекти
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    */

    // Пагінація
    /*
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    */

    // Скроллбар
    /*
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    */

    // Кнопки "вліво/вправо"
    navigation: {
      prevEl: '.variants .swiper-button-prev',
      nextEl: '.variants .swiper-button-next',
    },
    /*
    // Брейкпоінти
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 0,
        autoHeight: true,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1268: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
    */
    // Події
    on: {

    }
  });
  new Swiper('.offices__slider', { 
    observer: true,
    observeParents: true,

    loopedSlides: 2,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 800,
    initialSlide: 0,
    
    loop: true,

    //touchRatio: 0,
    //simulateTouch: false,
    //loop: true,
    //preloadImages: false,
    //lazy: true,

    /*
    // Ефекти
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    */

    // Пагінація
    /*
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    */

    // Скроллбар
    /*
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    */

    // Кнопки "вліво/вправо"
    navigation: {
      prevEl: '.offices .swiper-button-prev',
      nextEl: '.offices .swiper-button-next',
    },

    // Брейкпоінти
    breakpoints: {
      320: {
        slidesPerView: 1.4,
        autoHeight: true,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3.2,
        spaceBetween: 20,
      },
      1268: {
        slidesPerView: 3.9,
      },
      1440: {
        slidesPerView: 4.4,
        spaceBetween: 30,
      } 
    },
   
    // Події
    on: {

    }
  });
  new Swiper('.accommodation__slider', { 
    observer: true,
    observeParents: true,

    loopedSlides: 2,
    spaceBetween: 30,
    centeredSlides: true,
    speed: 800,
    initialSlide: 0,
    
    loop: true,

    //touchRatio: 0,
    //simulateTouch: false,
    //loop: true,
    //preloadImages: false,
    //lazy: true,

    /*
    // Ефекти
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    */

    // Пагінація
    /*
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    */

    // Скроллбар
    /*
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    */

    // Кнопки "вліво/вправо"
    navigation: {
      prevEl: '.accommodation .swiper-button-prev',
      nextEl: '.accommodation .swiper-button-next',
    },

    // Брейкпоінти
    breakpoints: {
      320: {
        slidesPerView: 2,
        autoHeight: true,
        spaceBetween: 10,
        centeredSlides: false,
      },
      480: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3.2,
        spaceBetween: 20,
      },
      1268: {
        slidesPerView: 3.9,
      },
      1440: {
        slidesPerView: 4.4,
        spaceBetween: 30,
      } 
    },
   
    // Події
    on: {

    }
  });
  new Swiper('.reviews__slider', { 
    observer: true,
    observeParents: true,

    spaceBetween: 30,
    speed: 800,

    //touchRatio: 0,
    //simulateTouch: false,
    //loop: true,
    //preloadImages: false,
    //lazy: true,

    /*
    // Ефекти
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    */

    // Пагінація
    /*
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    */

    // Скроллбар
    /*
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    */

    // Кнопки "вліво/вправо"
    navigation: {
      prevEl: '.reviews .swiper-button-prev',
      nextEl: '.reviews .swiper-button-next',
    },
    pagination: {
      el: ".reviews .swiper-pagination",
      type: "fraction",
      formatFractionCurrent: function (current) {
        return current < 10 ? '0' + current : current;
      },
      formatFractionTotal: function (total) {
        return total < 10 ? '0' + total : total;
      },
      renderFraction: function (current, total) {
        return '<span class="swiper-pagination-current">' + current + '</span>' + '<span class="divider"></span>' + '<span class="swiper-pagination-total">' + total + '</span>';
      },
      clickable: true
      
    },
    // Брейкпоінти
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 10,
        initialSlide: 1,
        centeredSlides: true
      },
      480: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1268: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
      } 
    },
   
    // Події
    on: {

    }
  });
  new Swiper('.address__slider', { 
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,

    //touchRatio: 0,
    //simulateTouch: false,
    //loop: true,
    //preloadImages: false,
    //lazy: true,

    /*
    // Ефекти
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    */

    // Пагінація
    /*
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    */

    // Скроллбар
    /*
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    */

    // Кнопки "вліво/вправо"
    navigation: {
      prevEl: '.address .swiper-button-prev',
      nextEl: '.address .swiper-button-next',
    },
   
    // Події
    on: {

    }
  });
  new Swiper('.slider-offices__slider.slider-1', { 
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,

    //touchRatio: 0,
    //simulateTouch: false,
    //loop: true,
    //preloadImages: false,
    //lazy: true,

    /*
    // Ефекти
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    */

    // Пагінація
    /*
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    */

    // Скроллбар
    /*
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    */

    // Кнопки "вліво/вправо"
    navigation: {
      prevEl: '.slider-offices-1 .swiper-button-prev',
      nextEl: '.slider-offices-1 .swiper-button-next',
    },
    pagination: {
      el: ".slider-offices-1 .swiper-pagination",
      type: "fraction",
      formatFractionCurrent: function (current) {
        return current < 10 ? '0' + current : current;
      },
      formatFractionTotal: function (total) {
        return total < 10 ? '0' + total : total;
      },
      renderFraction: function (current, total) {
        return '<span class="swiper-pagination-current">' + current + '</span>' + '<span class="divider"></span>' + '<span class="swiper-pagination-total">' + total + '</span>';
      },
      clickable: true
      
    },
   
    // Події
    on: {

    }
  });
  new Swiper('.slider-offices__slider.slider-2', { 
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,

    //touchRatio: 0,
    //simulateTouch: false,
    //loop: true,
    //preloadImages: false,
    //lazy: true,

    /*
    // Ефекти
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    */

    // Пагінація
    /*
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    */

    // Скроллбар
    /*
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    */

    // Кнопки "вліво/вправо"
    navigation: {
      prevEl: '.slider-offices-2 .swiper-button-prev',
      nextEl: '.slider-offices-2 .swiper-button-next',
    },
    pagination: {
      el: ".slider-offices-2 .swiper-pagination",
      type: "fraction",
      formatFractionCurrent: function (current) {
        return current < 10 ? '0' + current : current;
      },
      formatFractionTotal: function (total) {
        return total < 10 ? '0' + total : total;
      },
      renderFraction: function (current, total) {
        return '<span class="swiper-pagination-current">' + current + '</span>' + '<span class="divider"></span>' + '<span class="swiper-pagination-total">' + total + '</span>';
      },
      clickable: true
      
    },
   
    // Події
    on: {

    }
  });
};

let bodyLockStatus = true;
let bodyLockToggle = (delay = 500) => {
	if (document.documentElement.classList.contains('lock')) {
		bodyUnlock(delay);
	} else {
		bodyLock(delay);
	}
}
let bodyUnlock = (delay = 500) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {
		setTimeout(() => {
			
			document.documentElement.classList.remove("lock");
		}, delay);
		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
}
let bodyLock = (delay = 500) => {
	let body = document.querySelector("body");
	if (bodyLockStatus) {
		
		document.documentElement.classList.add("lock");

		bodyLockStatus = false;
		setTimeout(function () {
			bodyLockStatus = true;
		}, delay);
	}
}

function menuInit() {
	if (document.querySelector(".icon-menu")) {
		document.addEventListener("click", function (e) {
			if (bodyLockStatus && e.target.closest('.icon-menu')) {
        document.querySelector(".icon-menu span").textContent = document.querySelector(".icon-menu span").textContent === 'menu' ? 'close' : 'menu';
				bodyLockToggle();
				document.documentElement.classList.toggle("menu-open");
			}
		});
	};
}
function menuOpen() {
	bodyLock();
	document.documentElement.classList.add("menu-open");
}
function menuClose() {
	bodyUnlock();
	document.documentElement.classList.remove("menu-open");
}

menuInit();