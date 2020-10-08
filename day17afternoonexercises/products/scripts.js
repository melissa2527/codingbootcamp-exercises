// STEP 1 - CREATE AN ARRAY WITH MANY OBJECTS
// const makeup = [{
//     name: 'Eyeliner',
//     price: 30,
//     quantity: 10,
// },
// {
//     name: 'Eye shadow',
//     price: 20,
//     quantity: 16,
// },
// {
//     name: 'Mascara',
//     price: 22,
//     quantity: 4,
// },
// {
//     name: 'Blush',
//     price: 10,
//     quantity: 2,
// },
// {
//     name: 'Foundation',
//     price: 40,
//     quantity: 30,
// },
// {
//     name: 'Concealer',
//     price: 12,
//     quantity: 15,
// },
// {
//     name: 'Nail Polish',
//     price: 8,
//     quantity: 10,
// },
// {
//     name: 'Lip gloss',
//     price: 10,
//     quantity: 13,
// }
// ]

// STEP 1 CLASS
class Makeup {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    sell() {
      if (this.quantity > 0) {
        this.quantity--
      }  
    }
    store(count) {
        this.quantity++
    }
}
const makeupItems = [
    new Makeup('Eyeliner', 20, 10),
    new Makeup('Mascara', 20, 8),
    new Makeup('Lip gloss', 10, 13),
    new Makeup('Concealer', 12, 15),
    new Makeup('Eye Shadow', 18, 16),
    new Makeup('Blush', 10, 2),
    new Makeup('Foundation', 40, 10),
]