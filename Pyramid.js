//Example 1: Upper pyramid

// let n = 5; 
// for (let i = 1; i <= n; i++) { 
// 	let str = "* "; 
// 	let space = ' '; 
// 	console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
// }

// //Example 2: Inverted pyramid

// let n = 5; 
// for (let i = n; i >= 1; i--) { 
// 	let str = "* "; 
// 	let space = ' '; 
// 	console.log(space.repeat((n - i)) + str.repeat(i * 2 - 1)); 
// }

// //Example 3: Left inverted pyramid

// let n = 5; 
// for (let i = 1; i <= n; i++) { 
// 	let str = "* "; 
// 	let space = ' '; 
// 	console.log(space.repeat((n - i)) + str.repeat(i)); 
// } 

// for (let i = n - 1; i >= 1; i--) { 
// 	let str = "* "; 
// 	let space = ' '; 
// 	console.log(space.repeat(n - i) + str.repeat(i)); 
// }


// //Example 4: Right inverted pyramid

// let n = 5; 
// for (let i = 1; i <= n; i++) { 
// 	let str = "* "; 
// 	console.log(str.repeat(i)); 
// } 
// for (let i = n - 1; i >= 1; i--) { 
// 	let str = "* "; 
// 	console.log(str.repeat(i)); 
// // }

//Example 5 Reverse string

//  function ReverseString(){
//     let string = "jayashanthi";
//     let text= '';
//     for(let i = string.length - 1 ; i >= 0; i--){
//         text +=string[i]
//     }
//     console.log(text)

//  }
// ReverseString();

//Example 6 odd and even numbers

// let number=[2,9,10,6,8,4,79,53];

// let even=[];
// for(let i = 0; i < number.length; i++){
//     if(number[i] % 2 == 0)
//         even.push(number[i]);
// }
// console.log(`${even}`);

// let numbers = [1,3,2,4,5,6,7,3,4,33,89];
//  let even = [];

//  for(let i = 0; i < numbers.length; i++){
//     if(numbers[i] % 2 != 0)
//         even.push(numbers[i]);
//  }
//  console.log(`${even}`);
// let number =[];
// for(let i=0; i<=100; i++){
//     if( i % 2 == 0)
//         number.push([i]);
// }
// console.log(`${number}`);

//let string = " tutorial";
// let text= '';
// for(let i = string.length -1; i >= 0; i--){
//     text +=string[i]
// // }
// let reverse = string.split('').reverse('').join('');
// console.log(reverse);
// //console.log(text);




//Example  longest word in the sentence

// function longestWord(sentence){
//     let word =sentence.split(' ');
//     let long = '';
//     for(let i =0; i < word.length; i++){
//         if(word[i].length > long.length){
//             long= word[i];
//         }
//     }
//     return long;

// }
// console.log(longestWord("who are you"))


// Example Remove duplicates from array

//let arr = ["jaya","jaya","raj","aro","aro","raj","amma"]
// function Remove(arr){
//     return [...new Set(arr)];
// // }console.log(Remove(arr))
// function RemoveDuplicate(arr){
//     let remove =[];
//     for(i=0; i < arr.length; i++){
//         if(remove.indexOf(arr[i]) === -1){
//             remove.push(arr[i])
//         }
//     }
//     return remove;
// }console.log(RemoveDuplicate(arr))

//18-06-2024

//Example - 1 

//merge Two Object without OverWriting

// //object - 1
// const obj3 = {
//     num5: "hello",
//     num6: {
//         sub1: 21,
//         sub2: 22,
//     },

// };
// const obj4 = {
//     num7: 8,
//     num6: {
//         sub3: 23,

//     },
    
// };
// const total = {
//     ...obj3,
//     ...obj4,
//     num6: {
//         ...obj3.num6,
//         ...obj4.num6,
//     },
// }
// //const merge = Object.assign({}, obj3, obj4);
// console.log(total);

//Example 2

// function marge(...arguments){
//     let target = {};
//     let marger = (obj) =>{
//         for(let prop in obj ){
//             if(obj.hasOwnProperty(prop)) {
//                 target[prop]=obj[prop]
//             }
//         }

//     };
//     for(let i = 0; i < arguments.length; i++){
//         marger(arguments[i])
//     }
//     return target;
// }
// const obj1 = {
//     num1: 23,
//     num2: 45,
// };
// const obj2 = {
//     num3: 32,
//     num4:94,
// };
// const margeobject = marge(obj1, obj2);
// console.log(margeobject);
// const data = new Date();
// console.log(data);

//Example 3

// const arr = [1,2,3,4,5,6];
// let num = 0;
// let cumulative = []

// arr.map((e)=>{
//     num = num + e;
//     cumulative.push(num);
// })
// console.log(cumulative);

// const arr =[1,4,2,5,3,7,8,9]
// let sum = 0;
// let cumulative = [];
//  arr.map((e)=>{
//     sum=sum+e;
//     cumulative.push(sum);
//  })
//  console.log(cumulative);  

// Example 4

// let chunk = 4;

// let arr=[1,2,3,4,5,6,7,8];

// let arr1=arr.slice(0, chunk);
// let arr2=arr.slice(chunk, chunk + arr.length);
// console.log(arr1, arr2);

// function ChunkArray(arr, chunkarr){
//    let chunk =[];
//    for(let i=0; i < arr.length; i +=chunkarr){
//       chunk.push(arr.slice(i , i +chunkarr));
//    }
// return chunk
// }
// let arr=[1,2,3,4,5,6,7,8];
// let chenuks = ChunkArray(arr, 4);
// console.log(chenuks)

//Example 5


// function longConsequtiveSeqUsingSet(inputarry) { 
// 	if (inputarry == null || inputarry.length === 0) { 
// 		return 0; 
// 	} 
// 	let set = new Set(inputarry); 
// 	let outputLongValue = 0; 
// 	for (let temp of inputarry) { 
// 		if (!set.has(temp - 1)) { 
// 			let count = 0; 
// 			while (set.has(count + temp)) { 
// 				count++; 
// 			} 
// 			outputLongValue = Math.max( 
// 				outputLongValue, 
// 				count 
// 			); 
// 		} 
// 	} 
// 	return outputLongValue; 
// } 
// let inputArray = [36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42]; 
// console.log(longConsequtiveSeqUsingSet(inputArray)); 


// let name="vincent";
// let ans=name.split('').reverse('').join('');
// console.log(ans)

// let text="";

// for(let i =0; i <= 100;i++){
//    text+=i+"  "
// }
// console.log(text)

// Example 1

//document.getElementById("demo").style.fontSize = '16px'

//Example 2

//  function ModifiedArray(arr, callback){
//    arr.push(100,99);
//    callback();

//  }
//  var arr= [1,2,4,3,5,5];
// ModifiedArray(arr, function() {
//    console.log(arr);
// });

//Example 3

// function checkObject(){
//    const object = ["hello","world","best"];
//    const checkArray = Array.isArray(object);
//    console.log(checkArray);
// }checkObject();

//Example 4

//  var Array = [1,2,3,4,5,6,7,8,9];

//  console.log(Array);
//  console.log(Array.length);
//  function EmptyArray(){
//    Array = []
//    console.log(Array);
//    console.log(Array.length);
//  }EmptyArray();

//Example 5
 function Isnumber(num){
    return num % 1 === 0;
 }
 console.log(Isnumber(1));
 console.log(Isnumber(12));
 console.log(Isnumber(2.3));
 console.log(Isnumber(3));
 console.log(Isnumber(66.6));
 console.log(Isnumber(87));