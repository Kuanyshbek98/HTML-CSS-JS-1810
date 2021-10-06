// // Қосу жалғау
// .push()
// .unshift()
// .shift()
// .pop()
// .splice(1,4)
// .slice([start], [end])

// // Бөлу
// .split('')
// ArrayName.from("foo")

// // Біріктіру
// .concat()
// .join('')
// .flat()  [1,,[4],[2]]

// // Орын аустыру
// .sort()
// .reverse()

// // Өгерту
// .fill()
// Object.keys()

// // Әр индекс-тен тексеру (true/false)
//  isArray
// .includes()
// .every()  [if-all]
// .some()  [if-one]

// // Әр индекс-тен іздеу көрсету (index_number)
// .indexOf()
// .lastIndexOf()
// .findIndex()

// // Әр индекс-тен іздеу көрсету (index_value)
// .find()  [show-one]
// .filter()  [show-all]

// // Әр индекс-пен операциялар
// .map()  [return numbers]
// .reduce()
// .reduceRight()
// .flatMap()  [return [array-1]]
// .forEach(key, index, array)

// ----------------------------------------------------
// renderer["3d"].setTexture(model, "character.png"); // ????????
// Array.of()
// Array.observe()
// ----------------------------------------------------

const cars = ["Мазда", "Форд", "БМВ", "Мерседeс"];
// Мерседeс - [-1];
// БМВ - [-2];
// Форд - [-3];
// Мазда - [-4];

// Function
// function addItemToEnd() {}

// Method
// cars.push('Рено')  // массив соңынан элемент қосу
// cars.unshift('Волга') // массив басына   элемент қосу

// const firstCar = cars.shift(); //массив басына   элемент жою
// const lastCar = cars.pop()  //массив соңынан   элемент жою
// var removedItem = cars.splice(2, 3); //  2-ден бастап 3-ке дейін жою
// var removedItem = cars.splice(-2, 1); // соңыннан санағанда 2-ші ден санағанда 1 элемент жою
// console.log(firstCar, cars);
// console.log(lastCar, cars);
// console.log(cars)

// ----------------------------------------------------
// cars.forEach(function (person, index, pArr) {
//   console.log(person); //элемент
//   console.log(index); // index
//   console.log(pArr); //массив
// });

// const objectName = {
//   name: "Vladilen",
//   age: 26,
//   isProgrammer: true,
// };

// console.log(Object.keys(objectName)); // [keys] обьектті массив түрінде шығарып береді
// console.log(objectName);
// ----------------------------------------------------
// console.log(cars);
// console.log(cars.reverse()); // массифтің айналдыру, соңғысы басына, басы соңына

// Задача 1
// const text = "Привет, мы изучаем JavaScript";
// const text = "1234567890";
// const reverseText = text.split("").reverse().join(""); //операцияларды қатар өоюға болады
// console.log(reverseText);

//  cars.join("") // масив элементтерін жақша ішіндегі арқылы қосып шығу(көрсету)
//  .split(",") //  жақша ішіндегі арқылы массивке бөлу
//  .reverse(); // массифтің айналдыру, соңғысы басына, басы соңына
// ----------------------------------------------------
// ArrayName.from();
// console.log(Array.from("fdcoo"));
// expected output: Array ["f", "o", "o"]

// console.log(Array.from(fib, (x) => x + x));
// expected output: Array [2, 4, 6]
// ----------------------------------------------------
// Array.isArray()
// console.log(Array.isArray(cars)); // массив па массив емеспа аны0тау true false
// console.log(Array.isArray(people)); // массив па массив емеспа аны0тау true false
// ----------------
// const index = cars.indexOf("БМВ"); // берілген сөз нешінші элемент екенін табу
// cars[index] = "Porsche"; // оны өзгерте алады
// console.log(cars);

// cars[cars.indexOf("Porsche")] = "Kuanysh";
// console.log(cars);
// ----------------------
// // toLowerCase().indexOf()
// const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

// console.log(animals.lastIndexOf("Dodo" , 2));
// // expected output: 3
// console.log(animals.lastIndexOf("Tiger" , 1));
// // expected output: 1

// let word =
//   "Nмеют одинаковый синтаксис и делают по сути то же самое, что и их строковые аналоги";
// console.log(word.indexOf("о", 8))  // 8 - о әріпі 8 санының айналасында нақты қай жерінде
// console.log(word.indexOf("о", 8));  // жауабы: 12  - оңға қарай тексереді
// console.log(word.lastIndexOf("о", 8));  // жауабы:6 - солға қарай тексереді

