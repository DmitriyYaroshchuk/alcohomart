function showOrderForm(selectorOpen, selectorModal, selectorClose, clickOverLay=true) {
    const open = document.querySelector(selectorOpen);
    const modal = document.querySelector(selectorModal);
    const close = document.querySelector(selectorClose);

    open.addEventListener('click', () => {
        let paddingOffSet = window.innerWidth - document.body.offsetWidth + 'px';
        modal.classList.toggle('active');
        modal.style.paddingRight = paddingOffSet;
        document.body.classList.toggle('no-scroll');
        document.body.style.paddingRight = paddingOffSet;
    });

    modal.addEventListener('click', (event) => {
        if(event.target === modal && clickOverLay) {
            modal.classList.toggle('active');
            modal.style.paddingRight = '0px';
            document.body.classList.toggle('no-scroll');
            document.body.style.paddingRight = '0px';
        }
    });

    close.addEventListener('click', () => {
        modal.classList.toggle('active');
        modal.style.paddingRight = '0px';
        document.body.classList.toggle('no-scroll');
        document.body.style.paddingRight = '0px';
    });
}
export default showOrderForm;