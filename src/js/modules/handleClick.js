import { getBasketToLocalStorage, setBasketToLocalStorage } from "./localStorage";
import checkingActiveButtons from "./checkingActiveButtons";

function handleCardClick(event, selectorBtn, selectorCard) {
    const targetBtn = event.target.closest(selectorBtn);
    if(!targetBtn) return;

    const card = targetBtn.closest(selectorCard);
    const id = card.dataset.productId;
    const basket = getBasketToLocalStorage();

    if(basket.includes(id)) return;

    basket.push(id);
    setBasketToLocalStorage(basket);
    checkingActiveButtons(basket, selectorBtn, selectorCard)
}

export default handleCardClick;