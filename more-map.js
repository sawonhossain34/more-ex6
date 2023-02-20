const numbers =[12,56,87,44];
const half = numbers.map(n => n/2);
const third = numbers.map(n => n/3);
// console.log(half);
// console.log(third);




// const friends = ['sawon hossain', 'alamin islam', 'fahim muntasir','kibria rahaman'];
// const firstLatter =friends.map(name => name[0]);
// console.log(firstLatter);
// const friendsLength = friends.map(friend => friend.length);
// console.log(friendsLength);




const products = [
    {id:1,Name:'iphone',price:100000},
    {id:1,Name:'phone',price:80000},
    {id:1,Name:'watch',price:30000},
    {id:1,Name:'tablet',price:20000},
]
const productsPrice = products.map(product => product.price);
console.log(productsPrice);
