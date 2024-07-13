import mobileNav from "./modules/mobile-nav";
import renderBasketList from "./modules/renderBasketList";
import stickyHeader from "./modules/stickyHeader";
import showOrderForm from "./modules/showOrderForm";
import validateForm from "./modules/validateForm";
import getAnchorLinks from "./modules/getAnchorLinks";

document.addEventListener('DOMContentLoaded', () => {
	stickyHeader();
    mobileNav();
    renderBasketList();
    showOrderForm('.basket-list__btn-order', '.order', '.order-form__close');
    validateForm('.order-form');
    getAnchorLinks('.mobile-nav');
});