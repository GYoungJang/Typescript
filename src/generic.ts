// const names: any[]=[];
// 제네릭 타입 - 정확히 어떤 타입이 될지 모를 때? 어떤 타입이 되든 상관 없음.. 사용할 때 명시
// const names: Array<string | number> = []; // string[] 같음
// const names: Array<string> = []; // string[] 같음

// 프로미스
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('this is done!');
//   }, 2000);
// });

// 제네릭 함수 생성

// Object.assign함수 : 두 객체 병합하고 새 객체 반환
// 함수를 정의할 때 타입들이 고정적으로 설정되지 않음
// 함수를 호출할 때 동적일 수 있도록 설정..
// extends 제네릭 타입에 특정한 제약 조건 설정
// T와 U타입이 일단은 객체여야 한다는 의미.
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// console.log(merge({ name: 'zzb' }, { age: 20 }));

const mergedObj = merge({ name: 'tang' }, { age: 20 });
// const mergedObj2 = merge<{ name: string }, { age: number }>(
//   { name: 'tang' },
//   { age: 20 }
// );
console.log(mergedObj.age);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('hi there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));
console.log(countAndDescribe([]));

// U타입은 T타입의 객체의 key라는 것을 알려줌..
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

console.log(extractAndConvert({ name: 'zzb' }, 'name'));

// 제네릭 클래스
// 원시값에만 작동하도록..
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('zzb');
textStorage.addItem('tang');
textStorage.removeItem('zzb');
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
// const objStorage = new DataStorage<object>();
// objStorage.addItem({ name: 'zzb' });
// objStorage.addItem({ name: 'tang' });

// 객체나 배열은 indexOf는 작동하지 않음
// console.log(objStorage.getItems());
// 위의 zzb과는 다른 객체이기 때문에 다른 주소를 가짐
// 따라서 자바스크립트가 주소를 찾지 못해서 indexOf가 -1 반환해서
// 배열의 마지막 요소를 제거
// objStorage.removeItem({ name: 'zzb' });
// 정상 작동하려면 정확히 같은 객체를 전달해야함
// const maxObj = { name: 'zzbtang' };
// objStorage.addItem(maxObj);
// console.log(objStorage.getItems());
// objStorage.removeItem(maxObj);

// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

// function createCourseGoal(
//   title: string,
//   description: string,
//   date: Date
// ): CourseGoal {
//   return { title: title, description: description, completeUntil: date };
// }

// Partial 타입
function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// Readonly 타입
const names: Readonly<string[]> = ['zzb', 'tang'];
// names.push('aaa');
