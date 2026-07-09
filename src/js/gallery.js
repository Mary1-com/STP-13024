import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

new Swiper('.mySwiper', {
  modules: [Pagination, Navigation],

  slidesPerView: 1,
  spaceBetween: 24,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.my-gallery-next',
    prevEl: '.my-gallery-prev',
  },

  breakpoints: {
    1440: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});