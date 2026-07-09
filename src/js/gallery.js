import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const swiperElem = document.querySelector('#gallery-swiper');
if (swiperElem) {

  const paginationSelector = swiperElem.dataset.pagination;
  const nextSelector = swiperElem.dataset.next;
  const prevSelector = swiperElem.dataset.prev;


  new Swiper(swiperElem, {
    modules: [Pagination, Navigation],

    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,

    pagination: {
      el: paginationSelector,
      clickable: true,
    },

    navigation: {
      nextEl: nextSelector,
      prevEl: prevSelector,
    },

    breakpoints: {
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
}