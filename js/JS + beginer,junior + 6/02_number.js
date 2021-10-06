// 1 Number
// const num = 42 // integer
// const float = 42.42 // float
// const pow = 10e3
//
// console.log('MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER) // MAX_SAFE_INTEGER максималный интежер
console.log('Math.pow 53', Math.pow(2, 5) + 10)  // 2-нің 5 дәрежесі + 10 ды қосу
// console.log('MIN_SAFE_INTEGER', Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE', Number.MAX_VALUE)  // MAX_VALUE максималный value
// console.log('MIN_VALUE', Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY', Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY)  // INFINITY -  безконечност
// console.log('2 / 0', 2 / 0)   // результат будет INFINITY (безконечност)
// console.log(Number.NaN) // Not A Number
// console.log(typeof NaN)
// const weird = 2 / undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(42))   // isNaN - белгісізба
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(42))  //  isFinite - аяқталатынба
//
const stringInt = '40'
const stringFloat = '40.42'
// console.log(Number.parseInt(stringInt) + 2)
// console.log(parseInt(stringInt) + 2)
// console.log(Number(stringInt) + 2)
console.log(+stringInt + 2)   // parseInt - string-тарды  Int-ке айналдыру

// console.log(parseFloat(stringFloat) + 2)
console.log(+stringFloat + 2) // parseFloat - string-тарды  Float-қа айналдыру

// console.log(0.4 + 0.2) // 0.6000000001  бөлген кезде осылай болып кетеді, оны реттеу үшін
console.log(+(0.4 + 0.2).toFixed(1))  //  toFixed -үтірден кейін неше сан болу керек екенін
// console.log(parseFloat((0.4 + 0.2).toFixed(1)))  // оны Float-қа айналдыру

// 2 BigInt  // Int ,string , Float-сияқты бұлда  type
console.log(90071992547409919999999n - 9007199254740991999999n)
// console.log(-90071992547409919999999n)
// console.log(90071992547409919999999.23231n) // error

// console.log(10n - 4) // error
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n) // 2n  тек қана Integer қабылдайды

// 3 Math   // математикалық тұрақтылар операторлар т.б. жиналған обьект
// console.log(Math.E)
// console.log(Math.PI)
//
console.log(Math.sqrt(25)) // түбір асты
// console.log(Math.pow(5, 3)) // дәреде
console.log(Math.abs(-42)) // модул барлығын + сан қылу
console.log(Math.max(42, 12, 23, 11, 422))  // ең үлкенін
console.log(Math.min(42, 12, 23, 11, 422))  // ең кішісін табу
console.log(Math.floor(4.9)) //  артқа қарай дөңгелектеу
console.log(Math.ceil(4.9)) // алға қарай дөңгелектеу
console.log(Math.round(4.4)) // санды дөңгелектеу
console.log(Math.trunc(4.9)) // үтір алдындағы санды алу, қалғанын өшіру
console.log(Math.random())

// 4 Example
// function getRandomBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min); //floor random() бүтін қылу үшін
// }

// console.log(getRandomBetween(10, 42));
