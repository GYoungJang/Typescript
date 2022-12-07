interface Name {
  readonly name: string;
}
class Cat implements Name {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHello() {
    return "야옹";
  }
}

class Fish implements Name {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  dive(param: number) {
    return "~m 다이빙 했습니다.";
  }
}

type Pet = Cat | Fish;

function talkPet(pet: Pet): string {
  if (pet instanceof Cat) {
    return pet.sayHello();
  } else if (pet instanceof Fish) {
    return "물고기는 말을 하지 못합니다.";
  }
  return 'exit';
}

const cat:Pet = new Cat("고양이");
const fish:Pet = new Fish("물고기");

console.log(talkPet(cat));
console.log(talkPet(fish));
