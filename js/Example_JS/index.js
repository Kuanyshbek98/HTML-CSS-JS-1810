const map = new Map([
  ["a", 1],
  ["c", 3],
  // ["d", 4],
  // ["e", 6],
]);

console.log(map); // десең жауабы:  {'a'=>1} болады
// console.log(map.get("d")); // десең жауабы: 1 болады
// map.set("b", 2).set(NaN, "Number").set(42, "demo"); // set()  деген push() сияқты элемент жалғайды
// console.log(map.get(NaN)) // десең жауабы: Number болады
// map.clear()   // барлық элемнттерін өшіреді
// console.log(map.has(42)) // 42-деген осындай ключавой барма тексеру
// map.delete("b"); // b-деген ключавой элементі өшіру
// console.log(map.size)  // қанша элементі бар екенін санын анықтау
//
// console.log(map); // десең жауабы:  {'a'=>1} болады
// 
// console.log(map.keys()) //цикл-итератор ретінде  беріледі  {a,b,"Nan", '42'}
// console.log(map.entries()) // массив ретінде беріледі [a,1],[b,2]....
// console.log(map.values()) //цикл-итератор ретінде беріледі {1,2,"Number", 'demo'}

// Set
const set = new Set([1, 1, 2, 3, 5, 8, 13, 13, 13, 5, 8]); //new Set- глобальный класс
console.log(set); // жауабы: 1,2,3,5,8,13  ;   қайталанған элементтерді қабылдамайды
// console.log(set.size); // қанша элемент бар екенін білу
// console.log(set.add(21)); // элемент қосу
// set.clear()  // жою
// set.delete(1); // нешінші элементтін жою керек 

// console.log(set.keys()); // {1,2,3,5,8,13}
// console.log(set.values()); //{1,2,3,5,8,13}
// console.log(set.entries()); //[2,2],[3,3],[5,5],[8,8]
