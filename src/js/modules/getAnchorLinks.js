function getAnchorLinks(selectorModal) {
    const links = document.querySelectorAll('a[href^="#"]');

        links.forEach(link => {
            link.addEventListener('click', () => {
                const modal = document.querySelector(selectorModal);
                if (modal) {
                    modal.classList.remove('active');
                    document.querySelector('body').classList.remove('no-scroll');
                    document.querySelector('.nav-icon').classList.remove('nav-icon--active');
                }
            });
        });
}
export default getAnchorLinks;