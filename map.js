// const numbers = [2,8,4,6,3];
// const  output = [];

// for(const number of numbers){
// const duble = number * 2;
// output.push(duble);
// }
// console.log(output);

function getDouble(numbers){
    const  output = [];
    for(const number of numbers){
        const duble = number * 2;
        output.push(duble);
        }
        return output;
}
const numbers = [2,8,4,6,3];
const result = getDouble(numbers);
// console.log(result);

// map()//
const fiveTiems =[1,2,3,4,5].map(x=> x * 5);
console.log(fiveTiems);