function stickyHeader() {
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');

    // const headerHeight = header.offsetHeight;
    const heroHeight = hero.offsetHeight;

    window.addEventListener('scroll', () => {
        let scrollDistance = window.scrollY;
        // console.log(scrollDistance);

        if(scrollDistance >= heroHeight * 0.25) {
            header.classList.add('fixxed');
        } else {
            header.classList.remove('fixxed');
        }
    });
    
}

export default stickyHeader;