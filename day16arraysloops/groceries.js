GROCERY LIST - EXERCISE 3 - COMPLETE Level 1
const groceryItems = ['wine', 'pizza', 'bread', 'cereal', 'avocado']

const listElm = document.getElementById('list');
groceryItems.forEach((item) => {
    listElm.innerHTML += `<div class="item">
    <div class="item__name"> ${item}</div>
    </div>`
})

GROCERY LIST - EXERCISE 3 - Level 2
const groceryItems = [
    {
    name: 'wine',
    quantity: 3,
    }, {
    name: 'pizza', 
    quantity: 4,
    }, {
    name: 'bread',
    quantity: 1, 
    }, {
    name: 'cereal',
    quantity: 3,
    }, {
    name: 'avocado',
    quantity: 6
    }]

const listElm = document.getElementById('list');
groceryItems.forEach((item) => {
    listElm.innerHTML += `<div class="item">
    <div class="item__name"> ${item.name}</div>
    <div class="item__quantity">${item.quantity}</div>
    </div>`
})
const newGroceries = document.querySelector('#new-groceries');
const newGroceriesQuantity = document.querySelector('.new-groceries-quantity').value;
const newQuantity = Number(newGroceriesQuantity);
const submitElm = document.querySelector('.submit-button');

const listElm = document.getElementById('list');

submitElm.addEventListener('click', addMore => {
    const newGroceries = document.querySelector('.new-groceries');
    listElm.innerHTML += listElm.push(newGroceries)
})


groceryItems.forEach((item) => {
    listElm.innerHTML += `<div class="item">
    ${item.name}, ${item.quantity}
    </div>`
})

