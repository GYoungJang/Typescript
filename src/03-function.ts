/*
    function 함수이름 (변수명 : 타입) : 반환타입 {}
*/
const tetfunction = () => {
  return "test";
};
console.log(tetfunction());
function sum1(a: number, b: number){
  return a + b;
}
// console.log( sum1(1,'a') );
// console.log( sum1(1, null) );
function sum2(a: number, b: number): number {
  return a + b;
}
console.log(sum2(1, 2));
function sum3(a: number, b: number) {
  return a + b;
}
console.log("sum3 : ", sum3(1, 2));

function getInfo(obj: { name: string; age: number }) {}
let person1 = { name: "코딩온", age: 10 };

getInfo(person1);

interface PersonData {
  readonly name: string;
  age: number;
  nickname?: string;
}
getInfo(person1);

function getInfo2(obj: PersonData) {}
let person2: PersonData = { name: "코딩온", age: 10 };
person2.age = person2.age + 1;
// person2.name = 'dd';

interface login {
  (id: string, pw: string): boolean;
}
let loginUser: login = (id, pw) => {
  return true;
};

interface Book {
  title: string;
  getInfo(): void;
  changeTitle(newTitle: string): void;
}
class MyBook implements Book {
  title = "책";
  date = "2022-12-25";
  getInfo() {
    console.log("정보");
  }
  changeTitle(newTitle: string): void {}
}
