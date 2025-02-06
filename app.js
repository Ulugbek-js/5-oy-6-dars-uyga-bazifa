// // 1-masala

//  const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// let result = students.filter((item) => {
//  if( item.percent > 85){
//     item.grade = 5
//  }
//  else if (item.percent >= 75 && item.percent < 85){
//    item.grade = 4
//  }
//  else{
//   item.grade = 3
//  }
//  console.log(item)
// })

// const name = []

// restName = students.map((students) => {
//     if(students.percent >= 85){
//         var name = []
//         let restName = name.push(students.name)
//         console.log(name)
//     } 
// })

// 2-masala

//reduse masalasi

// 3-masala 

// let number = [1, 2, 3, 4, 5]
// let restnumber = []

// let result = number.map((item)=>{
//   if(item ** 2){
//     restnumber.push(item ** 2)
//   }
// })

// console.log(restnumber)

// 4-masala

//reduse masalasi

// 5-masala

// let text = 'George Raymond Richard Martin'
// let textsplited = text.split(" ")

// let fristLeter = textsplited.map((item) => item.charAt())

// let result = fristLeter.join("")

// console.log(result)

// 6-masala

// const pupils =[
//     {name: 'John', age: 13},
//     {name: 'Mark', age: 56},
//     {name: 'Rachel', age: 45},
//     {name: 'Nate', age: 67},
//     {name: 'Jeniffer', age: 65}
// ]

// const restPupils = pupils.sort((a, b)=>{
//     return b.age - a.age}
// )

// console.log(restPupils[0].age - restPupils[restPupils.length -1].age)

// 7-masala

// let number = [1, 2, 3, 4, 5]
// let rest1 = []
// let rest2 = []

// let result = number.filter((item)=>{
//   if(item % 2 == 0){
//    rest1.push(item)
//   }
//   else if( item % 2 != 0){
//     rest2.push(item)
//   }
// })

// console.log(rest1, rest2)

// 8-masala

//reduse masalasi

// 9-masala

// let products = [
//     {
//       id: 6,
//       name: "Smarthpone",
//       price: 12000,
//       rating: 4.5,
//       discount: 20,
//     },
//     {
//       id: 2,
//       name: "Acer",
//       price: 10000,
//       rating: 4.3,
//       discount: 10,
//     },
//     {
//       id: 1,
//       name: "Mac book",
//       price: 17000,
//       rating: 4.7,
//       discount: 40,
//     },
//     {
//       id: 4,
//       name: "HP",
//       price: 21000,
//       rating: 4.1,
//       discount: 30,
//     },
//     {
//       id: 5,
//       name: "Dell",
//       price: 15000,
//       rating: 4.9,
//       discount: 30,
//     },
//   ];
  
  // const priseSort = products.sort((a, b)=> a.price - b.price)
  // console.log(priseSort)
  // const reatingSort = products.sort((a, b)=> a.rating - b.rating)
  // console.log(reatingSort)
  // const discountSort = products.sort((a, b)=> a.discount - b.discount)
  // console.log(discountSort)

  // 10-masala

//   const storngRating = products.sort((a, b)=> b.rating - a.rating)[0]
//   console.log(storngRating)

  // 11-masala

//   const storngProduct = products.sort((a, b)=> a.price - b.price)[0]
//   console.log(storngProduct)

  // 12-masala

  //reduse masalasi
 
  // 13-masala

//   let rest = products.map((item)=> {
//   let name = []
//   name.push(item.name)
//   console.log(name)
// })

// 14-masala

// const findName = products.find((el) => {
//     if(el.id === 5){
//         console.log(el)
//     }
// })
//     console.log(findName)
// 15-masala
//     let result = products.filter((item)=> {
//   if(item.id !== 4){
//     console.log(item)
//   }
// })

// 16-masala

// function checkIfAlphabetOnly(e) {
//   return e.split('').every(i => /[a-zA-Z]/);
// }

//  const satr = 'adadadad';
 

// console.log(checkIfAlphabetOnly(satr))

// 17-masala
// let array = [false, 1, 10, "", null, "abdulaziz", 1.13, 0]
// let rest1 = []
// let rest2 = []

// let result1 = array.filter((item) => {
//   if(item){
//     rest1.push(item)
//   }
//   else{
//     rest2.push(item)
//   }
// })

// console.log(rest1, rest2)

// 18-masala

// const stringObject = "Men Abdulaziz Programmerman"

// console.log(stringObject.split(' ').map((i)=> i.length))
// 19-masala

// console.log(stringObject.split(' ').some((el)=> el == el))

// 20-masala

const object1 = {a: 2, b: 5, c: 7};
const resul = []
for (const [key, value] of Object.entries(object1)) {
  let rest = `${key}${value}`
  resul.push(rest)
}
console.log(resul)
// 21-masala

// qila olmadim

// 22-masala

//reduse masalasi

// 23-24-25 masalalar

const pupils = [
  {
    name: "Elbek",
    protcent: 95,
  },
  {
    name: "Zafar",
    protcent: 78,
  },
  {
    name: "Aziz",
    protcent: 83,
  },
  {
    name: "Jasur",
    protcent: 88,
  },
  {
    name: "Bobur",
    protcent: 66,
  },
  {
    name: "Kamron",
    protcent: 75,
  },
];
let result = pupils.filter((item) => {
  if(item.protcent >= 90 && item.protcent >= 70){
        item.grade= 5
        item.isPssed = true 
    }
  else if( item.protcent >= 80 && item.protcent < 90 && item.protcent >= 70){
    item.grade= 4
    item.isPssed = true 
    }
  else if (item.protcent >= 70 && item.protcent < 80 && item.protcent > 70 && item.protcent >= 70){
    item.grade = 3
    item.isPssed = true 
   }
  else{
   item.grade = 2
   item.isPssed = false
  }
  console.log(item)
 })


