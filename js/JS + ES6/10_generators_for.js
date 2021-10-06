const array = [10, 20, 30, 40];
const str = "Hello";

// console.log(array[Symbol.iterator])
// console.log(str[Symbol.iterator])

// const iter = array[Symbol.iterator]() //[Symbol.iterator] - алдындағы массивті болшектеп беру
// const iter = str[Symbol.iterator]()//[Symbol.iterator] - алдындағы сөзді болшектеп беру
//
// console.log(iter.next())  //.next() - iter дің ішіндегі келесі элементтерді біртіндеп шығару
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())  // басқа элемент жоқ болса undefined береді  

// for (let item of str) {
//   console.log(item)
// }

// const country = {
//   values: ['ru', 'kz', 'ua', 'by'],
//   [Symbol.iterator]() { // итерация арқылы массиф элементтерін біртіндеп циклмен шығару
//     let i = 0
//     return {
//       next: () => {
//         const value = this.values[i]
//         i++
//         return {
//           done: i > this.values.length,
//           value
//         }
//       }
//     }
//   }
// }
//
// for (let item of country) {
//   console.log(item)
// }

// Generator  - цикл түрінде қолдануға болатын генератор
function* gen(num = 4) {
  for (let i = 0; i < num; i++) {
    try {
      yield i;
    } catch (e) {
      console.log("Error", e);  // қате болса не шығару керек
    }
  }
}

const iter = gen(3);
console.log(iter.next());
console.log(iter.throw("My Error"));  // қате жіберу керек болса
console.log(iter.next());
console.log(iter.next());

// for (let i of gen(4)) {
//   console.log(i)
// }
