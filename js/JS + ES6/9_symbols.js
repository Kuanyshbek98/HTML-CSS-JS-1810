const symbol = Symbol("demo"); // Symbol() - глобалный
const other = Symbol("demo"); //бір атаумен екі переменный керек болса-астында ссылка бар

// console.log(symbol)
// console.log(other)
//
// console.log(symbol === other)  // бұл екеуі бірдей болсада тең емес, әр қайсысы уникальный символ

const obj = {
  name: "Elena",
  demo: "DEMO",
  [symbol]: "meta",
};

for (let key in obj) {
  console.log(key); // цикл кезінде  [symbol]:-ды оқымайды
}

console.log(obj.demo);
console.log(obj[symbol]);
//будеть  разные значение

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Symbol
