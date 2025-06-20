// console.log("hello");

// function changeImage() {
//   // console.log(document);
//   const oldclr = document.getElementById("btn-1").style.backgroundColor;

//   console.log(oldclr);

//   const newclr = oldclr == "red" ? "green" : "red";

//   document.getElementById("btn-1").style.backgroundColor = newclr;
// }
// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(1, 2));

// (() => {
//   console.log("arrow");
// })();

// function getName(e){
//     let r,g,b;
//     r =Math.floor(Math.random() * 255);
//     g =Math.floor(Math.random() * 255);
//     b =Math.floor(Math.random() * 255);
//     const clr = e.target.value;
//     console.log(clr);
//     const newclr = `rgb(${r},${g},${b})`;
//     document.getElementById("box").style.backgroundColor=newclr;
// }
//? call back and higher order fun
// function sum(num1,num2,p){
//     p(num1+num2)
// }
// function print(res){
//     console.log(res);
// }
// sum(2,2,print);

// let students1 = {
//     name:'amal',
//     age:23,
//     address:{
//         home:{place:'calcut'},
//         clg:{place:'ernakulam'}
//     }
// }
// let students2 = {
//     name:'lama',
//     age:23,
//     address:'enakulam'
// }

// let students = [students1,students2 ]
// console.log(students[0].address.clg.place);

// function checkLength(e){
//     let spanE = document.getElementById('nameError')
//     let name = e.target.value;
//     (name.length > 3  &&  name.length < 12  ) ?(  spanE.innerHTML = "good to go" , spanE.style.color='green') :(  spanE.innerHTML = "name must contain at least 3 letters " ,spanE.style.color='red') ;
//     // console.log(c/ount);

// }
function checkName(e){
    let name = e.target.value;
    (name.length > 2 ) ? document.getElementById('nameError').style.borderColor = 'green' : document.getElementById('nameError').style.borderColor = 'red' ;
}

function checkEmail(e){
    const regex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let email = e.target.value;
    (regex.test(email)) ?  document.getElementById('emailError').style.borderColor = 'green' : document.getElementById('emailError').style.borderColor = 'red' ;
}

function checkEmpty(e){
    let msg = e.target.value;
    (msg.length > 1 ) ?  document.getElementById('subError').style.borderColor = 'green' : document.getElementById('subError').style.borderColor = 'red' ;

}