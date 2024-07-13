function checkingActiveButtons(basket, selectorBtn, selectorCard) {
    const buttons = document.querySelectorAll(selectorBtn);
    buttons.forEach(item => {
        const card = item.closest(selectorCard);
        const id = card.dataset.productId;
        const toBasket = card.querySelector('.card__link-basket');
        const isInBasket = basket.includes(id);

        item.disabled = isInBasket;
        item.classList.toggle('active', isInBasket);
        item.textContent = isInBasket ? 'В кошику' : 'Замовити';

        if (toBasket && item.classList.contains('active')) {
            toBasket.classList.add('active');
        }
    });
}
export default checkingActiveButtons;