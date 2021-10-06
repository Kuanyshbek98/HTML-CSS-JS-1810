const name = 'Владилен'
const age = 26

function getAge() {

  return age
}

// const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет.'
const output = `Привет, меня зовут ${name} и мой возраст ${age < 30 ? 'A' : 'B'} лет.`
// const output = `
//   <div>This is div</div>
//   <p>this is o</p>
// ` 
// // `${function}`,`${if()}`,`${name} string `-ішіне переменни жазу үшін қолданылады
 
console.log(output)
 

// console.log(name.length)  // неше әріп екенін анықтау
// console.log(name.toUpperCase()) // барлығын үлкен әріппен
// console.log(name.toLowerCase()) // барлығын кіші әріппкен
// console.log(name.charAt(2))  / /  массиф бойынша шығару 2 әріпті шығару, Жауабы : а
// console.log(name.indexOf('лен'))  // берілген жазу нешінші қатардан басталады
// console.log(name.indexOf('!'))  // егер ондай жазу жоқ болса -1 шығарады
// console.log(name.startsWith('Влад')) //  осындай сөз барма, әріптердің үлкен кішісі рол ойнайды
// console.log(name.toLowerCase().startsWith('влад')) // әріптерді кіші қылып,сосын іздеуге болады
// console.log(name.endsWith('ен!'))   // ОСЫ СӨЗБЕН АЯҚТАЛАДЫМА  (true / false)
// console.log(name.repeat(3))   // берілген жазуды 3 рет қайталау
// const string = '     password      '
// console.log(string.trim())  // артық пробелдерді жою
// console.log(string.trimLeft()) //  сол жақтағы
// console.log(string.trimRight()) //  оң жақтағы

// function logPerson(s, name, age) {
//   if (age < 0) {
//     age = "Еще не родился";
//   }
//   return `${s[0]}${name}${s[1]}${age}${s[2]}`;
// }

// const personName = "Владилен";
// const personName2 = "Максим";
// const personAge = 26;
// const personAge2 = -10;

// const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`;
// const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`;

// console.log(output);
// console.log(output2);
