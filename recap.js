// 1. var
// 2.let 
// 3. const 


// 2 default parameter
function calculateSalary(salary , tax = 0.25 , bonus = 0){
    const remaining = salary -salary*tax;
    const total = remaining + bonus;
    return total;
}
// const result = calculateSalary(10, 20, 500);
// console.log(result);

// 3. template string
const elementHTML =`
<div>
<H3>Name :</H3>
<p>Address :</p>
<p>Salary :${calculateSalary(10000,0,0)}</p>
<p>Salary ;${numbers[2]}</p>
</div>

`;

// 4. Arrow function
const dubleIt = x => x*2;
const calculateSalary2 = (salary , tax , bonus) => salary * 2 + bonus;

// 5. spread operation
const ages = [12,45,65,45,32];
const newAges = [...ages, 12,36,54];
console.log(newAges);

//6. destrustring
const {x,z,...c} = {x:25 , y:46, z:63,name:'Sakib Al Hasan', Salary:450000};
