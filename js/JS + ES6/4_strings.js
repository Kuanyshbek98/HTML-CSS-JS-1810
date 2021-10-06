// const title = 'Hello'
//
// const isVisible = () => Math.random() > 0.5
//
// const template = `
//   ${isVisible() ? `<p>Visible</p>` : ''} //``осы белгі арқылы текст жазу, условия беругеде болады
//   <h1 id='demo' style="color: red">${title}</h1>
// `
//
// console.log(template)   //  `` осы белгі арқылы текст жазу

// Methods
const str = "Hello";

console.log(str.startsWith("He")); // осы сөзбен басталаы ма
console.log(str.startsWith("e"));
console.log(str.endsWith("lo")); // осы сөзбен аяқталады ма
console.log(str.startsWith("e"));

console.log(str.includes("llo"));

console.log(str.repeat(3)); // осы сөзбен 3-рет қайталау

console.log(str.trim()); // бос орындарды Өшіру
console.log(str.trimEnd()); // соңындағы бос орындарды Өшіру
console.log(str.trimStart());

console.log(str.padStart(10, "1234")); // алдындағы бос орындарды '1234' -мен  толтыру
console.log(str.padEnd(8, "abc")); // соңындағы бос орындарды 'abc' -мен  толтыру
