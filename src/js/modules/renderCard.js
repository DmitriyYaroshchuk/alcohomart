import checkingRelevanceValueBasket from "./checkingRelevanceValueBasket";
import { getBasketToLocalStorage } from "./localStorage";
import handleCardClick from "./handleClick";
import checkingActiveButtons from "./checkingActiveButtons";

function renderCard() {
    let productData = [];
    const cardContainer = document.querySelector('.product-info__details');

    cardContainer.addEventListener('click', (event) => {
        console.log('click')
        handleCardClick(event, '.chars__btn--add', '.product-info')
    });

    async function getProducts() {
        try {
            if(productData.length === 0) {
                let res = await fetch('./../data/all.json');
                if(!res.ok) {
                    throw new Error(res.statusText);
                }
                productData = await res.json();
                console.log(productData);
            }
            loadProductDetails(productData);

            checkingRelevanceValueBasket(productData);
        
            const basket = getBasketToLocalStorage();
            checkingActiveButtons(basket, '.chars__btn--add', '.product-info');
            
        } catch(error) {
            console.error(error);
        }
    }
    getProducts();

    function getParameterFromURL(param) {
        const urlParam = new URLSearchParams(window.location.search);
        return urlParam.get(param);
    }

    function loadProductDetails(data) {
        if(!data || data.length === 0) return;

        

        const productId = Number(getParameterFromURL('id'));
        console.log(productId);
        if(!productId) return;

        const findProdInData = data.find(item => item.id === productId);
        if(!findProdInData) return;

        renderInfoCard(findProdInData);
    }


    function renderInfoCard(data) {
        const { id, img, title, price, producer, strengthen, country, endurance, volume, description } = data;
        document.querySelector('.product-info').dataset.productId = id;
        document.querySelector('.product-info__details img').src = `./../img/${img}`;
        document.querySelector('.chars__val--name').textContent = title;
        document.querySelector('.chars__price').textContent = `Ціна: ${price}грн.`;
        document.querySelector('.chars__val--producer').textContent = producer;
        document.querySelector('.chars__val--strength').textContent = strengthen;
        document.querySelector('.chars__val--country').textContent = country;
        document.querySelector('.chars__val--endurance').textContent = endurance;
        document.querySelector('.chars__val--volume').textContent = volume;
        document.querySelector('.product-info__desc p').textContent = description;
    }
}

export default renderCard;