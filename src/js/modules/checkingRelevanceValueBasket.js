import { getBasketToLocalStorage, setBasketToLocalStorage } from "./localStorage";

function checkingRelevanceValueBasket(data) {
    const basket = getBasketToLocalStorage();

    basket.forEach((basketId, index) => {
        const existingProduct = data.some(item => item.id === Number(basketId));
        if(!existingProduct) {
            basket.slice(0, index);
        }
    });
    setBasketToLocalStorage(basket);
}

export default checkingRelevanceValueBasket;
