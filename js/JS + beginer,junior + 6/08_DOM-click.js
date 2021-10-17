// // HTML - да JS файл жалғаған кезде аастына жазу керек

// const heading = document.getElementById("hello");
// const heading2 = document.getElementsByTagName("h2")[1]; // бұл массив түрінде беріледі
// const heading2 = document.getElementsByClassName("class")[1]; // сол үшін [0] -болуы керек
// var mySrc = heading2.getAttribute("id");
// const heading2 = document.querySelector(".class"); // бұл екі осындай бірдей класс тұрса тек брінші элементтін ғана өрсетеді
// const heading2 = document.querySelector('#id') // Всегда 1 элемент
const heading1 = document.querySelectorAll("h2")[0];
const heading2 = document.querySelectorAll("h2")[1];
const heading3 = document.querySelectorAll("h2")[2];

// console.dir(heading2); // осы элементтің деревосын мүмкіндіктекрін көрсетеді
console.log(heading2); // осы элементтің деревосын мүмкіндіктекрін көрсетеді

// const heading3 = heading2.nextElementSibling; // heading2-ден кейінгісін көрсетеді
// const h2List = document.querySelectorAll("h2"); // ВЫБРАТЬ ВСЕ
// const heading3 = h2List[h2List.length - 1]; //ішіндегі керектісін алып алу// не үшін  -1  масив 0-ден басталадв
// console.log(heading3);

setTimeout(() => {
  // addStylesTo(heading3, "Практикуйся", "blue"); // heading3- тегінің ішіндегі дочерный тег ссылка болса астындағы сызық көрінбей қалады, оны жөндеу үшін
  // addStylesTo(heading3.querySelector("a"), "Практикуйся", "blue"); // осылай немесе келесідей немес жоғарыдағы link бойынша теңестіріп алу
  addStylesTo(heading3.children[0], "Практикуйся", "blue"); // heading3- тегінің ішіндегі дочерный тегті нақты ұстау үшін
}, 3000);

const link = heading3.querySelector("a");
// //  https://developer.mozilla.org/ru/docs/Web/Events  - click сияқты событялар жинағы

link.addEventListener("click", (event) => {
  // event - dir сияқты
  event.preventDefault();
  // console.log("Click on link", event.target.getAttribute("href")); // ссылканы ұстау
  const url = event.target.getAttribute("href");
  console.log(url);
  // window.location = url;   //  ссылкаға өту
});

setTimeout(() => {
  addStylesTo(heading2, "JavaScript-in Kuanyshbek", "green", "35px");
}, 1500);

// setInterval(() => {
//   addStylesTo(heading2, "JavaScript-in Kuanyshbek", "green");
// }, 1500);

// setInterval(() => {
//   addStylesTo(heading2, "JavaScript-in Kuanysh", "blue");
// }, 2000);

// setTimeout(() => {
//   addStylesTo(link, "Практикуйся", "black", "green");
// }, 3000);

// setTimeout(() => {
//   addStylesTo(heading2, "И все получится!", "yellow", "2rem");
// }, 4500);

function addStylesTo(node, text, color = "red", fontSize, bg = "yellow") {
  // function addStylesTo(node, text, color = "red", fontSize) {
  node.textContent = text;
  node.style.color = color;
  node.style.textAlign = "center";
  node.style.backgroundColor = bg;
  node.style.padding = "2rem";
  node.style.display = "block";
  node.style.margin = "auto";
  node.style.width = "50%";

  // // falsy: '', undefined, null, 0, false
  if (fontSize) {
    node.style.fontSize = fontSize;
  }
}

//  https://developer.mozilla.org/ru/docs/Web/Events  - click сияқты событялар жинағы
heading1.onclick = () => {
  if (heading1.style.color === "red") {
    heading1.style.color = "#000";
    heading1.style.backgroundColor = "#fff";
    heading1.style.width = "100%";
    heading1.style.border = "1px solid";
    heading1.style.textAlign = "center";
  } else {
    heading1.style.color = "red";
    heading1.style.backgroundColor = "#000";
    heading1.style.padding = "2rem";
    heading1.style.width = "50%";
    heading1.style.margin = "1% auto";
  }
};

// //  https://developer.mozilla.org/ru/docs/Web/Events  - dblclick сияқты событялар жинағы

// heading2.addEventListener("dblclick", () => {
//   if (heading2.style.color === "green") {
//     heading2.style.color = "#000";
//     heading2.style.backgroundColor = "#fff";
//   } else {
//     heading2.style.color = "green";
//     heading2.style.backgroundColor = "#000";
//   }
// });

const header = document.querySelector("#header");
// const testBtn = document.querySelector("#testBtn");

console.log(header);
// function sayHello() {
//   let message = "Hello " + name;
//   console.log(message);
// }

// sayHello();

// window.addEventListener("scroll", function () {
//   header.classList.add("red"); // class ішіне класс жалғау
//   console.log(header);
// });

window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll); //scroll  пайда қылу

function checkScroll() {
  let scrollPos = window.scrollY;

  if (scrollPos > 0) {
    
    header.classList.add("red"); // class жалғау
    header.style.backgroundColor = "red";
    console.log(header); // classList - class жинағы
  } else {
    header.classList.remove("red"); // class өшіру
    header.style.backgroundColor = "#000";
    console.log(header);
  }
}

// document.querySelector("html").onclick = function () {
//     alert("Ouch! Stop poking me!");
//   };

// testBtn.addEventListener("click", function() {
//     console.log('clicked');
// });

const navLinks = document.querySelectorAll(".nav__link");
for (let navItem of navLinks) {
  navItem.addEventListener("click", function () {
    console.log(navItem.text);
    navItem.style.color === "" || navItem.style.color === "white"
      ? (navItem.style.color = "blue")
      : (navItem.style.color = "white");
  });
}

// // Пример 1:
// // Эквивалентьно DOM
var myHTML = document.querySelector("html");
myHTML.onclick = function () {
  console.log("clicked");
};

// const testBtn = document.querySelector("#testBtn");
// testBtn.addEventListener("click", function() {
// console.log('clicked');
// });

// // Пример 2:
// // Бірнеше кнопканың собитиясын бір функция арқылы жазу
// const navLinks = document.querySelectorAll(".nav__link");
// for(let navItem of navLinks) {
//  navItem.addEventListener("click", function() {
//         console.log(navItem.text);
// });
// }

// // Пример 3: click -img аустыру
// var myImage = document.querySelector('img');
// myImage.onclick = function() {
//     var mySrc = myImage.getAttribute('src');
//     if(mySrc === 'images/firefox-icon.png') {
//       myImage.setAttribute ('src','images/firefox2.png');
//     } else {
//       myImage.setAttribute ('src','images/firefox-icon.png');
//     }
// }

// // Пример 4: prompt играт текст
// //  <h1></h1>
// //  <button>Change user</button>

var myButton = document.querySelector("button");
var myHeading = document.querySelector("#example");
myButton.onclick = function () {
  setUserName();
};
function setUserName() {
  var myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName); //localStorage.setItem - кэш, папка сияқты нәрсе ішіне данный салып қайта алуға болады: 
  // set-get  алу-қою
  console.log("-" + localStorage.getItem("name"));
  myHeading.textContent = "Mozilla is cool, " + myName;
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}

// localStorage.setItem("name", myName);
// localStorage.getItem("name")
