// 인터페이스는 객체의 구조를 설명하기 위해서만 사용
// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add2: AddFn;

add2 = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  // outputName 속성이 Named를 구현하는 Person내에 있을 수도 있고 없을 수도 있고 선택적..
  outputName?: string;
}
interface Greetable extends Named {
  greet(phrase: string): void;
}

// 인터페이스는 상속과 다르게 여러 개 가능.. 쉼표로 구분
class Person implements Greetable {
  name?: string;
  age = 20;
  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }
  greet(phrase: string) {
    if (this.name) {
      console.log(`${phrase} ${this.name}`);
    } else {
      console.log('Hi!');
    }
  }
}
// user1의 타입이 Greetable
let user1: Greetable;

// user1 = new Person('zzb');
user1 = new Person();

user1.greet('Hi there - I am');
console.log(user1);
