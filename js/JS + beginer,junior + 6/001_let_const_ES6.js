//
// let a = 24
//
// if (true) {
//   let a = 42   //let - тек өз ішінде көрінеді
//
//   console.log('a', a)
// }
//
// console.log(a)

// Hoisting
// b = 20
//
// console.log(b)
//
// let b = 10  // let сан теңестіруден алдын шақырылуы керек

// function hoisted() {
//   age = 26
// }
//
// let age   // бұл жерде let функциядан алдын орналасқандықтан дұрыс
// hoisted()
// console.log(age)

// Const
const COLOR = "#ffeebb";
// COLOR = '#000'   //const болса кей3н өзгертуге болмайды

// console.log(COLOR)

// const array = [1, 2, 3, 5, 8]
//
// console.log(array)
//
// array.push(13)  //const болса кейін array push енгізуге болады
//
// console.log(array)

const obj = { a: 42 }; //const болса кейін obj енгізуге болады
obj.name = "Igor";

console.log(obj);
