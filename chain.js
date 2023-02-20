// const users = { [ id : 1, name:'abul',job: 'doctor'] };
// console.log(users[0].job);

const data = {
    count : 5000,
    data :[
        {id:1 ,name:'sawon',job:'leder'},
        {id:1 ,name:'babul',job:'leder'}
    ]
}

const firstJob = data.data[1].name;
// console.log(firstJob);

const users = {
    id: 50001,
    name:'sawon',
    address:{
        street:{first:'3/4 cocchu chat AudioListener',
                second:'thrid floor',
                third:'left side'},
        postoffice:'cantonment',
        city : 'dhaka'
    }
}
const userFloor = users.address.street.third;
console.log(userFloor)