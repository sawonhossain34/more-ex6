class instructor{
    name;
    designation = 'web course instructor'
    teme = 'web teme'
    location;

    constructor(name,location){
        this.name = name;
        this.location = location;
    }
    starSupportSection(time){
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module){
        console.log(`create Quiz for module${module}`)
    }
}

const ammir = new instructor('ammir' , 'dhaka');
console.log(ammir);
ammir.starSupportSection('9.00');
ammir.createQuiz('60');