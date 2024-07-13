import checkingRelevanceValueBasket from "./checkingRelevanceValueBasket";
import handleCardClick from "./handleClick";
import { getBasketToLocalStorage } from "./localStorage";
import checkingActiveButtons from "./checkingActiveButtons";

function renderProduct(url, containerSelector, imgPath) {
    let productData = [];
    
    const products = document.querySelector('.products__inner');
    products.addEventListener('click', (event) => {
        handleCardClick(event, '.card__btn', '.card')
    });

    async function getProducts() {
        try {
            if(productData.length === 0) {
                const res = await fetch(url);
                if(!res.ok) {
                    throw new Error(res.statusText);
                }
                productData = await res.json();
            }

            createCards(productData);

            checkingRelevanceValueBasket(productData);

            const basket = getBasketToLocalStorage();
            checkingActiveButtons(basket, '.card__btn', '.card');
            
        } catch(error) {
            console.error(error);
        }
    }
    getProducts();


    function createCards(data) {
        data.forEach(item => {
            const { id, img, title, price } = item;
            const cardItem = `
                <div class="swiper-slide">
                    <arcticle class="card" data-product-id=${id}>
                        <a class="card__link-basket" href="./basket.html">
                            <svg class="icon icon--buy">
                                <use href="./img/svgsprite/sprite.symbol.svg#buy"></use>
                            </svg>
                        </a>
                        <img src="./../img/${imgPath}/${img}"/>
                        <h3 class="card__title">${title}</h3>
                        <p class="card__price">${price}грн</p>
                        <button class="card__btn">Замовити</button>
                        <a class="card__link" href="./../card.html?id=${id}"></a>
                    </arcticle>
                </div>
            `;
            document.querySelector(containerSelector).insertAdjacentHTML('beforeend', cardItem);
        });
    }
}
export default renderProduct;