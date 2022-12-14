// function Logger(a: Function) {
//   console.log('Logging');
//   console.log(a);
// }
function Logger(logString: string) {
  console.log('LOGGER FACTORY');
  // 반환되는 것이 실제 데코레이터
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

// 템플릿과 함께 새 데코레이터 팩토리 만들기
function WithTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');
  // 반환되는 것이 실제 데코레이터
  return function (constructor: any) {
    console.log('Rendering template');
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  };
}

// decorator
// @Logger
// 아래 데코레이터를 먼저 실행
@Logger('Logging')
@WithTemplate('<h1>MY Person Object</h1>', 'app') // html div에 할당
class Person1 {
  name = 'zzb';
  constructor() {
    console.log('creating person object');
  }
}

const per = new Person1();

console.log(per);

// ---

function Log(target: any, propertyName: string | Symbol) {
  console.log('Property decorator');
  // target은 오브젝트의 프로토타입
  console.log(target, propertyName);
}

class product {
  @Log
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}
