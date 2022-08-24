console.log("from external script")
let age = 16;
if(age >= 18){
    console.log("you can campaign for peter obi")
}
else{
    console.log("kindly mind your business");
}

// let age;
// if(birthday >= 18 )
//  age = "major"
// else age = "minort
// console.log(age)
// let status = age >= 18 ? 'Major' : "minor";
// console.log(status);

let partyman = `He is a ${ age >= 18 ? 'Major' : "minor"}, he can ${age >= 18 ? "" : "not"} vote`
console.log(partyman);

let day = "Sunday"
switch(day){
    case "Monday":
        case "Tuesday":
            console.log("Its a week day")
            break;

    case "Saturday":
    case "Sunday":
        
        console.log("Its a weekend, enjoy")
        break;
    default: console.log("you have problem");
}

for(let i = 1; i <= 10; i++){
    console.log(i);
    
}
let count = 1;
while(count <= 10){
    console.log(count);
    count++;
}
count = 1;
do{
    console.log(count);
    count++;
}
while(count <= 10)


function sum(a, b) {
    return a + b
    
}
let add = sum(3, 5);
console.log(add)

function multiply(b, b){
return b * b
}

let multy = multiply(5 , 5);
console.log(multy);

const square = num => num ** 2;
let s = "good"