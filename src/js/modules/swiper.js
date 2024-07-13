import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperSlider() {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      1000: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      568: {
        slidesPerView: 2,
      },
      290: {
        slidesPerView: 1,
      }
    },
  });
  const swiperReview = new Swiper('.review-swiper', {
    slidesPerView: 2,
    spaceBetween: 40,
    loop: true,
  
    pagination: {
      el: '.review-swiper .swiper-pagination',
      clickable: true
    },

    breakpoints: {
      769: {
        slidesPerView: 2,
      },
      290: {
        slidesPerView: 1,
      }
    },
  });
}

export default swiperSlider;