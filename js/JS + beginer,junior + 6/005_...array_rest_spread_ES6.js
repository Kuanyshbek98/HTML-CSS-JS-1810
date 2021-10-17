// Array.from(arguments) 
// return Array.from(arguments).reduce((acc, i) => acc += i, 0) / arguments.length

// const fib = [1, ...array]
// const [a, b = 42, ...c] = array    
// const [a,, c] = array   
// const { city, country, street = "Tverskaya", concat: addressConcat } = address;
// const { city, ...rest } = address;  
// const newAddress = { ...address, street: "Tverskaya", code: 123 };

// -------------------------------------------
// Rest
function average(a, b, ...args) { // ...args
  return args.reduce((acc, i) => (acc += i), 0) / args.length;
}
console.log(average(10, 20, 30, 40, 50))


function average() {
  // Array.from(arguments) болғанда () іші бос болады
  return Array.from(arguments).reduce((acc, i) => acc += i, 0) / arguments.length
}
console.log(average(10, 20, 30, 40, 50))

// Spread
// const array = [1, 2, 3, 5, 8, 13]
// console.log(...array)  //массивті жоғалтып сандар тізбегі қылыады
// console.log(Math.max(...array))
// console.log(Math.min(...array))
// console.log(Math.max.apply(null, array))  //массивті жоғалтып сандар тізбегі қылады

// const fib = [1, ...array]
// console.log(fib)  //массивке 1 санын қосып , бір массив қылып шығарады

// Destructuring
const array = [1, undefined, 3, 5, 8, 13];

// const a = array[0]
// const b = array[1]
// const [a, b = 42, ...c] = array   // ...c қалған элементтерді бір массив қылып с-ға теңестіру
// console.log(a, b, c)

// const [a,, c] = array  // екі үтір арасында бір элемент бар деп есептеледі
// console.log(a, c)

// Object
const address = {
  country: "Russia",
  city: "Moskow",
  // street: 'Lenina',
  concat: function () {
    return `${this.country}, ${this.city}, ${this.street}`;
  },
};

// const {city, country, street = 'Tverskaya', concat: addressConcat} = address
// address деген obj.name - ға алдын ала теңестіріп қояды
// console.log(addressConcat.call(address)) //concat- деген функц болғансоң .call()арқылы теңестред
// console.log(street)

const { city, ...rest } = address; //...rest қалған обьект элементтерін массив ішіне салады
console.log(city);
console.log(rest);

const newAddress = { ...address, street: "Tverskaya", code: 123 };
// ...address  бірінші полный обьект массивке салады, келесілері новый элемент жалғайды
console.log(newAddress);

// console.log(address.concat())