// ----------------------------------------------------
// console.log(cars.includes('Мазда'))   // осындай элемент барма жоқпа соны анықтау
// console.log(cars.includes("Мазда", 1)); // index 1 -ден оңға қарай тексеру
// console.log(cars.includes("Мазда", -3)); // index -3 - тен оңға қарай тексеру
// ----------------------------------------------------
const people = [
  { name: "Vladilen", budget: 4200 },
  { name: "Elena", budget: 3500 },
  { name: "Victoria", budget: 1700 },
  { name: "Elena2", budget: 3500 },
];

// let findedPerson;
// for (const person of people) {
//   if (person.budget === 3500) {
//     findedPerson = person;
//   }
// }

// console.log(findedPerson);
// ----------------
// берілген сөз немесе сан нешінші элемент екенін табу күрделі массивте осылай жасайды
//  findIndex
// const index = people.findIndex(function (person) {
//   //нешінші Index екенін  анықтау
//   return person.budget === 3500;
// });
//   find
// const person = people.find(function (person) {
//   return person.budget === 3500;
// });
// console.log(index);
// const person = people.find((person) => person.budget === 3500); //қайсы  Index болса соны шығару
// console.log(person);
// ----------------------
// const person = people.filter((person) => person.budget === 3500); //  filter мен  find айырмашылығы filter - массив қайтарады, шартқа сәйкес келетіннің барлығын, ал find тек шартқа сәйкес келетіндердің біріншісін ғана қайтарады // console.log(person);
// console.log(person);

//.filter   - берілген массив элементтерінің ішінен керектілерін филтовать етіп таңдап алу
// const filteredNumbers = pow2Fib.filter(num => num > 20) // мысалы 20-дан үлкендерін

// console.log(filteredNumbers)

// const displayItems = allItems.filter(item => item.name.indexOf('phone') !== -1)
// phone сөзін пойсктан іздегендегі филтірлеу командасы
// ----------------------------------------------------
const fib = [1, 1, 2, 3, 5, 8, 13];
// fib SetTexture("");
const upperCaseCars = cars.map((car) => {
  // .map()  массивке жеке-жеке амалдар қолдану
  return car.toUpperCase();
});
console.log(upperCaseCars);

// const pow2 = (num) => num ** 2;
// const sqrt = (num) => Math.sqrt(num);

// const pow2Fib = fib.map(pow2)
// console.log(pow2Fib)

// const pow2Fib = fib.map(pow2).map(sqrt); //.map() ішінде .map() қолдану
// console.log(pow2Fib);

// const sent = cars.map((item) => {
//   item += "-ds";
//   //   console.log(item);
// });
// console.log(sent);
// ----------------------------------------------------
// const allBudget = people //.reduce()  .map() және  .filter() сияқты, бірақ күрделісі, элем-рін қосу үшін қолданады
//   .filter((person) => person.budget > 2000) //.reduce()- де бірнші функция екінші переменный болады
//   .reduce((acc, person) => {
//     acc += person.budget;
//     return acc;
//   }, 0);

// console.log(allBudget);

// const sell = fib.reduce((sum, item) => {
//   sum += item;
//   return sum;
// });

// console.log(sell);
//people - массивіндегі 2000-ден үлкендерін филтрлеп, acc-переменныйына бір-бірлеп қосып шығады

// ---------------------
//  оңнан  солға қарай қосады
// [0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array) {
//   return previousValue + currentValue;
// }, 10);
// ----------------------------------------------------
// sort();
// const fruit = ["арбузы", "бананы", "Аишня", "Вишня"];
// let asser = fruit.sort();
// console.log(asser); // ['Аишня', 'Вишня', 'арбузы', 'бананы']

// var scores = [1, 2, "100", 21, 13, "56", 90, "Astana", "$", 0.32];

// console.log(scores.sort((a, b) => a - b)); // өспелі
// console.log(scores.sort((a, b) => b - a)); // кемімелі

// function compareNumbers(a, b) {
//   return a - b;
// }

// var things = ["слово", "Слово", "1 Слово", "2 Слова"];
// ['1 Слово', '2 Слова', 'Слово', 'слово']
// console.log(things.sort())
// В Unicode, числа находятся перед буквами в верхнем регистре,
// а те, в свою очередь, перед буквами в нижнем регистре.

