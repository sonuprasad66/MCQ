// 25+ Javascript coding interview questions
// 1.Convert string into an array.
// let str = "Hello,How are you";
// console.log(str.split());
// OUTPUT: ["Hello,How are you"];

// 2.Reverse the words in the provided sentence:
// let abc = "My love is Javascript";
// console.log(abc.split(" ").reverse().join(" "));
// OUTPUT: "Javascript is love My";

// 3.Reverse the provided string
// let str = "I love my work";
// let result = str.split("").reverse().join(" ");
// console.log(result);
// OUTPUT: " krow ym evol I";

// 4.Remove the space from left and right side from the given string:
// let str = "  abcd  ";
// console.log(str.trim());
// OUTPUT:abcd

// 5.Remove first character from the string
// let str = "Hello,How are you";
// let result = str.substring(1, str.length);
// console.log(result);
// OUTPUT: "ello,How are you";

// 6.Remove last character from the string
// let str = "Hello,How are you";
// console.log(str.substring(0, str.length - 1));
// OUTPUT: " Hello,How are yo";

// 7.Whenever we compare two blank arrays, what will be the output?
// let c = [];
// let d = [];
// console.log(c == d);
// OUTPUT: false;

// 8.If we divide string by a number, what will be the output?
// console.log("abc"/2);
// OUTPUT:NaN

// 9.What will be the output?
// let a = 10;
// let b = -10;
// let data = a - b;
// console.log(data);
// OUTPUT: 20;

// 10.Remove the duplicate elements from an array.
// const arr = [1, 2, 3, 4, 4, 5, 6];
// const mySet = [...new Set(arr)];
// console.log(mySet);
// OUTPUT:[1,2,3,4,5,6]

// 11.Swap the values
// let a = 10;
// let b = 20;
// [b, a] = [a, b];
// console.log(a, b);
// OUTPUT:20 10

// 12.Merge two objects.
// let data = { name: "Aditya", age: 29, skill: "JS" };
// let info = { name: "Adi", city: "Pune", mail: "aditya123@gmail.com" };
// data = { ...data, ...info };
// console.log(data);
// OUTPUT:{ name: ‘Adi",
// age: 29,
// skill: ‘JS",
// city: ‘Pune",
// mail: ‘aditya123@gmail.com" }

// 13.How to prevent new properties from being added to an object
// let person = { name: "Saket" };
// let abc = { name: "Adi" };
// Object.seal(person);
// Object.seal(abc);
// person.name = "Aditya";
// abc.age = 19;
// person.age = 29;
// console.log(person);
// console.log(abc);
// OUTPUT:{ name: ‘Aditya" }
//                 { name: ‘Adi" }

// 14.Add element at first position
// let data = [2, 9, 0, 10];
// data.unshift(5);
// console.log(data);
// OUTPUT:[10, 2, 9, 0, 10]

// 15.Merge elements from 2 arrays into single array.
// let a = [1, 2, 3, 4];
// let b = [2, 3, 5, 6];
// let c = [...a, ...b];
// console.log(c);
// OUTPUT:[1, 2, 3, 4, 2, 3, 5, 6]

// 16.What will be the output?
// function getAge() {
//   "use strict";
//   age = 21;
//   console.log(age);
// }
// getAge();
// OUTPUT: ReferenceError: age is not defined

// 17.Guess the output.
console.log(typeof (3 + 4 + "50"));
console.log(typeof (3 + 4 + "50"));
// OUTPUT:number450
//                 string

// 18.Guess the output
// (()=>{
// let x=(y=10);//x is block scope
// })();
// console.log(x);
// console.log(typeof x)
// OUTPUT: ReferenceError:x is not defined

// 19.Empty an array in Javascript
// var a=[2,3,4,5];
// var a=[];
// console.log(a);
// OUTPUT:[]

// 20.What will be the output?
// console.log(‘A"-1);
// console.log(2+"-2"+"2′);
// OUTPUT:NaN
//                2-22

// 21.How do you compare two objects?
// var abc={hasUser:false,isUser:false}
// var xyz={isUser:false,hasUser:false}
// console.log(JSON.stringify(abc) === JSON.stringify(xyz));
// OUTPUT:false

// 22.Remove the duplicacy of the objects in an array
// const arr=[{id:1,name:"one"},
// {id:2,name:"two"},
// {id:1,name:"one"},
// {id:2,name:"two"},
// {id:3,name:"three"}];
// const map = {};
// const newArray = [];
// arr.forEach(el => {
// if(!map[JSON.stringify(el)]){
// map[JSON.stringify(el)] = true;
// newArray.push(el);
// }
// });
// console.log(newArray);
// OUTPUT:[ { id: 1, name: ‘one" },
// { id: 2, name: ‘two" },
// { id: 3, name: ‘three" } ]

// 23.Input:name:"MyNameIsJohn".Output:"My Name Is John".How can be done?
// var name="MyNameIsJohn"
// console.log(name.replace(/[A-Z]/g," $&").trim())
// Output:My Name Is John

// 24.Sort the elements in ascending as well as descending order
// const arr = [1, 2, 3, 88, 5, 7];
// console.log(arr.sort((first, second) => first-second));
// console.log(arr.sort((first, second) => second-first));
// OUTPUT:

// [ 1, 2, 3, 5, 7, 88 ] //Ascending order

// [ 88, 7, 5, 3, 2, 1 ] //Descending order

// 25.Find the most frequent element in an array
// function most_frequent(array){
// let mf=arr[0],maxCount=0,i,j;
// let len=arr.length;

// for(i=0;i<len;i++){
// let count=0;
// for(j=i+1;j<len;j++){
// if(arr[i]==arr[j]){
// count++;
// }
// }
// if(maxCount<count){

// maxCount=count; mf=arr[i];

// }

// }

// return mf

// }

//  arr=[1,3,3,3,4,4,4,5]

//  console.log(most_frequent(arr));

//  OUTPUT:3

// 26.Merge elements of two arrays alternatively.

// const arr1 = [1,2,3,4,5];

// const arr2 = [6,7,8,9,10];

// const mergeAlernatively = (arr1, arr2) => {

// const res = [];j=0;k=0;

// for(let i = 0; i < arr1.length + arr2.length; i++){
// if(i % 2 == 0){
// res.push(arr1[j]);
// j++;
// }else{
// res.push(arr2[k]);
// k++;
// }
// }
// return res;
// };
// console.log(mergeAlernatively(arr1, arr2));
// OUTPUT:[ 1, 6, 2, 7, 3, 8, 4, 9, 5, 10 ]
