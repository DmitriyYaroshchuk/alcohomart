export function getBasketToLocalStorage() {
    const cardDataJSON = localStorage.getItem('basket');
    return cardDataJSON ? JSON.parse(cardDataJSON) : [];
}

export function setBasketToLocalStorage(basket) {
    const basketCounter = document.querySelectorAll('.basket__counter');
    basketCounter.forEach(item => {
        localStorage.setItem('basket', JSON.stringify(basket));
        item.textContent = basket.length;
    });
}