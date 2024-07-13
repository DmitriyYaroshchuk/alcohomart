function mobileNav() {

	function bindMobileNav(selectorBtn, selectorModal, selectorMenuIcon) {
		const btn = document.querySelector(selectorBtn);
		const modal = document.querySelector(selectorModal);
		const menuIcon = document.querySelector(selectorMenuIcon);

		btn.addEventListener('click', () => {
			const isActive = modal.classList.toggle('active');

			if (isActive) {
				let paddingOffSet = window.innerWidth - document.body.offsetWidth + 'px';
				modal.style.paddingRight = paddingOffSet;
				document.body.style.paddingRight = paddingOffSet;
			} else {
				modal.style.paddingRight = '0px';
				document.body.style.paddingRight = '0px';
			}
			menuIcon.classList.toggle('nav-icon--active');
			document.body.classList.toggle('no-scroll');
		});
	}
	bindMobileNav('.mobile-nav-btn', '.mobile-nav', '.nav-icon');
}

export default mobileNav;