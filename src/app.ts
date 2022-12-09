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
class DataStorage<T> {
  private data: T[] = [];
  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
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
const objStorage = new DataStorage<object>();
objStorage.addItem({ name: 'zzb' });
objStorage.addItem({ name: 'tang' });

objStorage.removeItem({ name: 'zzb' });
console.log(objStorage.getItems());
