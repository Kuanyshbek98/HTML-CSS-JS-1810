// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Success')
//   }, 500)
// })

const delay = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Done! ${ms}`), ms);
  });

// delay(1000)
//   .then(data => delay(500))  // 1500ms -тан кейін орындалады
//   .then(data => console.log(data))
//   .catch(err => console.log(err))  // resolve -орнында reject болса
//   .finally(() => console.log('Finally'))

// async function asyncDelay() {
//   try {
//     const data = await delay(2000)
//     console.log(data)
//   } catch (e) {
//     console.log('Error', e)
//   }
// }
//
// asyncDelay()

Promise.all([
  //- Группа Aсинхронность
  // барлық Promise-тің орындалып болғанын күтеді, сосын барлық нәтижесін шығарады
  delay(1000),
  delay(500),
  delay(2000),
]).then((data) => console.log(data));

Promise.race([
  // ең тез Promise-тің орындалып болғанын күтеді,орындалып болса соның нәтижесін шығара береді, барлығы болған кезде, қайтадан барлығының нәтижесін бірге шығарады, ең тезідің нәтижесі тағы шығады
  delay(1000),
  delay(500),
  delay(2000),
]).then((data) => console.log(data));
