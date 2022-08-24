"use strict"

const person = {
    firstName: "Dorcas",
    lastName: "Ololade",
    gender : "F",
    age: 18,

fullName() { 
    const getTitle = () => {
    return this.gender == "f" ? "Mrs." : "Mr. ";
};
return `$ {getTitle()} ${this.lastName} ${this.firstName}`;
    
},

isMinor(){
    return this.age < 38
},

};
console.log(person.fullName)
console.log(person.isMinor)



let age = prompt("Enter you age ", 18)
let welcome = (age < 18) ?
() => alert("Hello"):
() => alert("Greetins ");

welcome();



function ask(question, yes, no){
    if(confirm(question)) yes();
    else no();
}

ask(
    "Do you agree?"?
   () => alert("you agreed"):
   () => alert("you cancelled")
)

let user = {
    name: "John",
    age : 30
}

alert(user.name)
alert(user.age)