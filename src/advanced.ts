/* 타입 가드는 특정 속성이나 메서드를 사용하기 전에 
그것이 존재하는지 확인하거나 타입을 사용하기 전에 
이 타입으로 어떤 작업을 수행할 수 있는지를 확인하는 개념 또는 방식
*/

// 객체 생성 x, 타입 정의
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'tang',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable1 = string | number;
type Numeric = boolean | number;

type Universal = Combinable1 & Numeric;

// 함수 오버로드, 함수명이 같다..

function add3(a: number, b: number): number;
function add3(a: number, b: string): string;
function add3(a: string, b: number): string;
function add3(a: string, b: string): string;
function add3(a: Combinable1, b: Combinable1) {
  // if문이 타입가드
  if (typeof a === 'string' || typeof b === 'string')
    return a.toString() + b.toString();
  return a + b;
}

// const result = add3('zzb', 'tang') as string;
const result = add3('zzb', 'tang');
result.split(' ');

// 옵셔널 체이닝
const fetchedUserData = {
  id: 'u1',
  name: 'zzb',
  job: { title: 'CEO', description: 'MY own company' },
};

// console.log(fetchedUserData.job && fetchedUserData.job.title);
console.log(fetchedUserData?.job.title);

// null 병합
const userInput2 = null;

// const storeData = userInput2 || 'DEFAULT';
const storeData = userInput2 ?? 'DEFAULT';

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name : ' + emp.name);
  // 속성이 존재하는지 확인
  if ('privileges' in emp) {
    console.log('Privileges : ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Start Date : ' + emp.startDate);
  }
}

// printEmployeeInformation(e1)
printEmployeeInformation({ name: 'tang', startDate: new Date() });

// class의 경우
class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck');
  }
  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
  // if ("loadCargo" in vehicle) {
  //   vehicle.loadCargo(1000);
  // }
}

useVehicle(v1);
useVehicle(v2);

// 하나의 공통 속성 - type : 객체를 설명하는 속성
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

// 인터페이스로 구현하면 instanceof는 사용 못함..
function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving with speed ' + speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });

/* 
TS는 HTML 파일을 살펴보고 읽고 분석하지 못함..
어떤 특정 HTML 요소인지는 모름..
*/
const paragraph = document.querySelector('p');
const paragraph2 = document.getElementById('message-output');
// 형 변환..
/* 
느낌표를 사용하여 느낌표 앞의 표현식을 
null로 반환하지 않겠다고 타입스크립트에게 인식시킴
*/
// const userInputElement = <HTMLInputElement>(
//   document.getElementById('user-input')!
// );

// 느낌표를 쓰기 싫으면 이렇게..
// const userInputElement = document.getElementById('user-input');
// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = 'Hi there!';
// }

const userInputElement = document.getElementById(
  'user-input'
)! as HTMLInputElement;
userInputElement.value = 'zzbtang';

// 인덱스 타입
// 정확한 속성 이름을 모르고 속성의 개수도 모를 때..
interface ErrorContainer {
  // 이 객체의 모든 속성의 이름과 값은 문자열
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email',
  1: 'Not a valid email', // 숫자도 문자형으로 변환돼서 가능
  username: 'Must start with a capital character!',
};
