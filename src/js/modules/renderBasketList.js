import checkingRelevanceValueBasket from "./checkingRelevanceValueBasket";
import { getBasketToLocalStorage, setBasketToLocalStorage } from "./localStorage";

function renderBasketList() {
    let productData = [];
    let basketContainer = document.querySelector('.basket-card');
    const orderButton = document.querySelector('.basket-list__btn-order');

    basketContainer.addEventListener('click', (event) => {
        getPlus(event);
        getMinus(event);
        delProductBasket(event, '.basket-cart__close');
    });

    async function getProduct() {
        try {
            if(productData.length === 0) {
                let res = await fetch('./../data/all.json');
                if(!res.ok) {
                    throw new Error(res.statusText);
                }
                productData = await res.json();
                console.log(productData);
            }
            loadProduct(productData);
        } catch(error) {
            console.log(error);
        }
    }
    getProduct();
    
    function loadProduct(data) {
        basketContainer.textContent = '';
        if(!data || data.length === 0) return;

        checkingRelevanceValueBasket(data);

        const basket = getBasketToLocalStorage();
        if(!basket || basket.length === 0) {
            displayEmptyBasket();
            return;
        }

        const findProduct = data.filter(item => basket.includes(String(item.id)));
        if(!findProduct || findProduct.length === 0) {
            displayEmptyBasket();
            return;
        }
        renderProductBasket(findProduct);
    }

    function renderProductBasket(data) {
        const table = document.querySelector('.basket-card');
        data.forEach(card => {
            const { id, img, title, price } = card;
            const cardItem = `
            <tr data-product-id=${id}>
                <td>
                <button class="basket-cart__close">
                    <svg class="icon icon--close">
                    <use href="./img/svgsprite/sprite.symbol.svg#close"></use>
                    </svg>
                </button>
                </td>
                <td>
                <img class="basket-cart__photo-product" src="./../../img/${img}" alt='${title}'/>
                </td>
                <td><h4 class="basket-cart__title">${title}</h4></td>
                <td>
                <button class="basket-cart__minus">
                    -
                </button>
                </td>
                <td><span class="basket-cart__count">1</span></td>
                <td>
                <button class="basket-cart__plus">+</button>
                </td>
                <td><span class="basket-cart__price">${price} грн.</span></td>
            </tr>
            `;
            table.insertAdjacentHTML('beforeend', cardItem);
        });
        const cardTotal = `
            <tr><td colspan="7" style="text-align: right;">Сума: <span class="basket-cart__total">${getTotalPrice()}</span>  грн.</td></tr>
        `;
        table.insertAdjacentHTML('beforeend', cardTotal);

        if(orderButton) {
            orderButton.style.display = 'flex';
        }
    }

    function delProductBasket(event, selectorElem) {
        const targetElem = event.target.closest(selectorElem);
        if(!targetElem) return;

        const card = targetElem.closest('tr');
        const id = card.dataset.productId;
        const basket = getBasketToLocalStorage();

        const newBasket = basket.filter(item => item !== id);
        setBasketToLocalStorage(newBasket);

        getProduct();
    }

    function getTotalPrice() {
        const basketItems = document.querySelectorAll('.basket-card tr[data-product-id]');
        let sum = 0;

        basketItems.forEach(item => {
            const priceString = item.querySelector('.basket-cart__price');
            const countString = item.querySelector('.basket-cart__count');

            const price = parseFloat(priceString.textContent.replace(/\s*грн\./i, ''));
            const count = parseInt(countString.textContent);
            
            sum += price * count;
        });
        console.log('сумма: ', sum);
        return sum;
    }

    function updateTotalPrice() {
        const out = document.querySelector('.basket-cart__total');
        console.log('контейнер дя вывода: ', out);
        const price = getTotalPrice();
        out.textContent = price;
    }

    function getPlus(event) {
        const targetPlus = event.target.closest('.basket-cart__plus');
        if(!targetPlus) return;

        const productItem = targetPlus.closest('tr');
        let countString = productItem.querySelector('.basket-cart__count');
        let count = parseInt(countString.textContent);
        count++;
        countString.textContent = count;
        updateTotalPrice();
    }

    function getMinus(event) {
        const targetMinus = event.target.closest('.basket-cart__minus');
        if(!targetMinus) return;

        const productItem = targetMinus.closest('tr');
        let countString = productItem.querySelector('.basket-cart__count');
        let count = parseInt(countString.textContent);
        count--;
        countString.textContent = count;

        if(count <= 0) {
            delProductBasket(event, '.basket-cart__minus');
            return;
        }
        updateTotalPrice();
    }

    function displayEmptyBasket() {
        basketContainer.textContent = '';
        const message = document.createElement("p");
        message.classList.add('basket-list__message', 'subtitle');
        message.textContent = 'Кошик порожній';
        document.querySelector('.basket-list__title').insertAdjacentElement('afterend', message);
        if(orderButton) {
            orderButton.style.display = 'none';
        }
    }
}
export default renderBasketList;