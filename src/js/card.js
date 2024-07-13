import mobileNav from "./modules/mobile-nav";
import renderCard from "./modules/renderCard";
import stickyHeader from "./modules/stickyHeader";
import getAnchorLinks from "./modules/getAnchorLinks";

document.addEventListener('DOMContentLoaded', () => {
	stickyHeader();
    mobileNav();
    renderCard();
    getAnchorLinks('.mobile-nav');
});