const products = [
    { title: 'Shirt', price: 50 },
    { title: 'Socks', price: 150 },
    { title: 'Jacket', price: 200 },
    { title: 'Shoes', price: 250 },
    { title: 'Bags', price: 300 },
    { title: 'Polos', price: 350 },
];

const renderProductsItem = (title, price) => {
    return `<div class="products-item"><h3>${title}</h3><p>${price}</p><button class="by-btn">В корзину</button></div>`;
};

const renderProductsList = list => {
    document.querySelector('.products-list').insertAdjacentHTML('beforeend', list.map(item => renderProductsItem(item.title, item.price)).join(''));
};

renderProductsList(products);

getTotalsum() {
    let totalSum = document.getElementById(''); 
    let sum = 0;
    this.products.forEach (product => { 
        sum += product.price
    });
    totalSum.innerText = `Итого  ${sum} рублей`;
};

class Basket extends ProductsList {
    constructor(...args) {
      super(...args);
    }

    clearAll() {}

    addItem() {}

    removeItem() {}
  };

  class BasketItem extends ProductsItem {
    constructor(...args) {
      super(...args);
      this.product = 0;
    }

    addOne() {}

    removeOne() {}
  };