// const promise = (ms) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Success");
//       console.log("true");
//     }, ms);
//   });

// promise(2500).then(() => promise(3000)).then((d)=>console.log("suble: " + d))

// const delay = (ms, nim = "kuk") =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(`Done! ${ms}`), ms);
//     console.log(nim);
//   });

// delay(1000, "ku")
// .then((data) => delay(500, data)) // 1500ms -тан кейін орындалады
// .then(data => console.log(data))
// .catch(err => console.log("err: "+ err))  // resolve -орнында reject болса
// .finally(() => console.log('Finally'))

// async function asyncDelay() {
//   try {
//     const data = await delay(2000)
//     console.log(data)
//   } catch (e) {
//     console.log('Error', e)
//   }
// }

// asyncDelay()

// Promise.all([
//   //- Группа Aсинхронность
//   // ең үлкен ұзақ Promise-тің орындалып болғанын күтеді, сосын барлық нәтижесін бірге шығарады
//   delay(6000),
//   delay(5000),
//   delay(1000),
// ]).then((data) => console.log(data));

// Promise.race([
//   // ең тез Promise-тің орындалып болғанын күтеді,орындалып болса соның нәтижесін шығарады
//   delay(1000),
//   delay(800),
//   delay(2000),
// ]).then((data) => console.log(data));
