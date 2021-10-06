// Reflect - қарапайм class-тан айырмашылығы ownKeys, preventExtensions сияқты қосымшалары бар
// кейбір кілт сөзде қолдану арқылы сирек операцияларды орындау үшін керек 
class Student {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

class ProtoStudent {
  university = "Oxford";
}

const student = Reflect.construct(Student, ["Igor"]);

// console.log(student.__proto__ === ProtoStudent.prototype)

Reflect.apply(student.greet, { name: "Tester" }, []);
console.log(Reflect.ownKeys(student)); // Элементтердің тек value - сін шығару

Reflect.preventExtensions(student); // заблокировать элемнт қосуға болмайды

student.age = 25; //  элемeнт қосу үшін

console.log(Reflect.isExtensible(student)); // обьекть заблокирован ба тексеру

console.log(student);
