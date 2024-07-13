import aos from './modules/aos.js';
import mobileNav from './modules/mobile-nav.js';
import renderProduct from './modules/renderProduct.js';
import stickyHeader from './modules/stickyHeader.js';
import swiperSlider from './modules/swiper.js';
import getAnchorLinks from './modules/getAnchorLinks.js';
import validateForm from './modules/validateForm.js';


document.addEventListener('DOMContentLoaded', () => {
    stickyHeader();
    mobileNav();
    aos();
    getAnchorLinks('.mobile-nav');
    renderProduct('../data/wheat-vodka.json', '.products-swiper--wheat-vodka .swiper-wrapper', 'wheat-vodka');
    renderProduct('../data/cognac.json', '.products-swiper--cognac .swiper-wrapper', 'cognac');
    renderProduct('../data/fruits-vodka.json', '.products-swiper--fruits-vodka .swiper-wrapper', 'fruits-vodka');
    renderProduct('../data/finlandia-vodka.json', '.products-swiper--finlandia-vodka .swiper-wrapper', 'finlandia-vodka');
    swiperSlider();
    validateForm('.contacts-form');
});


