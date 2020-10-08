const groceryList = [
    {
        name: 'apples',
        amount: 3
    },
    {
        name: 'wine',
        amount: 5
    },
    {
        name: 'beer',
        amount: 6
    },
    {
        name: 'bread',
        amount: 2
    }]

const groceryItemElm = document.querySelector('#list');
groceryList.forEach((item) => {
    groceryItemElm.innerHTML += `<div>${item.name}, ${item.amount}</div>`
    
    
    const btnAdd = document.querySelector('.btn-add');
    btnAdd.addEventListener('click', () => {
        const newItem = document.querySelector('.new-item').value;
        // groceryList.push(`${newItem}`)
        console.log(groceryList.push(`${newItem}`))
    })
})
