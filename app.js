//fat arrows
// let arr = [1,2,3,4,5,6,7,8,9]; 
//  const square = arr.map(a => a*a);
//  console.log(square);
//  const cube = arr.map(a => a*a*a);
//  console.log(cube);
//  const es6EvenNumbers = arr.filter(number => !
// (number%2));
//  console.log(es6EvenNumbers);
//  const isMultipleof3 = arr.filter(number => !(number%3));
//  console.log(isMultipleof3)
//destructing
// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female' 
//    }
// let { name, age, gender } = person;
// console.log(name); 
// console.log(age); 
// console.log(gender); 
// const arrValue = ['one', 'two', 'three'];
// destructuring assignment in arrays
// const [x, y, z] = arrValue;
// console.log(x); // one
// console.log(y); // two
// // console.log(z); // thre
// const arrValue = ['one', 'two', 'three', 'four'];
// destructuring assignment in arrays
// assigning remaining elements to y
// const [x, ...y] = arrValue;
// console.log(x); // one
// console.log(y); 
// const person = {
//     name: 'Jack',
//     age: 26,
//     hobbies: {
//     read: true,
//     playGame: true
//     }}
   // nested destructuring 
//    const {name, hobbies: {read, playGame}} = person;
//    console.log(name); // Jack
//    console.log(read); // true
//    console.log(playGame); // tru
//modules
// export function greet(name){
//     return `Hello ${name}`;
// }
//generators
function add(){
    console.log("hi frm add func")
    return 10;
}
function* info(){
    console.log("hello frm info function")
    yield x = add();
    console.log("value of x:"+x)
    return ;
}
var a=info();
console.log(a.next())
console.log(a.next())
