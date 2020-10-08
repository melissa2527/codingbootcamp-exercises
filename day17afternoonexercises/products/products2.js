class Products {
    constructor(name, price, quantity) {

    this.name = name;
    this.price = price;
    this.quantity = quantity;
    }

    fullItem() {
        return `Type of wine: ${this.name}. Cost: ${this.price} euros. Quantity: ${this.quantity}`
    }
    sell() {
        if (this.quantity > 0) {
        this.quantity -= 1
        } 
    }
    store(count) {
        this.quantity += count
    }  
}
const items = [
    new Products('pinot grigio', 10, 12),
    new Products('chardonnay', 15, 30),
    new Products('riesling', 13, 8),
    new Products('sauvignon blanc', 18, 25),
    new Products('rioja', 5, 10),
    new Products('gruner veltliner', 16, 5),
    new Products('albarino', 7, 3)
]
const tbody = document.querySelector('.products');

items.forEach((wine) => {
    console.log(wine.fullItem())
    const wineItem = document.createElement('div')
    wineItem.innerHTML += 
        `<div class="name">Type of wine: ${wine.name} </div>
        <div class="cost">Cost: ${wine.price}</div>
        <div class="quantity">${wine.quantity} in stock</div>
        <button class="buy__button">Buy</button>`

        const response = wineItem.querySelector('.quantity')
        const buyBtn = wineItem.querySelector('.buy__button');
        buyBtn.addEventListener('click', () => {
            // buyBtn.style.backgroundColor = 'lightblue'
            wine.sell()
            // wine.totalCost()
            response.textContent = `There are ${wine.quantity} bottles in stock.`
        })
        tbody.appendChild(wineItem)
})
