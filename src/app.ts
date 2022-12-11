// function Logger(a: Function) {
//   console.log('Logging');
//   console.log(a);
// }
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: Function) {};
}

// decorator
// @Logger
@Logger('Logging-Person')
class Person1 {
  name = 'zzb';
  constructor() {
    console.log('creating person object');
  }
}

// const per = new Person1();

// console.log(per);
