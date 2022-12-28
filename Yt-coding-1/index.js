// console.log("Coding Questions");

//1.
// for (let i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// ---------2

// var arr = [-12, 0, 24, -30, 80, -5, 100];
// arr.length = 0;
// console.log(arr);

//------3

// var arr = [
//   { name: "ram", email: "ram@gmail.com" },
//   { name: "shyam", email: "shyam@gmail.com" },
//   { name: "mohan", email: "shyam@gmail.com" },
// ];

//4

// var arr = [
//   { name: "ram", email: "ram@gmail.com" },
//   { name: "shyam", email: "shyam@gmail.com" },
//   { name: "mohan", email: "shyam@gmail.com" },
// ];

// checkUnique(arr);
// function checkUnique(arr) {
//   let key = "email";

//   let data = [...new Map(arr.map((el) => [el[key], el])).values()];

//   console.log(data);
// }

// test(arr);

// function test(arr) {
//   let ans = [];
//   let bag = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (bag[arr[i].email]) {
// console.log(bag);
//       continue;
//     }
//     if ((bag[arr[i].email] = true)) {
//       ans.push(arr[i]);
//     }
//   }
//   console.log(ans);
// }

// var str = "hello World";
// let string = str.split(" ")

// let out = string.map((item) => {
//   return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
// });

// console.log(out.join(" "));

// var arr = [
//   { name: "ram", email: "ram@gmail.com" },
//   { name: "shyam", email: "shyam@gmail.com" },
//   { name: "mohan", email: "shyam@gmail.com" },
// ];

// let set = new Set();
// let ans = [];
// for (let i = 0; i < arr.length; i++) {
//   let isEmail = set.has(arr[i].email);
//   if (!isEmail) {
//     ans.push(arr[i]);
//     set.add(arr[i].email);
//   }
// }

// console.log(ans);

// var str = "hello World";
// let string = str.toLocaleLowerCase().split(" ");
// let out = string.map((item) => {
//   return item.slice(0, -1) + item.slice(-1).toUpperCase();
// });

// console.log(out.join(" "));
