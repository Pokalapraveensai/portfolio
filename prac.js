

let url ="https://dog.ceo/api/breeds/image/random";
let b= document.querySelector("button");
let i = document.createElement("img");

// let x=(v)=>{
//   return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//   console.log("hi sir h ",v);
//   resolve("success");
// },4000);});
// }
// x(1,()=>{
//   x(2,()=>{
//     x(3)
//   })
// });
// x(1).then((res)=>{
// console.log(res);
//  x(2).then(()=>{
//   console.log(res);
//   x(3)
//  })
// })

// let y= (async ()=>{
//    await x(1);
//    await x(2);
//    await x(3);
// })();
let y= (async()=>{
  let x= await fetch(url);
console.log(x);
let x1=  await x.json()
console.log(x1);
console.log(x1.message);
b.addEventListener("click",()=>{
  i.src=x1.message;
})
})();
b.after(i);