// ----------------------------------------------------
// some(), every();
// let arr = [3, 4, 5, 9];
// let a = arr.every(function (i) {
//   //.every() true болуы үшін массифтің барлығы 5-тен кіші болуы керек
//   console.log(i);
//   return i < 5;
// });
// console.log(a); // жауабы : false болады

// let arr = [3, 4, 5, 9];
// let a1 = arr.some(function (i) {
//   //.some() true болуы үшін массифтің аз дегенде біреуі 5-тен кіші болуы керек
//   console.log(i);
//   return i < 5;
// });
// console.log(a1); // жауабы : true болады

// ----------------------------------------------------
// Array.prototype.concat();
// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const array3 = array1.concat(array2);

// console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

// ----------------------------------------------------
// arr.slice([start], [end]);  // массив элементтерін басымен аяғымен көшіру
//   // slice(start, end) –  создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).
// let arr = ["t", "e", "s", "t"];
// alert(arr.slice(1, 3)); // e,s (копирует с 1 до 3)
// alert(arr.slice(-2)); // s,t (копирует с -2 до конца)
// console.log(arr);

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2));// 2-ден бастпап  барлығы
// // expected output: Array ["camel", "duck", "elephant"]
// console.log(animals.slice(2, 4)); // 2-ден 4-ке дейін 4 алынбайды
// // expected output: Array ["camel", "duck"]
// console.log(animals.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]
// console.log(animals.slice(-2));
// // expected output: Array ["duck", "elephant"] // соңынын санағанда 2-ден бастпап  барлығы
// console.log(animals.slice(1, -3)); // 1-ден бастап соңынан санағанда 3-ші ге дейін
// // expected output: Array ["camel", "duck"]

// ----------------------------------------------------
// .flat() //массив ішіндгі массивтерді бір массив қылады, массив ішіндегі бос орындар, элемент жоқтарды жою
// var arr1 = [1, 2, [3, 4]];
// arr1.flat();
// console.log(arr1.flat());
// [1, 2, 3, 4]

// var arr2 = [1, 2, [3, 4, [5, 6]]];
// arr2.flat(2);
// console.log(arr2.flat());
// [1, 2, 3, 4, [5, 6]]

// var arr3 = [1, 2, [3, 4, [5, 6]]];
// arr3.flat(2);  // 2 массивті бір қылу
// [1, 2, 3, 4, 5, 6]

// var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// arr4.flat(Infinity);  // барлық массивті бір қылу
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// var arr4 = [1, 2, , 4, 5];
// arr4.flat();
// [1, 2, 4, 5]

// ----------------------------------------------------
//.fill(add,start,end)  // массив ішіндегі қалаған элементтің мәнін өзгерту
// const array1 = [1, 2, 3, 4];

// // 0-мен толтыру, 1-ші ден бастап, 4-ші ге дейін
// console.log(array1.fill(0, 1, 3));
// // expected output: [1, 2, 0, 0]

// // 5-пен толтыру, 1-ші ден бастап, ештеңе жазылмаса барлығы
// console.log(array1.fill(5, 1));
// // expected output: [1, 5, 5, 5]

// // 6-мен толтыру, ештеңе жазылмаса барлығы, ештеңе жазылмаса барлығы
// console.log(array1.fill(6));
// // expected output: [6, 6, 6, 6]
// ----------------------------------------------------
//.flatMap() =>  .map() пен .flat() қосындысы
// let arr1 = [1, 2, 3, 4];

// let b = arr1.map((x) => [x ** 2]); // .map() жеке-жеке операция орындағанннан кейін жеке-жеке массивке айналдырады
// [[2], [4], [6], [8]]
// console.log(b);

// arr1.flatMap((x) => [x * 2]); //.flatMap()жеке-жекеоперация орындағанннан кейін бір массивке айналдырады, ,бір массив сыртқа шығып көрсетеді
// [2, 4, 6, 8]

// выравнивается только один уровень
// arr1.flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]

// let arr2 = ["it's Sunny in", "", "California"]
// arr2.map(x => x.split(" "));
// // [["it's","Sunny","in"],[""],["California"]]
// arr2.flatMap(x => x.split(" "));
// // ["it's","Sunny","in", "", "California"]
