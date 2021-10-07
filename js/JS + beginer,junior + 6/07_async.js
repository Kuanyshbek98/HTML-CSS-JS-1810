// async function () {
//   try {
//      await number();
//   } catch (err) {
//   }

// await number()
//   .then((n) => {
//   })
//   .catch((err) => {
//   });
// }

// = () => 
// ------------------------------------
// // Event Loop

// const timeout = setTimeout(() => {
// // clearTimeout(timeout) // clearTimeout - егер ішіне жазылса функция бір рет орындалады
//   console.log('After timeout')
// }, 2500)

// clearTimeout(timeout)
// //
// const interval = setInterval(() => {
//   console.log('After timeout')
// }, 1000)

// clearInterval(interval)

// const delay = (callback, wait = 1000) => {
//   setTimeout(callback, wait); // бұл жерде callback функция қызметінде тұр
// };

// delay(a, b); //a-міндетті түрде функция болуы не нәтиже шығаруы керек, b-уақыт өлшемі болуы керек

// delay(() => {
//   console.log("After 2 seconds");
// }, 2000);

// const delay = (wait = 1000) => {
//   const promise = new Promise((resolve, reject) => {
//     //глобадьный функция асинхронный Promise түрі
//     setTimeout(() => {
//       // бұл жерде callback-переменный жоқ сол үшін () => функция қызметінде тұр
//         resolve("kuka"); //қате дұрыс орындалды деп жіберу керек болса,және қандай мән жібер укерек
//     //   reject("Что-то пошло не так. Повторите попытку kUKA"); //қате жіберу керек болса, және қандай мән жібер керек
//     }, wait);
//   });
//   return promise;
// };

// delay(2500)
//   .then((n) => {
//     //resolve БЕРГЕН мән осында () ішіндегі переменныйға келеді
//     console.log(n + "After 2 seconds");
//   })
//   .catch((err) => console.error("Error:", err)) //reject берген мән осында errЖға келеді
//   .finally(() => console.log("Finally"));

// const getData = () => new Promise((resolve) => resolve([1, 1, 2, 3, 5, 8, 13]));

// getData().then(data => console.log(data))

// async function asyncExample() {
//   // Promise емес async-await түрі
//   try {
//     // дұрыс болған кезде resolve мәні
//     console.log("Data");
//     await delay(5000); //await - осы функция орындалып болғанын күтеді
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
//---------------------------Example----------------------
// const number = () => {
//   // 2 Promise қайсысы бірінші орындалады тексеру
//   const promaseExam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("project true");
//       reject("error project");
//       console.log("asas");
//     }, 2300);
//   });
//   return promaseExam;
// };

// const number2 = () => {
//   // 2 Promise қайсысы бірінші орындалады тексеру
//   const promaseExam = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("project true2");
//       reject("error project");
//       console.log("asassdfsdf");
//     }, 1500); // екіні кейінгі функцияға әдейі аз сикунт берді 1-шіні күдедіма тексеру үшін
//   });
//   return promaseExam;
// };

// async function ExampleAsync() {
//   try {
//     //resolve -да жіберген данный керек болмаса осыны қолданасың
//     //немесе resolve  дұрыс болып жатса функциядан алдын бірәрсе шығару үшін
//     await number();
//     await number2(); //await - алдындағы функция қанша ұзақ болсада бір нәтиже бергенше күтеді
//   } catch (err) {
//     console.log(err);
//   }

//   // await number()
//   //   .then((n) => {  //resolve -да жіберген данныйды алғың келсме осыны қолданасың
//   //     console.log(n);
//   //   })
//   //   .catch((err) => {
//   //     console.log(err);
//   //   });

//   // await number2()
//   //   .then((n) => {
//   //     console.log(n);
//   //   })
//   //   .catch((err) => {
//   //     console.log(err);
//   //   });
// }
// ExampleAsync();

const kuka = () => new Promise((resolve) => resolve("kuka yes"));
//  = () =>  осылай  переменныйға теңестірген кезде сразу функция қылып жеруге болады
kuka().then((n) => console.log(n));
