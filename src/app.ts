// const names: any[]=[];
// 제네릭 타입
// const names: Array<string | number> = []; // string[] 같음
// const names: Array<string> = []; // string[] 같음

// 프로미스
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('this is done!');
//   }, 2000);
// });

// 제네릭 함수 생성
// 두 객체 병합하고 새 객체 반환
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

// console.log(merge({ name: 'zzb' }, { age: 20 }));

const mergedObj = merge({ name: 'tang' }, { age: 20 });
