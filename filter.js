const products = [
    {id:1,Name:'iphone',price:100000},
    {id:1,Name:'phone',price:80000},
    {id:1,Name:'watch',price:30000},
    {id:1,Name:'tablet',price:20000},
]
const productsPrice = products.filter(product => product.price >= 50000);
console.log(productsPrice);
