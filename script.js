//javascript interview codeing test

//Example 1
// how to reverse string in function method


// function Reverse(){
//     // let letters= "jayashanthi";
//     // let numletters= letters.split('').reverse('').join('');
//     // console.log(numletters);

// }
// Reverse();

// for(var i=1; i<=4; i++){
//     console.log("* ".repeat(i));
//     }

// function printPyramid(n) {
//     for (let i = 1; i <= n; i++) {
//         let str = ' '.repeat(n - i);
//         str += '*'.repeat(2 * i - 1);
//         console.log(str);
//     }
// }

// printPyramid(5);

//Example 2

//how to remove duplicate elements from an array

// let array = [1,2,3,4,5,6,3,2,1,2,4,5,2,2];
// let newarr = array.filter((value, index, self)=>{
//     return self.indexOf(value)===index;
//     console.log
// })

//Example 3

// let employees ={employee:[
//     {
//         id:1,
//         name:"Justin", 
//         numberOfCom:["brillo","markone","solver",{asd : [1,2,3]}],
//         location:"chennai",
//         DOJ:2023},
//     {
//         id:2,
//         name:"raj", 
//         numberOfCom:"markone" , 
//         location:"chennai",
//         DOJ:2017
//     },
//     {
//         id:3,
//         name:"Bosco", 
//         numberOfCom:"markone", 
//         location:"chennai",
//         DOJ:2017},
//     {
//         id:4,
//         name:"jaya", 
//         numberOfCom:"markone", 
//         location:"chennai",
//         DOJ:2021
//     },
// ]} 
// // for(var index in employees){
// //     console.log(employees[index]["id"]);
// // }
// //  var person = document.getElementById("employees");
// //  person.innerHTML += "<h1>"+ + ""

// let text="";
// for(let x = 0; x <employees.employee.length; x++){
//     // text += employees[x][0].id.name.numberOfCom.location.DOJ + " ";
    
//     console.log(" ID: ",employees.employee[x].id);
//     console.log(" Name: ",employees.employee[x].name);
//     console.log(" DOJ: ",employees.employee[x].DOJ);
//     console.log(" NumberOfCom:: ",employees.employee[x].numberOfCom);
//     console.log(" Location: ",employees.employee[x].location);
// }
// console.log(employees.employee[0].numberOfCom[3].asd[2]);
//document.getElementById("demo").innerHTML=text[0].name;
// console.log(text);
// for (var i = 0; i < employees.employee.length; i++) {
//     console.log(employees.employee[i].id);
// }

// for (const value of Object.values(employees)) {
//     for (let v in value) {
//         console.log(value[v].employee[0]);
//     }
// }

//console.log(employees["employee"][3]);

function ReverseWords(){
    let string = "Reactjs Tutoreial";
    //let ReverseString=string.split('').reverse('').join('');
    // let text = '';
    // for(let x=0; x>string.length){
    //     text += x;
    // }
    let text="";
    for(let x=string.length-1; x >=0; x--){
        text +=string[x]+".";
    }

    console.log(text);
}
ReverseWords();
// Initializing numbers array
let numbers = [10, 23, 12, 21];

// Declaring empty Even array
let even = [];
for(let i = 0; i < numbers.length; i++) {
       if (numbers[i] % 2 == 0)
       even.push(numbers[i]);
}

// Printing output
console.log(`Even numbers in an array are: ${even}`);



