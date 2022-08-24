let admin;
let name = "John"
admin = name;
alert(admin)

let ag = prompt("How old are you?");
alert(`my age is ${age} years old`)

let question = confirm("Are you a lady?");
alert(question)

let webPage = window.prompt("what is your name?")
console.log(webPage)

let value = true;
alert(typeof value);

value = String(value);
alert(typeof value);

let striing = 1234;
alert(typeof striing);

striing = String("This is so wrong");
alert(typeof striing)
let age = Number("an arbitrary string")
alert(age)

for(a = 1,  b = 3, c = a * b; a < 10; a++){
    console.log(a)
}