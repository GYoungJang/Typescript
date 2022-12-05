// : 타입 표기 (Type Annotation)
var str: string = "hi";
var num: number = 1;
var flag: boolean = true;
var age: number | string;
age = 10;
age = "a";
let any: any;

// Array
let arr1: number[] = [1, 2, 3, 4, 5];
let arr2: string[] = ["a", "b", "c"];
let arr3: Array<number> = [1, 2, 3, 4, 5];

// Tuple
let arr4: [string, number] = ["str", 1];
arr4[0].concat();
// arr4[1].concat() concat은 문자열만 가능..

// Enum
enum Names {
  홍길동,
  코딩온,
  새싹,
}
let name1: Names = Names.홍길동;
name1 = Names.코딩온;

// void
// 함수 : 반환값이 없음 / 변수 : undefined와 null만 들어갈 수 있음.
let void1: void = undefined;
function void2(): void {
  console.log("11");
}

// never
// 함수에 사용. 함수의 끝에 절대 도달하지 않는다.
// 반환하지 않음...
// function neverEnd(): never {
//     while(true) {

//     }
// }

let test: any; // 모든 타입 허용..
test = 1;
test = [1,2,3];

let test2: object; // 기본 타입을 제외한 나머지 모두 (array, tuple 등)
// test2 = 1;
test2 = [1,2,3]