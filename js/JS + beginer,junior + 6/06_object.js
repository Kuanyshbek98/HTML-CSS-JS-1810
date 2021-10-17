// const person = {. .}

// const ageKey = "age";
// console.log(person[ageKey]);
// console.log(person["complex key"]);

// const { name, age: personAge = 12, languages } = person;  
// console.log("----- " + name, personAge, languages);

// Object.keys(person).forEach((key) => { 
//   console.log('key:', key)  // элементтер аты
//   console.log('value:', person[key]) // value -сі
// })

// console.log(`"${key}": ${this[key]}`); / 

// const self = this; //    .bind(this) 

//  .bind(person)();  
//    Object.function.call(person);
//  .call(person, true, true, true);  
//  .apply(person, [true, true, true]);

// -----------------------
const person = {
  name: "Vladilen",
  age: undefined,
  isProgrammer: true,
  languages: ["ru", "en", "de"],
  "complex key": "Complex Value", //екі сөз болса осылай
  ["key_" + (1 + 3)]: "Computed Key", // key_4
  greet() {
    console.log("greet from person");
  },
  info() {
    // console.log('this:', this)
    console.info("Информация про человека по имени:", this.name);
    // this- деген өз сыртындағы,яғни өзі тұрған обьект
  },
};

// console.log(person.name);
// const ageKey = "age";
// console.log(person[ageKey]);
// console.log(person.age);
// console.log(person["complex key"]); //екі сөз олса осылай шақырылады
// person.greet();

// person.age++   // обьект ішіндегі age элементтіне 1 сан қосады
// person.languages.push('by')
// person["key_4"] = undefined; // обьект ішіндегі элемнентті  өзгерту
delete person["key_4"]; // обьект ішіндегі элемнентті  жою
// configurable:false; // обьект іщіне осындай элемент берсе өшіре алмайды
// configurable:true;	// өшәре алады

// console.log(person);
// console.log(person['key_4'])

// const name = person.name;
// const age = person.age;
// const languages = person.languages; // обьект ішіндегі элементтерді переменныйға теңестіру

// console.log(location.reload()); // страницаны зогруска жасау
const { name, age: personAge = 12, languages } = person; //  осылай қысқа жолмен теңестіруге болады
console.log("----- " + name, personAge, languages);
// обьект ішіндегі элементтерді переменныйға теңестіру, және оны шығару

// for (let key in person) {   //цикл арқылы обьектті шығрару
//   if (person.hasOwnProperty(key)) {   // қате шықпау үшін осылай істеу керек
//     // console.log('key:', key)   // обьекттің элементтін шығару
//     console.log('value:', person[key])  // обьекттің value-сін шығару
//   }
// }

// Object.keys(person).forEach((key) => { //Обьектті массивке айналдыру, forEach цикл арқылы обьектті шығрару
//   console.log('key:', key)  // элементтер аты
//   console.log('value:', person[key]) // value -сі
// })

// // Context
// person.info()

const logger = {
  // keys() {
  //   console.log("Object Keys: ", Object.keys(this)); // обьектті функция арқылы шақыру
  // },
  // sayid kamul
  // keysAndValues() {
  //   // "key": value
  //   const self = this;
  //   Object.keys(this).forEach((key) => {
  //     // =>{}  арқылы функция жазса this істейді
  //     console.log(`"${key}": ${this[key]}`);
  //     // console.log(this[key] + ":");
  //   });
  //   // const self = this; //  function() арқылы жазса істемейді, ол істеу үшін this-ді переменныйға теңестіру керек, немесе функция соңына .bind(this) -деп жалғау керек
  //   Object.keys(this).forEach(
  //     function (key) {
  //       console.log(`"${key}": ${this[key]}`);
  //     }.bind(this)
  //   );
  // },
  // withParams(top = false, between = false, bottom = false) {
  // if (top) {
  //   console.log("------- Start -------");
  // }
  // Object.keys(this).forEach((key, index, array) => {
  //Object.keys(this)-деген this -арқылы берілген обьектті keys-арқылы жеке-жеке эльементтерін ұстау
  //  ал forEach(key) -деген сол ұсталған элементтерді циклға салып, key - ді переменный ретінде алу
  // index,array -ққосымша переменныйлар алуға болады
  // console.log(`"${key}": ${this[key]}`); // key - обьект элементті; this[key]-обьект элементтінің индекс бойынша ұстаған value-сі
  // if (between && index !== array.length - 1) {// функция арқылы келген переменный мен цикл арқылы келген переменныйды теңестіріп шарт қоюға болады
  // console.log("--------------");
  // }
  // });
  // if (bottom) {
  //   console.log("------- End -------");
  // }
  // },
};

// const bound = logger.keys.bind(person)(); //this қойған кезде обьектті таппай қалады өйткені ішінде тұрған жоқ, оны керекті обьекттің ішіне апару үшін   bound() пен call(person) қолданылады
// console.log(bound)
// bound();
// logger.keys.call(person);

// logger.withParams.call(person); //true, true, true - қосымша переменныйлар жіберу
// logger.withParams.call(person, true, true, true); //true, true, true - қосымша переменныйлар жіберу
// logger.withParams.apply(person, [true, true, true]);
// -------------------------------------------------
// const mun = {
//   // name: "Vladilen",
//   // age: 26,
//   kaey(value, name) {
//     Object.keys(this).forEach((i,jon) => {
//       if (jon !== name) {
//       console.log(jon);
//       console.log(value + "=>" + name + "=>" + i + ":" + this[i]);
//       }
//     });
//   },
// };

// mun.kaey.apply(person,["KUKa", 5]);

// logger.keysAndValues.apply(person);
