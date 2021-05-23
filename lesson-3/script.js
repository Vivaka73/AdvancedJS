const makeGETRequest(url, callback) {
  let xhr;

  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) { 
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 150) callback(xhr.responseText);
      else reject('Error')
    }
  }

  xhr.open('GET', url, true);
  xhr.send();
};

const products = [
    { title: 'Shirt', price: 50 },
    { title: 'Socks', price: 150 },
    { title: 'Jacket', price: 200 },
    { title: 'Shoes', price: 250 },
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

    clearAll() {
      this.products = [];
    }

    addItem() {
        
    }

    removeItem() {}
  };

  class BasketItem extends ProductsItem {
    constructor(...args) {
      super(...args);
      this.product = 0;
    }

    addOne(product) {
      let basketItem = this.products.filter(el => el.title == product.title)[0]

        if (basketItem != undefined) {
            basketItem.addQuantity();
        } else { 
            let item = new BasketItem(product);
            this.products.push(item);
        }
    }

    removeOne(index) {
      this.products.splice(index, 1);
        this.render();
    }
  };
  const addItemToBasket = () => {
    let productName = event.target.dataset.productName;
    let product = allProducts[productName];
    cart.addItemToBasket(product);
}

const deleteItemFromBasket = () => {
    let index = event.target.dataset.productIndex;
    cart.deleteItemFromBasket(index);
}