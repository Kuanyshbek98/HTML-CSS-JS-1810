const validator = {
  get(target, prop) {
    // get - берілген нәрселерді тексеру
    return prop in target ? target[prop] : `Поля ${prop} в объекте нет`;
  },

  set(target, prop, value) {
    //set - өзгерген нәрселерді тексеру
    if (value.length > 2) {
      Reflect.set(target, prop, value);
    } else {
      console.log(
        "Длинна должна быть больше 2х символов. Сейчас " + value.length
      );
    }
  },
};

const form = {
  login: "tester",
  password: "12345",
};

const formProxy = new Proxy(form, validator); //new Proxy() 2 обектіні не фуенцияларды байланыстырып операциялар орындай алады

// console.log(formProxy.login)
// console.log(formProxy.password)
// console.log(formProxy['username'])

// formProxy.password = '12'
// console.log(formProxy.password)

function log(message) {
  console.log("[Log]: ", message);
}

const proxy = new Proxy(log, {
  // log функциясына байланыса алса келесі функция орындалады
  apply(target, thisArg, argArray) {
    if (argArray.length === 1) {
      //параметр барма 1-ге теңба тексеру
      Reflect.apply(target, thisArg, argArray); //бар болса log функциясындағы операцияларды орындау
    } else {
      console.log("Количество аргументов не совпадает");
    }
  },
});

proxy("Custom message");
proxy("");
proxy("Message", 2);
