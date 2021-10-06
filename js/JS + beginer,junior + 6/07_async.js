// // Event Loop

// // const timeout = setTimeout(() => {
// // // clearTimeout(timeout) // clearTimeout - егер ішіне жазылса функция бір рет орындалады
// //   console.log('After timeout')
// // }, 2500)
// //
// // clearTimeout(timeout)
// //
// // const interval = setInterval(() => {
// //   console.log('After timeout')
// // }, 1000)
// //
// // // clearInterval(interval)

// // const delay = (callback, wait = 1000) => {
// //   setTimeout(callback, wait) // бұл жерде callback функция қызметінде тұр
// // }
// //
// // delay(() => {
// //   console.log('After 2 seconds')
// // }, 2000)

// const delay = (wait = 1000) => {
//   const promise = new Promise((resolve, reject) => {
//     //глобадьный функция асинхронный Promise түрі
//     setTimeout(() => {
//       // бұл жерде callback-переменный жоқ сол үшін () => функция қызметінде тұр
//       // resolve() //қате дұрыс орындалды деп жіберу керек болса,және қандай мән жібер укерек
//       reject("Что-то пошло не так. Повторите попытку"); //қате жіберу керек болса, және қандай мән жібер керек
//     }, wait);
//   });
//   return promise;
// };

// // delay(2500)
// //   .then(() => {   //resolve БЕРГЕН мән осында () ішіндегі переменныйға келеді
// //     console.log('After 2 seconds')
// //   })
// //   .catch(err => console.error('Error:', err)) //reject берген мән осында errЖға келеді
// //   .finally(() => console.log('Finally'))

// const getData = () => new Promise((resolve) => resolve([1, 1, 2, 3, 5, 8, 13]));

// // getData().then(data => console.log(data))

// async function asyncExample() {
//   // Promise емес async-await түрі
//   try {
//     // дұрыс болған кезде resolve мәні
//     await delay(3000);   //await - осы функция орындалып болғанын күтеді
//     const data = await getData();
//     console.log("Data", data);
//   } catch (e) {
//     // қаате болған кезде reject мәні
//     console.log(e);
//   } finally {
//     // қандай жағдай болғандада шығатын
//     console.log("Finally");
//   }
// }

// asyncExample();
