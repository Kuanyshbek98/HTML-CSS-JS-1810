// // 1 Функции
// // Function Declaration  - бұл жерде функцияны қалаған кезде шақырады

// function greet(name) {
//   console.log("Привет - ", name);
// }

// Function Expression(переменный функция)
// - бұл жерде функцияны шақырғанда переменный уже бар болуы керек

// const greet2 = function greet2(name) {
//   переменный функция
//   console.log("Привет 2 - ", name);
// };
// greet("Лена");
// greet2("Лена");

// function multiply(num1, num2) {
//     var result = num1 * num2;
//     return result;
//   }
//   multiply(4, 7);
//   multiply(0.5, 3);

// console.log(typeof greet) //  фукцияның типін көрсетеді
// console.dir(greet)  // функцияны обьект ретінде көрсетеді

// // 2 Анонимные функции  -интервал, таймаут сияқты функциялар
// let counter = 0
// const interval = setInterval(function() {
//   if (counter === 5) {
//     clearInterval(interval) // clearTimeout
//   } else {
//     console.log(++counter)
//   }
// }, 1000)

// // 3 Стрелочные функции
// function greet() {
//   console.log("Привет - ");
// }

// const arrow = (name, age = 12) => {
//   // осылай стрелка арқылы қысқартып жазуға болады
//   console.log("Привет - ", name, age);
// };

// const arrow2 = (name) => console.log("Привет - ", name); // бір ғана операция болса осылай қысқартуға болады

// arrow2("Vladilen");

// const pow2 = (num) => num ** 2; // (**) - дәрежелеу ретінде қолданып тұр (квадрат)

// console.log(pow2(5))

// ------------------------------------------------------------------------

// // 4 Параметры по умолчанию  // функция шақырғанда переменны берілмеген жағдайда, тұрақты переменный қойып қою
const sum = (a = 40, b = a * 2) => a + b;

// console.log(sum(41, 4))
// console.log(sum())

// ------------------------------------------------------------------------

function sumAll(...all) {
  // функция шақырылған кезде берілген переменныйдың барлығын алу(шығару)
  let result = 0; // ол барлығын массив күйінде шығарады, оны реттеу үшін циклге салу керек
  for (let num of all) {
    // массивті циклге салып жеке жеке қосып алу
    result += num;
  }
  return result;
}
const res = sumAll(1, 2, 3, 4, 5);
// console.log(res)

// ------------------------------------------------------------------------

// 5 Замыкания   //шақырылған функция ішінде функция болса ошибка береді, оны ретету үшін
function createMember(Firstname) {
  Firstname = "kukaName:" + Firstname + "-";
  return function (lastName) {
    let fosName = (FullMame) => {
      console.log(Firstname + lastName + FullMame);
    };
    return fosName;
  };
}





const logWithLastName = createMember("Vladilen"); //шақырған функцияны переменныйға теңестіріп
console.log(logWithLastName("Minin")); // ол переменныйды функция ретінде осылай шақыру керек
// createMember("Dudar")("Kuanyshbek")("-Gosha"); // оны қысқаша былай жасауғада болады
// console.log(logWithLastName("Kuznezov"));
